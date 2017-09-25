/**
 * @fileoverview Sample Plugin for Solium v1
 * @author Raghav Dua <duaraghav8@gmail.com>
 */

'use strict';

module.exports = {

	meta: {
		description: 'This is a Sample plugin. Get over it.'
	},

	rules: {

		foo: {
			meta: {
				docs: {
					recommended: true,
					type: 'warning',
					description: 'blahblah'
				},
				schema: []
			},
			create: function (context) {
				function inspectProgram (emitted) {
					if (emitted.exit) { return; }

					context.report ({
						node: emitted.node,
						message: 'The rule sample/foo reported an error successfully.'
					});
				}

				return {
					Program: inspectProgram
				};
			}
		},

		bar: {
			meta: {
				docs: {
					recommended: true,
					type: 'warning',
					description: 'blahblah'
				},
				schema: []
			},
			create: function (context) {
				function inspectProgram (emitted) {
					if (emitted.exit) { return; }

					context.report ({
						node: emitted.node,
						message: 'The rule sample/bar reported an error successfully.'
					});
				}

				return {
					Program: inspectProgram
				};
			}
		}

	}

};