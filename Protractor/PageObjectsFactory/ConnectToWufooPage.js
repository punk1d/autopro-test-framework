var WebElements = require ('../Base/ElementLibrary.js');
var Actions = require ('../Base/ActionsLibrary.js');

var ConnectToWufooPage = function() {

  var previousConnections = WebElements.css('#ddPreviousConnections > option:nth-child(2)');
  var apiKey = WebElements.css('#ApiKey');
  var subdomain = WebElements.css('#Subdomain');
  var nextButton = WebElements.css('#submit');

  this.connectToWufoo = function(apiKeyCredential, subdomainCredential) {
    Actions.clickElement(previousConnections);
    Actions.sendText(apiKey, apiKeyCredential);
    Actions.sendText(subdomain, subdomainCredential);
    Actions.clickElement(nextButton);
  }
}

module.exports = new ConnectToWufooPage;
