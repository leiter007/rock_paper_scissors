const { Rps } =  require('../spec.helper')

describe('RockPaperScissor', () => {
    let rps = new Rps

    it('returns a number if no game rules are met', () => {
        expect(rps.check(1)).to.eql(1)
    })

})