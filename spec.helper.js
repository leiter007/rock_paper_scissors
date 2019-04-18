const chai = require('chai');
const BrowserHelpers = require('e2e_training_wheels')
global.browser = new BrowserHelpers()
global.expect = chai.expect;

const fs = require('fs');
let rps = fs.readFileSync('./src/js/rps.js');
eval( rps + `\nexports.Rps = Rps;`)