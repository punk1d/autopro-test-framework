
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./Tests/WufooTestSuite.js'],

  params: {

        /** valid development server login**/
        Login: {
            user: 'tradingbills',
            password: 'TVMYtiwob63%'
        },

        WufooCredentials: {
            apiKey: '7H5N-Z0YP-CXOQ-NLCL',
            subdomain: 'mldc'
        }
      },

  framework: 'jasmine2',

  onPrepare: function(){

    var jasmineReporters = require('jasmine-reporters');
    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
        consolidateAll: true,
        savePath: 'testresults',
        filePrefix: 'IntegrationsTestRun',
        /*modifySuiteName: function(generatedSuiteName, suite) {
                // this will produce distinct suite names for each capability,
                // e.g. 'firefox.login tests' and 'chrome.login tests'
                var today = new Date();
                var testReport = 'Test Run - ' + today.getDate() + '/' + today.getMonth() + '/' + today.getFullYear() + " - " + today.getMilliseconds();
                generatedSuiteName = generatedSuiteName + " - " + testReport;
                return generatedSuiteName;
            }*/
    }));

    global.isAngularSite = function(flag) {
            browser.ignoreSynchronization = !flag;
    };

    // Module to disable angular animations
        var disableNgAnimate = function() {
            angular
                .module('disableNgAnimate', [])
                .run(['$animate', function($animate) {
                    $animate.enabled(false);
                }]);
        };

        // Module to disable css animations
        var disableCssAnimate = function() {
            angular
                .module('disableCssAnimate', [])
                .run(function() {
                    var style = document.createElement('style');
                    style.type = 'text/css';
                    style.innerHTML = '* {' +
                        '-webkit-transition: none !important;' +
                        '-moz-transition: none !important' +
                        '-o-transition: none !important' +
                        '-ms-transition: none !important' +
                        'transition: none !important' +
                        '}';
                    document.getElementsByTagName('head')[0].appendChild(style);
                });
        };

        // Adds both disable animations modules
        browser.addMockModule('disablegAnimate', disableNgAnimate);
        browser.addMockModule('disableCssAnimate', disableCssAnimate);

    // Global driver for non angular elements
    // Test usage: dvr.findElement(by.css('[data-ptor="submit-btn"]'));
    global.dvr = browser.driver;

    // Set the browser windows size
    dvr.get('http://ui.benchmarkemail.com');
    dvr.manage().window().setSize(1080, 774);
    dvr.manage().window().setPosition(1, 1);

  }
}
