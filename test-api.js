const http = require('http');

async function checkStatus() {
    const data = JSON.stringify({ age: 1 }); // Invalid payload

    const options = {
        hostname: 'localhost',
        port: 3000,
        path: '/api/calculator',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': data.length
        }
    };

    const req = http.request(options, (res) => {
        console.log(`Validation Test HTTP Status: ${res.statusCode}`);
    });

    req.on('error', (error) => {
        console.error('Validation Test Error:', error);
    });

    req.write(data);
    req.end();
}

async function checkRateLimit() {
    const data = JSON.stringify({ name: "Test", age: 25, unit: "metric", weight: 70, height: 175 }); // Valid payload

    const options = {
        hostname: 'localhost',
        port: 3000,
        path: '/api/calculator',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(data),
            'X-Forwarded-For': '123.123.123.123'
        }
    };

    const makeRequest = (i) => {
        return new Promise((resolve) => {
            const req = http.request(options, (res) => {
                console.log(`Rate Limit Req ${i} Status: ${res.statusCode}`);
                resolve();
            });
            req.on('error', () => resolve());
            req.write(data);
            req.end();
        });
    };

    for (let i = 1; i <= 7; i++) {
        await makeRequest(i);
    }
}

async function runTests() {
    console.log("Starting Validation Test...");
    await checkStatus();
    console.log("Starting Rate Limit Test...");
    await checkRateLimit();
}

runTests();
