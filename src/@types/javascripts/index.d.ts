interface StartingPositions {
  "p1": {[piece:string]: string[]};
  "p2": {[piece:string]: string[]};
}  

interface Squares {
  [square: string]: Piece | null;
}

// represents base piece from which all pieces inherit
interface GamePiece {
  position: string | null;
  setPosition(position: string): string;
  getPosition(): string;
}

interface Pawn extends GamePiece {
  type: "pawn";
  initial: boolean;
  promote(newType: string, player: string, position: string): GamePiece;
  isPromotableType(type: string): boolean;
  isPromotablePos(player: string, position: string): boolean;
}

interface Rook extends GamePiece {
  type: "rook";
  initial: boolean;
}

interface Knight extends GamePiece {
  type: "knight";
}

interface Bishop extends GamePiece {
  type: "bishop";
}

interface Queen extends GamePiece {
  type: "queen";
}

interface King extends GamePiece {
  type: "king";
  check: boolean;
  checkMate: boolean;
  initial: boolean;
}

// generates valid moves
interface Player {
  pieces: GamePiece[];
  time: string;
  type: string;
  addPiece(piece: GamePiece): GamePiece;
  beginTimer(): void;
  validMoves(state: GameState): GameMove[];
}

// evaluates the board
interface Computer extends Player {
  eval(): int;
  score()
}

// defines how moves manipulate the game state
interface GameMove {
  isValid(): boolean;
  execute(): boolean;
  undo(): boolean;
}

// interpret the game state
// manage the game state
interface GameState {
  isDraw(): boolean;
  isWin(): boolean;
  copy(): GameState;
  equivalent(): boolean;
}

// defines interface for scoring states
interface GameScore {
  
}
// represents the board and the squares with their associated pieces
interface GameBoard {
  ranks: string[];
  files: string[];
  startPos: StartingPositions;
  squares: Squares;
  clearBoard(): Squares;
  registerPiece(piece: string, position: string): GamePiece;
  assignSquare(piece: GamePiece): GamePiece;
}

// models internal representation of the game and behavior
interface GameModel {
  state: GameState;
  moves: GameMove;
  board: GameBoard;
  player1: Player;
  player2: Player;
  handlers: EventHandlers;
}

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

// presents information to and accepts it from the user
interface GameView {
  startButton: HTMLButtonElement | null;
  boardSquares: NodeListOf<HTMLDivElement>;
  playerPieces: NodeListOf<HTMLImageElement>;
  bindListeners(handlers: EventHandlers);
}

interface EventHandlers {
  handleStart(event: Event): void;
}
