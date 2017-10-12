# Protractor Cucumber Seed

## Create a new project based on the QuickStart

Clone this repo into new project folder (e.g., `my-proj`).
```bash
git clone  https://github.com/EPAMLabJS/Module2.Task2.git  my-proj
cd my-proj
```

## Install npm packages

> See npm and nvm version notes above

Install the npm packages described in the `package.json` and verify that it works:

```bash
npm install
```

### npm scripts

Useful commands in npm scripts defined in the `package.json`:

* `npm run update` - run webdriver-manager update to download chrome driver
* `npm run e2e` - run protractor e2e tests


### Task

* Configure protractor.config.js by your app
* Create PO in support folder
* Create or update steps (actions and verifications) in step_definitions folder
* All test cases will be in features folder
* All files in feature should have extension .feature
* In feature files should be used steps, defined in step_definitions