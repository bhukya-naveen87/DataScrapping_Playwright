### Playwright project Setup
``` npm inti playwright```

### Other commands:
- Runs the end-to-end tests in headless mode.
```npx playwright test```
- Runs the end-to-end tests in head mode.
```npx playwright test --headed```

- Starts the interactive UI mode.
  ```npx playwright test --ui```

- Runs the tests only on Desktop Chrome.
  ```npx playwright test --project=chromium```

- Runs the tests in a specific file.
  ```npx playwright test example```

- Runs the tests in debug mode.
  ```npx playwright test --debug```

- Auto generate tests with Codegen.
  ```npx playwright codegen```