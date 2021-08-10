describe('Game', () => {
    describe('Play',()=>{
        it('Given PlayerMove paper and OpponentMove rock should return player wins', () => {
            //Arrange
            let sut=new Game();
            const playerMove = "Paper";
            const Opponent = "Rock";
            //Act
            let actual=sut.Play(playerMove,Opponent);
            //Assert
            let expected="Player Wins";
            expect(actual).toBe(expected);
        })
        it('Given PlayerMove paper and OpponentMove Scissors should return player loses', () => {
            //Arrange
            let sut=new Game();
            const playerMove = "Paper";
            const Opponent = "Scissors";
            //Act
            let actual=sut.Play(playerMove,Opponent);
            //Assert
            let expected="Player Loses";
            expect(actual).toBe(expected);
        })
    })
  
})

export class Game{
    Play(playerMove:string,opponentMove:string) {
     
        if(opponentMove==="Scissors")
        {
            return "Player Loses";
        }

        return "Player Wins";
       
    }

}