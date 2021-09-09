import { Moves } from "./Moves";
import { Results } from "./Results";

export class Game {
    Play(playerMove: string, opponentMove: string) {
        let dictionary = new Map([
            [Moves.Paper+Moves.Rock,Results.PlayerWins],
            [Moves.Paper+Moves.Scissors,Results.PlayerLoses],
            [Moves.Rock+Moves.Paper,Results.PlayerLoses],
            [Moves.Rock+Moves.Scissors,Results.PlayerWins],
            [Moves.Scissors+Moves.Paper,Results.PlayerWins],
            [Moves.Scissors+Moves.Rock,Results.PlayerLoses],
            [Moves.Scissors+Moves.Scissors,Results.Tie],
            [Moves.Rock+Moves.Rock,Results.Tie],
            [Moves.Paper+Moves.Paper,Results.Tie],
            [Moves.Spock+Moves.Spock,Results.Tie],
            [Moves.Spock+Moves.Scissors,Results.PlayerWins],
            [Moves.Scissors+Moves.Spock,Results.PlayerLoses],
            [Moves.Paper+Moves.Spock,Results.PlayerWins],
            [Moves.Spock+Moves.Paper,Results.PlayerLoses],
        ])

        return dictionary.get(playerMove+opponentMove) || Results.PlayerWins;
    }

}
