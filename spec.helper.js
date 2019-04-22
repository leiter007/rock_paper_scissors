const chai = require('chai');
const BrowserHelpers = require('e2e_training_wheels')
global.browser = new BrowserHelpers()
global.expect = chai.expect;

const fs = require('fs');

let calc = fs.readFileSync('./src/js/rps.js');
eval(calc + `\nexports.RoundCalculator = RoundCalculator;`)
