const chai = require('chai');
const BrowserHelpers = require('e2e_training_wheels')
global.browser = new BrowserHelpers()
global.expect = chai.expect;
const fs = require('fs');

let round = fs.readFileSync('./src/js/round.js');
let round2 = fs.readFileSync('./src/js/round_2P.js');
eval(round + round2 + `\nexports.Round = Round;\nexports.Round = Round_2P;`)
