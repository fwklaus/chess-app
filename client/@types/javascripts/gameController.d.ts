// handles user interactions directly and links model and view
interface GameControl {
  handlers: EventHandlers;
  view: GameView;
  player1: Player;
  player2: Player;
  board: GameBoard;
  initializePieces(player: Player): void; 
  setTime(time: string): string;
  startGame(): void;
  playerTurn(isComputer: boolean): void;
}