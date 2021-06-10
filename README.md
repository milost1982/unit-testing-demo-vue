# unit-testing-demo-vue2
Demo for automated testing of Vue.js (v2) application

## Project setup
```
npm install
```
### Compiles and hot-reloads for development
```
npm run serve
```
By default this will start dev web server on http://localhost:8080

### Test running command examples:
Run all tests (ie. Jest will find and run all *.spec.js files):
```
 npm run test:unit
```
Run all tests but supress npm errors in case test fails (useful to reduce clutter on the screen):
```
 npm run test:unit -s
```
Run specific test file (eg. HelloWorld.spec.js):
```
 npm run test:unit -s -- -i HelloWorld
```

Run specific test by the test name (eg. text specified as parameters to function `describe('text')` or `it('text')` methods):
```
 npm run test:unit -s -- -t "math tests"
 npm run test:unit -s -- -t "HelloWorld Component"
```

Run tests in watch mode (ie. when test or code file is changed tests are executed automatically):
```
 npm run test:unit -s -- --watch
```
Update Jest snapshot
```
 npm run test:unit -s -- --updateSnapshot
```
### Notes:
* Using Jest testing framework which includes test runner and assertions lib: https://jestjs.io
* Test files are *.spec.js located in `tests\unit` project directory
