const chai = require('chai');
const BrowserHelpers = require('e2e_training_wheels')
global.browser = new BrowserHelpers()
global.expect = chai.expect;

const fs = require('fs');

let calc = fs.readFileSync('./src/js/round_calc.js');
eval(calc + `\nexports.Round = Round;`)
