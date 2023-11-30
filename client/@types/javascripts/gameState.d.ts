// interpret the game state
// manage the game state
interface GameState {
  isDraw(): boolean;
  isWin(): boolean;
  copy(): GameState;
  equivalent(): boolean;
}