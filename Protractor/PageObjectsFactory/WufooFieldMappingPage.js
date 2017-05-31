var WebElements = require ('../Base/ElementLibrary.js');
var Actions = require ('../Base/ActionsLibrary.js');

var WufooFieldMappingPage = function() {

  var nextButton = WebElements.css('#submit');

  this.completeWufooImport = function(){
    Actions.clickElement(nextButton);
    browser.sleep(3000);
  };
};

module.exports = new WufooFieldMappingPage;
