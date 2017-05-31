var WebElements = require ('../Base/ElementLibrary.js');
var Actions = require ('../Base/ActionsLibrary.js');

var IntegrationsPage = function() {

  var wufooButton = WebElements.css('body > div.page-wrap > div.main-layout-container > div > div > div > div:nth-child(1) > div:nth-child(1) > div > a');

  this.selectWufooIntegration = function() {
    Actions.clickElement(wufooButton);
  }
}

module.exports = new IntegrationsPage;
