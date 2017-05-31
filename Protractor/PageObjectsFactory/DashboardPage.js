var WebElements = require('../Base/ElementLibrary.js');
var Actions = require('../Base/ActionsLibrary.js');

var DashboardPage = function() {

  var profileButton = WebElements.css('#form1 > header > div.topmenu > div > div > ul.system.right > li:nth-child(5) > ul > li > a');
  var integrationsButton = WebElements.href('[href="/Integrate"]');

  this.openIntegrationsPage = function(){
    Actions.hoverElement(profileButton);
    Actions.clickElement(integrationsButton);
  }

}

module.exports = new DashboardPage();
