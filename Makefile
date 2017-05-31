default: test

test:
	/usr/local/bin/node ./node_modules/.bin/protractor ./Protractor/Confs/confSauce.js

PHONY: test
