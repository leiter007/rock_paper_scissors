// const { expect } = require('chai');
// const BrowserHelpers = require('e2e_training_wheels')
// const browser = new BrowserHelpers()
require('../spec.helper');

describe('User can play a Rock Paper Scissor round', () => {
    before(async () => {
      await browser.init()
      await browser.visitPage('http://localhost:8080/')
    });

  beforeEach(async () => {
    await browser.page.reload();
  });

  after(() => {
    browser.close();
  });

  it('renders the correct page title', async () => {
    expect(await browser.page.title()).to.eql('Rock Paper Scissors');
  });
});