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

  // let displayResult = await browser.getContent("div[id='display-result']")
  

  it('shows right Draw messages for Rock draw', async () => {
    await browser.clickOnButton("button[id='rock-btn']")
    let player1_message = await browser.getContent("div[id='player1_selection']")
    let player2_message = await browser.getContent("div[id='player2_selection']")

    expect(player1_message).to.eql('You played Rock')
    expect(player2_message).to.be.oneOf(["Computer played Rock","Computer played Paper","Computer played Scissors"])
  });


});

