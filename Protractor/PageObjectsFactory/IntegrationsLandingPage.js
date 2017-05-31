var WebElements = require('../Base/ElementLibrary.js');
var Actions = require('../Base/ActionsLibrary.js');

var IntegrationsLandingPage = function() {

  var viewMoreButton = WebElements.css('#more > tbody > tr:nth-child(2) > td:nth-child(2) > table > tbody > tr > td:nth-child(2) > a > div > ul > li > span > span');

  this.clickOnViewMore = function() {
    Actions.clickElement(viewMoreButton);
  }

}

module.exports = new IntegrationsLandingPage;
