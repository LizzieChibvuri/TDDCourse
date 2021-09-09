import { textSpanContainsTextSpan } from "typescript";
import { Game } from "../app/Game";
import { Moves } from "../app/Moves";
import { Results } from "../app/Results";

describe('Game', () => {
    describe('Play',()=>{
        [ Moves.Paper, Moves.Rock, Moves.Scissors ,Moves.Spock].forEach(move => {
            it(`Same moves tie`, () => {
                //Arrange
                let sut = new Game();
                //Act
                let actual = sut.Play(move, move);
                //Assert
                let expected = Results.Tie;
                expect(actual).toBe(expected);
            })
        });
        
        [   
            {Player:Moves.Paper, Opponent: Moves.Rock, Result: Results.PlayerWins}, 
            {Player:Moves.Rock, Opponent: Moves.Paper, Result: Results.PlayerLoses } 
        ].forEach(testCase => {
            it(`Paper beats Rock`, () => {
                //Arrange
                let sut = new Game();
                //Act
                let actual = sut.Play(testCase.Player, testCase.Opponent);
                //Assert
                let expected = testCase.Result;
                expect(actual).toBe(expected);
            })
        });
        
        [   
            {Player:Moves.Rock, Opponent: Moves.Scissors, Result: Results.PlayerWins}, 
            {Player:Moves.Scissors, Opponent: Moves.Rock, Result: Results.PlayerLoses } 
        ].forEach(testCase => {
            it(`Rock Beats Scissors`, () => {
                //Arrange
                let sut = new Game();
                //Act
                let actual = sut.Play(testCase.Player, testCase.Opponent);
                //Assert
                let expected = testCase.Result;
                expect(actual).toBe(expected);
            })
        });
        
        [   
            {Player:Moves.Scissors, Opponent: Moves.Paper, Result: Results.PlayerWins}, 
            {Player:Moves.Paper, Opponent: Moves.Scissors, Result: Results.PlayerLoses } 
        ].forEach(testCase => {
            it(`Scissors Beats Paper`, () => {
                //Arrange
                let sut = new Game();
                //Act
                let actual = sut.Play(testCase.Player, testCase.Opponent);
                //Assert
                let expected = testCase.Result;
                expect(actual).toBe(expected);
            })
        });

        [   
            {Player:Moves.Spock, Opponent: Moves.Scissors, Result: Results.PlayerWins}, 
            {Player:Moves.Scissors, Opponent: Moves.Spock, Result: Results.PlayerLoses } 
        ].forEach(testCase => {
            it(`Spock Beats Scissors`, () => {
                //Arrange
                let sut = new Game();
                //Act
                let actual = sut.Play(testCase.Player, testCase.Opponent);
                //Assert
                let expected = testCase.Result;
                expect(actual).toBe(expected);
            })
        });

        [   
            {Player:Moves.Paper, Opponent: Moves.Spock, Result: Results.PlayerWins}, 
            {Player:Moves.Spock, Opponent: Moves.Paper, Result: Results.PlayerLoses } 
        ].forEach(testCase => {
            it(`Paper Beats Spock`, () => {
                //Arrange
                let sut = new Game();
                //Act
                let actual = sut.Play(testCase.Player, testCase.Opponent);
                //Assert
                let expected = testCase.Result;
                expect(actual).toBe(expected);
            })
        });
    })
  
})



