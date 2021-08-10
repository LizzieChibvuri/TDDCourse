import { Moves } from "./Moves";
import { Results } from "./Results";

export class Game {
    Play(playerMove: string, opponentMove: string) {

        if (opponentMove === playerMove) {
            return Results.Tie;
        }
        if (opponentMove === Moves.Scissors) {
            return Results.PlayerLoses;
        }
        return Results.PlayerWins;
    }

}
