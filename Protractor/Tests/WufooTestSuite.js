var landingPage = require ('../PageObjectsFactory/LandingPage.js');
var loginPage = require ('../PageObjectsFactory/LoginPage.js');
var dashboardPage = require ('../PageObjectsFactory/DashboardPage.js');
var IntegrationsLandingPage = require ('../PageObjectsFactory/IntegrationsLandingPage.js');
var IntegrationsPage = require ('../PageObjectsFactory/IntegrationsPage.js');
var ConnectToWufooPage = require ('../PageObjectsFactory/ConnectToWufooPage.js');
var ConfigureWufooPage = require ('../PageObjectsFactory/ConfigureWufooPage.js');
var WufooFieldMappingPage = require ('../PageObjectsFactory/WufooFieldMappingPage.js');
var WufooConfirmationPage = require ('../PageObjectsFactory/WufooConfirmationPage.js');
var ContactListDashboardPage = require ('../PageObjectsFactory/ContactListDashboardPage.js');

describe("User Imports Wufoo Contacts to a New List", function(){
  it("Opens browser and loads benchmark prod site", function(){
    //find and click sign in button
    browser.ignoreSynchronization = true;
    landingPage.clickSignIn();
    expect(browser.getCurrentUrl()).toBe('https://ui.benchmarkemail.com/Login');
  });

  it("Logs in using valid credentials", function(){
    loginPage.logIn(browser.params.Login.user, browser.params.Login.password);
  });

  it("Opens Integrations Landing page", function(){
    dashboardPage.openIntegrationsPage();
  })

  it("Opens Integrations page", function(){
    IntegrationsLandingPage.clickOnViewMore();
  })

  it("Opens Wufoo Connection Page", function() {
    IntegrationsPage.selectWufooIntegration();
  })

  it("Connects to Wufoo", function() {
    ConnectToWufooPage.connectToWufoo(browser.params.WufooCredentials.apiKey, browser.params.WufooCredentials.subdomain);
  })

  it("Configures Wufoo Import - Empty form, all contacts, new list", function() {
    ConfigureWufooPage.configureImportEmptyFormNewList();
  })

  it("Completes field mapping and see confirmation page", function() {
    WufooFieldMappingPage.completeWufooImport();
    expect(browser.getCurrentUrl()).toBe('https://intgr_ui.benchmarkemail.com/Home/Confirmation');
  })

  it("Goes to My Lists Page", function(){
    ///WufooConfirmationPage.waitForConfirmation();
    WufooConfirmationPage.goToMyLists();
    //ContactListsPage.getName();
    expect(browser.getCurrentUrl()).toBe('https://ui.benchmarkemail.com/Contacts');
  })

  it("Checks that the new list can ve visible in Contact List Dashboard page", function(){
    browser.ignoreSynchronization = true;
    //Temporary solution
    var items = element.all(by.css('.lnkgrey')).filter(function(item) {
      return item.getText().then(function(label) {
        return label === ConfigureWufooPage.getListName();
      });
    });
    expect(items.count()).toBe(1);

    //expect(ContactListDashboardPage.checkForContactListToBeDisplayed()).toBe(1);

  })

});
