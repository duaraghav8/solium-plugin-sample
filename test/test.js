/**
 * @fileoverview Test Plugin for Solium v1
 * @author Raghav Dua <duaraghav8@gmail.com>
 */

'use strict';

console.log (process.cwd(), '***', __dirname)
var Solium = require ('solium');
/**
 * If you require any other modules like lodash, install them.
 * If the module is only being used in your tests, then it should go in your dev dependencies.
 * If being used by any of your rules, then it must go into dependencies.
 */

var config = {
	plugins: ['sample'],

	rules: {
		'sample/foo': 'warning',
		'sample/bar': [2]
	},

	// This returns internal warnings, like deprecation notices
	options: {
		returnInternalIssues: true
	}
};

describe ('Testing rules foo and bar', function () {

	it ('should accept some stuff and reject other stuff', function (done) {
		var code = 'contract BlueBerry { function foo () {} }';
		var errors = Solium.lint (code, config);
		// If your rules also contain fix()es you'd like to test, use:
		// var errors = Solium.lintAndFix (code, config);

		console.log ('****errors[0]:****\n', errors [0]);
		console.log ('****errors[1]:****\n', errors [1]);

		// Now you can test the error objects returned by Solium.
		// Each item in errors array represents a lint error produced by the plugin's rules foo & bar
		errors.should.be.Array ();
		errors.should.have.size (2);
		// Add further tests to examine the error objects

		// Once your tests have finished, call below functions to safely exit
		Solium.reset ();
		done ();
	});

});
