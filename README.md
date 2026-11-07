# Playwright Smoke Test Demo

A TypeScript portfolio sample that checks one successful login flow in Chromium using [The Internet's practice login page](https://the-internet.herokuapp.com/login). It uses the demo credentials published by the site.

The test signs in and verifies the secure page URL, the **Secure Area** heading, and the **Logout** link.

## Run locally

Use Node.js 22 or 24. From the repository directory:

```sh
npm ci
npx playwright install chromium
npm test
```

A successful run prints `1 passed`. The practice site must be reachable over the internet. On Linux, if Chromium reports missing system libraries, run `npx playwright install --with-deps chromium`.

Playwright saves a trace under `test-results/` if the test fails. Open it with `npx playwright show-trace <path-to-trace.zip>`.

See the [sample run](results/sample-run.md) for the recorded outcome.
