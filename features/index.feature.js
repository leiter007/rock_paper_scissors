require('../spec.helper');

describe('User can play a Rock Paper Scissor game', () => {
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

  describe('Player vs Computer', () => {
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

  describe('Player1 vs Player2 - Player 1 draw', () => {
    beforeEach(async () => {
      await browser.clickOnButton("button[id='new_one_vs_one_game']");
    });

    let player1Name = "Player 1"
    let player2Name = "Player 2"

    it('shows right Draw -and result messages - for Player 1 playing ROCK', async () => {
      await browser.clickOnButton("button[id='rock-btn']")
      let player1_message = await browser.getContent("div[id='player1_selection']")
      let player2_message = await browser.getContent("div[id='player2_selection']")
      let disp_result = await browser.getContent("div[id='display_result']")

      expect(player1_message).to.eql(`${player1Name} made draw!`)
      expect(player2_message).to.eql("")
      expect(disp_result).to.eql(`Waiting on ${player2Name}...`)
    });

    it('shows right Draw -and result messages - for Player 1 playing PAPER', async () => {
      await browser.clickOnButton("button[id='paper-btn']")
      let player1_message = await browser.getContent("div[id='player1_selection']")
      let player2_message = await browser.getContent("div[id='player2_selection']")
      let disp_result = await browser.getContent("div[id='display_result']")

      expect(player1_message).to.eql(`${player1Name} made draw!`)
      expect(player2_message).to.eql("")
      expect(disp_result).to.eql(`Waiting on ${player2Name}...`)
    });

    it('shows right Draw -and result messages - for Player 1 playing SCISSORS', async () => {
      await browser.clickOnButton("button[id='scissors-btn']")
      let player1_message = await browser.getContent("div[id='player1_selection']")
      let player2_message = await browser.getContent("div[id='player2_selection']")
      let disp_result = await browser.getContent("div[id='display_result']")

      expect(player1_message).to.eql(`${player1Name} made draw!`)
      expect(player2_message).to.eql("")
      expect(disp_result).to.eql(`Waiting on ${player2Name}...`)
    });
  });

  describe('Player1 vs Player2 - Player 2 draw', () => {
    let player1Name = "Player 1"
    let player2Name = "Player 2"

    it('shows right Draw -and result messages - ROCK vs ROCK', async () => {

      let player1_draw = "Rock"
      let player2_draw = "Rock"
      let winner_message= "It's a tie"

      await browser.clickOnButton("button[id='rock-btn']")
      await browser.clickOnButton("button[id='rock-btn-2']")
      let player1_message = await browser.getContent("div[id='player1_selection']")
      let player2_message = await browser.getContent("div[id='player2_selection']")
      let disp_result = await browser.getContent("div[id='display_result']")

      expect(player1_message).to.eql(`${player1Name} played ${player1_draw}`)
      expect(player2_message).to.eql(`${player2Name} played ${player2_draw}`)
      expect(disp_result).to.eql(winner_message)
    });

    it('shows right Draw -and result messages - PAPER vs PAPER', async () => {

      let player1_draw = "Paper"
      let player2_draw = "Paper"
      let winner_message= "It's a tie"

      await browser.clickOnButton("button[id='paper-btn']")
      await browser.clickOnButton("button[id='paper-btn-2']")
      let player1_message = await browser.getContent("div[id='player1_selection']")
      let player2_message = await browser.getContent("div[id='player2_selection']")
      let disp_result = await browser.getContent("div[id='display_result']")

      expect(player1_message).to.eql(`${player1Name} played ${player1_draw}`)
      expect(player2_message).to.eql(`${player2Name} played ${player2_draw}`)
      expect(disp_result).to.eql(winner_message)

   


    });


  });
})