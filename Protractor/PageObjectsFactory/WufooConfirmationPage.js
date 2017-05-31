  var WebElements = require ('../Base/ElementLibrary.js');
var Actions = require ('../Base/ActionsLibrary.js');

var WufooConfirmationPage = function() {

  var myListsButton = WebElements.css('body > div.page-wrap > div.main-layout-container > div.container > div > div.col-md-6.c-space-container2 > a.sp-btn');

  this.waitForConfirmation = function() {
    Actions.waitForPageToLoad();
  };

  this.goToMyLists = function() {
    Actions.clickElement(myListsButton);
    Actions.waitForPageToLoad();
    //var myListButtonHref = Actions.getElementAttribute(myListsButton,'href');
  };

};

module.exports = new WufooConfirmationPage;
