# solium-plugin-sample
Sample Solium Plugin. Also serves as the entry point for any solium plugin developer.

- Make sure Solium is installed globally in your system (`npm install -g solium`).
- Clone this repository using `git clone <URL>`. `cd` to it.
- Run `npm install --dev` to install both the dependencies and devDependencies.
- Run `npm link` to make this plugin globally available. (You can confirm that it worked by going to any random directory in your system, firing up Nodejs REPL and run `require('solium-plugin-sample')`).
- Now run `npm test` to ensure that all tests of sample plugin are passing and it prints the 2 error objects on console. If this doesn't happen, please report the issue.
- You're now ready to develop your plugin from the sample :)


You would ideally start by over-writing the `package.json` but make sure the dependencies and devDependencies are installed.
It is recommended that you include keywords `solium`, `soliumplugin` & `solidity` in your package.json.
