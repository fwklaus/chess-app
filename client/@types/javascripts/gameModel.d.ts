// models internal representation of the game and behavior
interface GameModel {
  state: GameState;
  moves: GameMove;
  board: GameBoard;
  player1: Player;
  player2: Player;
  handlers: EventHandlers;
}