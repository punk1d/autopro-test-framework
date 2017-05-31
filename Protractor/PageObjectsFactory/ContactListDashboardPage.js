var WebElements = require('../Base/ElementLibrary.js');
var Actions = require('../Base/ActionsLibrary.js');
var ConfigureWufooPage = require('../PageObjectsFactory/ConfigureWufooPage.js');

var ContactListDashboardPage = function() {

/*  this.checkForContactListToBeDisplayed = function() {
      var list = WebElements.elementList('.lnkgrey');
      return Actions.matchListElementText(list, ConfigureWufooPage.getListName());
  };*/
};

module.exports = new ContactListDashboardPage;
