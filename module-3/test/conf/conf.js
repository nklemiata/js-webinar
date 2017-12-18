// conf.js
exports.config = {
    framework: 'mocha',
    assertion: 'chai',  //? is it provided correctly?
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['HomePage.spec.js'],
    /*multiCapabilities: [{
      browserName: 'firefox'
    }, {
      browserName: 'chrome'
    }]*/
  }