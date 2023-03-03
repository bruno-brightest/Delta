async function doHttpRequest(url: string, request?: RequestInit) {
    const response = await fetch(url, request);
    if (!response.ok) {
        let body;
        try {
            body = await response.text();
        } catch (err) {
            body = '';
        }
        throw new Error(`HTTP call failed with ${response.statusText}: ${body}`);
    }
    if (response.headers.get('content-type')?.startsWith('application/json')) {
        return await response.json();
    } else {
        return await response.text();
    }
}

async function fetchBrowserstackData(path: string) {
    return await doHttpRequest(`https://api-cloud.browserstack.com/app-automate/${path}`, {
        headers: {
            Authorization: 'Basic ' + Buffer.from(`${process.env.BROWSERSTACK_USER}:${process.env.BROWSERSTACK_ACCESS_KEY}`).toString('base64'),
        }
    });
}

async function postSlackMessage(payload: any) {
    if (!process.env.SLACK_WEBHOOK_URL) {
        throw new Error('SLACK_WEBHOOK_URL not set');
    }

    return await doHttpRequest(process.env.SLACK_WEBHOOK_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });
}

function shortenTestName(name: string) {
    if (name.length <= 40) {
        return name;
    }

    return name.slice(0, 40) + '…';
}

async function main() {
    const buildName = `${process.env.PLATFORM}-${process.env.GITHUB_RUN_ID}`;
    const builds: any[] = await fetchBrowserstackData('builds.json');
    const build = builds
        .find((build) => build.automation_build.name === buildName)
        ?.automation_build
    ;
    if (!build) {
        throw new Error(`Could not find build for ${buildName}`);
    }

    const sessions: any[] = await fetchBrowserstackData(`builds/${build.hashed_id}/sessions.json?limit=100`);
    sessions.sort(
        (a, b) => a.automation_session.name.localeCompare(b.automation_session.name, undefined, { numeric: true, sensitivity: 'base' })
    );
    const failedSessions = sessions.filter((session) => session.automation_session.status === 'failed');
    const passedSessions = sessions.filter((session) => session.automation_session.status === 'passed');

    const blocks: any[] = [
        {
            type: 'section',
            text: {
                type: 'mrkdwn',
                text: `*Test run finished*\n\nJob status: \`${process.env.JOB_STATUS}\``,
            },
        },
        {
            type: 'section',
            fields: [
                {
                    type: 'mrkdwn',
                    text: `*Platform:*\n${process.env.PLATFORM}`,
                },
                {
                    type: 'mrkdwn',
                    text: `*Github run:*\n<https://github.com/getdelta/mobile-app-tests/actions/runs/${process.env.GITHUB_RUN_ID}|${process.env.GITHUB_RUN_ID}>`,
                },
            ],
        },
        {
            "type": "context",
            "elements": [
                {
                    "type": "mrkdwn",
                    "text": [
                        passedSessions.length > 0 ? `:white_check_mark: ${passedSessions.length} passed\n` : '',
                        failedSessions.length > 0 ? `:x: ${failedSessions.length} failed` : '',
                    ].join(''),
                }
            ]
        },
        {
            "type": "actions",
            "elements": [
                {
                    "type": "button",
                    "text": {
                        "type": "plain_text",
                        "text": "View sessions"
                    },
                    url: build.public_url,
                },
                {
                    "type": "button",
                    "text": {
                        "type": "plain_text",
                        "text": "View report"
                    },
                    url: `https://test-results.delta.app/${process.env.GITHUB_RUN_ID}/index.html`,
                }
            ]
        }
    ];

    if (failedSessions.length > 0) {
        blocks.push({
            "type": "divider"
        }, {
            type: 'section',
            text: {
                type: 'mrkdwn',
                text: '*Failed tests:*\n\n' + failedSessions.map((session) => '• ' + shortenTestName(session.automation_session.name)).join('\n'),
            }
        });
    }

    await postSlackMessage({
        blocks,
    });
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});