# automation-pro-test-framework
==========
Automated tests with Protractor 3.0.0 and Jasmine2

Resources needed
==========
Recommended install [WebStorm](https://www.jetbrains.com/webstorm/download/)

Install [NodeJS](https://nodejs.org/en/download/) (version => 4.2)

Install Protractor+elementor:

    sudo npm install protractor@3.0.0 -g
    sudo npm install elementor -g
    sudo webdriver-manager update    

Environment
==========
Clone GitHub repository and install dependencies:

	git clone https://github.com/benchmarkinternetgroup/automation-pro-test-framework.git
	cd automation-pro-test-framework
	npm install

Run the tests locally
==========
By command line:

	protractor ./Protractor/Confs/conf.js

Via WebStorm IDE:

	Menu->Run->Edit Configurations
	Add New Configuration
	Name: Protractor
	JavaScript file: /usr/local/lib/node_modules/protractor/lib/cli.js
	Application parameters: ./Protractor/Confs/conf.js
	Ok
	Menu->Run->Run Protractor

Run tests via SauceLabs
==========
By command line / WebStorm:

	same steps as above just run the ./Protractor/Confs/confSauce.js

Global Variables
==========
Variables that may be pass when running test:

    ex. protractor ./Protractor/Confs/conf.js --params.login.user 'ngrocks'

    --params.Login.user
    --params.Login.password
    --params.Server.server

Using Elementor
==========
Just click Here: [Elementor ReadMe](https://github.com/andresdominguez/elementor/blob/master/README.md)
