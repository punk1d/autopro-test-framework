var WebElements = require('../Base/ElementLibrary.js');
var Actions = require('../Base/ActionsLibrary.js');

var LoginPage = function(){

  var userName = WebElements.id('login');
  var password = WebElements.id('password');
  var loginButton = WebElements.css('.ladda-button');

  //Function to click on Sign In link in Landing Page
  this.logIn = function(userLogin, userPassword){
      Actions.sendText(userName, userLogin);
      Actions.sendText(password,userPassword);
      Actions.clickElement(loginButton);
  };

};

module.exports = new LoginPage();
