import { Game } from "../app/Game";
import { Moves } from "../app/Moves";
import { Results } from "../app/Results";

describe('Game', () => {
    describe('Play',()=>{
        it('Given PlayerMove paper and OpponentMove rock should return player wins', () => {
            //Arrange
            let sut = new Game();
            const playerMove = Moves.Paper;
            const opponent = Moves.Rock;
            //Act
            let actual = sut.Play(playerMove, opponent);
            //Assert
            let expected = Results.PlayerWins;
            expect(actual).toBe(expected);
        })
        
        it('Given PlayerMove paper and OpponentMove Scissors should return player loses', () => {
            //Arrange
            let sut = new Game();
            const playerMove = Moves.Paper;
            const opponent = Moves.Scissors;
            //Act
            let actual = sut.Play(playerMove, opponent);
            //Assert
            let expected = Results.PlayerLoses;
            expect(actual).toBe(expected);
        })
        
        let moves: Moves[] = [ Moves.Paper, Moves.Rock, Moves.Scissors ];

        moves.forEach(move => {
            it(`Given both players choose ${move} should tie`, () => {
                //Arrange
                let sut = new Game();
                //Act
                let actual = sut.Play(move, move);
                //Assert
                let expected = Results.Tie;
                expect(actual).toBe(expected);
            })
        });

        it('Given PlayerMove paper and OpponentMove paper should return tie', () => {
            //Arrange
            let sut = new Game();
            const playerMove = Moves.Paper;
            const opponent = Moves.Paper;
            //Act
            let actual = sut.Play(playerMove, opponent);
            //Assert
            let expected = Results.Tie;
            expect(actual).toBe(expected);
        })

        it('Given PlayerMove rock and OpponentMove rock should return tie', () => {
            //Arrange
            let sut = new Game();
            const playerMove = Moves.Rock;
            const opponent = Moves.Rock;
            //Act
            let actual = sut.Play(playerMove, opponent);
            //Assert
            let expected = Results.Tie;
            expect(actual).toBe(expected);
        })
        
        it('Given PlayerMove scissors and OpponentMove scissors should return tie', () => {
            //Arrange
            let sut = new Game();
            const playerMove = Moves.Scissors;
            const opponent = Moves.Scissors;
            //Act
            let actual = sut.Play(playerMove, opponent);
            //Assert
            let expected = Results.Tie;
            expect(actual).toBe(expected);
        })
    })
  
})



