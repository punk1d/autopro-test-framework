var WebElements = require ('../Base/ElementLibrary');
var Actions = require ('../Base/ActionsLibrary');

var ConfigureWufooPage = function() {

  var selectEmptyForm = WebElements.css('#FormSelected > option:nth-child(2)');
  var selectImportAll = WebElements.css('#WufooImportType > option:nth-child(2)');
  var selectCreateList = WebElements.css('#BenchmarkListType > option:nth-child(2)');
  var listName = WebElements.css('#txtListName');
  var nextButton = WebElements.css('#submit');
  var d = new Date();
  var name = 'Automation run - ' + d.getDate() + '/' + d.getMonth() + '/' + d.getFullYear() + '.' + d.getMilliseconds() + ' - ' + 'Wufoo List'

  this.configureImportEmptyFormNewList = function() {
    Actions.clickElement(selectEmptyForm);
    Actions.clickElement(selectImportAll);
    Actions.clickElement(selectCreateList);
    Actions.sendText(listName, name);
    Actions.clickElement(nextButton);
  };

  this.getListName = function() {
    return name;
  }
};

module.exports = new ConfigureWufooPage;
