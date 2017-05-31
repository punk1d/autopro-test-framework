var WebElements = require('../Base/ElementLibrary.js');
var Actions = require('../Base/ActionsLibrary.js');

var LandingPage = function(){

  var signInButton = WebElements.href('[href="https://ui.benchmarkemail.com/Login"]');

  //Function to click on Sign In link in Landing Page
  this.clickSignIn = function(){
      Actions.clickElement(signInButton);
      browser.sleep(4000);
  };
};

module.exports = new LandingPage();
