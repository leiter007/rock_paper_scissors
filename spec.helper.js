const chai = require('chai');
const BrowserHelpers = require('e2e_training_wheels')
global.browser = new BrowserHelpers()
global.expect = chai.expect;

const fs = require('fs');

let calc = fs.readFileSync('./src/js/round.js');
let calc_2 = fs.readFileSync('./src/js/round_2P.js');
eval(calc + calc_2 + `\nexports.Round = Round;\nexports.Round_2P = Round_2P`)