require('../spec.helper');
 var sinon = require('sinon')

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

  let player1Name = "You"

  it('shows right Draw messages - for Rock', async () => {
    await browser.clickOnButton("button[id='rock-btn']")
    let player1_message = await browser.getContent("div[id='player1_selection']")
    let player2_message = await browser.getContent("div[id='player2_selection']")
    expect(player1_message).to.eql(`${player1Name} played Rock`)
    expect(player2_message).to.be.oneOf(["Computer played Rock","Computer played Paper","Computer played Scissors"])
  });

  it('shows right Draw messages - for Paper', async () => {
    await browser.clickOnButton("button[id='paper-btn']")
    let player1_message = await browser.getContent("div[id='player1_selection']")
    let player2_message = await browser.getContent("div[id='player2_selection']")
    expect(player1_message).to.eql(`${player1Name} played Paper`)
    expect(player2_message).to.be.oneOf(["Computer played Rock","Computer played Paper","Computer played Scissors"])
  });

  it('shows right Draw messages - for Scissors', async () => {
    await browser.clickOnButton("button[id='scissors-btn']")
    let player1_message = await browser.getContent("div[id='player1_selection']")
    let player2_message = await browser.getContent("div[id='player2_selection']")
    expect(player1_message).to.eql(`${player1Name} played Scissors`)
    expect(player2_message).to.be.oneOf(["Computer played Rock","Computer played Paper","Computer played Scissors"])
  });


  
  // it('saves winner session for all action buttons', async () => {

  //   await browser.clickOnButton("button[id='rock-btn']")
  //   await browser.clickOnButton("button[id='paper-btn']")
  //   await browser.clickOnButton("button[id='scissors-btn']")

  //   let drawCount = await this.page.evaluate(
  //     () => this.window.sessionStorage.length)

  //   expect(drawCount).to.eql(3)
  // });

});

