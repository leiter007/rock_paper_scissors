require('../spec.helper');

describe('User can play a Rock Paper Scissor game - vs computer', () => {
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

  it('renders new game vs Computer', async () => {
    await browser.clickOnButton("button[id='new_comp_game']")
    let newGame = await browser.getContent("p[id='game_selection']")
    expect(newGame).to.eql('GAME VS COMPUTER');
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

  it('renders new one-on-one game', async () => {
    await browser.clickOnButton("button[id='new_one_vs_one_game']")
    let newGame = await browser.getContent("p[id='game_selection']")
    expect(newGame).to.eql('PLAYER 1 VS PLAYER 2');
  });
});

describe('User can play a Rock Paper Scissor game - one-on-one', () => {
    before(async () => {
      await browser.init()
      await browser.visitPage('http://localhost:8080/')
    });
  
    beforeEach(async () => {
      await browser.page.reload();
      await browser.clickOnButton("button[id='new_one_vs_one_game']");
    });
  
    after(() => {
      browser.close();
    });

    let player1Name = "Player 1"
    let player2Name = "Player 2"

  it('shows right Draw and result messages - for Player 1 playing rock', async () => {
    await browser.clickOnButton("button[id='rock-btn']")
    let player1_message = await browser.getContent("div[id='player1_selection']")
    let player2_message = await browser.getContent("div[id='player2_selection']")
    let disp_result = await browser.getContent("div[id='display_result']")
    expect(player1_message).to.eql(`${player1Name} made draw!`)
    expect(player2_message).to.eql("")
    expect(disp_result).to.eql(`Waiting on ${player2Name}...`)
  });
  

  // it('shows right Draw messages - for Paper', async () => {
  // 	await browser.clickOnButton("button[id='paper-btn']")
  // 	let player1_message = await browser.getContent("div[id='player1_selection']")
  // 	let player2_message = await browser.getContent("div[id='player2_selection']")
  // 	expect(player1_message).to.eql(`${player1Name} played Paper`)
  // 	expect(player2_message).to.be.oneOf(["Computer played Rock","Computer played Paper","Computer played Scissors"])
  // });

  // it('shows right Draw messages - for Scissors', async () => {
  // 	await browser.clickOnButton("button[id='scissors-btn']")
  // 	let player1_message = await browser.getContent("div[id='player1_selection']")
  // 	let player2_message = await browser.getContent("div[id='player2_selection']")
  // 	expect(player1_message).to.eql(`${player1Name} played Scissors`)
  // 	expect(player2_message).to.be.oneOf(["Computer played Rock","Computer played Paper","Computer played Scissors"])
  // });
});



