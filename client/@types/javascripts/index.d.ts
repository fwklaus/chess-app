type Ranks = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
type Files = ['1', '2', '3', '4', '5', '6', '7', '8'];

interface BoardObject {
  [key:string]: StandardPiece | null;
}

type PlayerType = "p1" | "p2";

interface PieceMap {
  "p1": Roster;
  "p2": Roster;
}

interface Roster {
  [key: string]: string[]
}

type Pieces = "pawn" | "rook" | "knight" | "bishop" | "queen" | "king";

interface Gameplay {
  player1: Players;
  player2: Players;
  board: GameBoard;
  view: DOMViewer;
  handlers: EventHandlers;
  newGame(): boolean;
  startGame(): boolean;
  initializePieces(player: Players): void; 
  setTime(time: string): string;
  playerTurn(): void;
  computerTurn(): void;
}

interface Players {
  pieces: StandardPiece[];
  type: PlayerType;
  time: string;
  setPiece(piece: StandardPiece): StandardPiece;
  beginTimer(): void;
  move(newPos: Position): Position;
}

interface GameBoard {
  squares: BoardObject;
  roster: PieceMap;  
  ranks: Ranks;
  files: Files;
  initGameBoard(): BoardObject;
  registerPiece(piece: string, position: Position): StandardPiece;
  assignSquare(newPiece: StandardPiece, oldPos?: StandardPiece);
  isValidPiece(name: string): boolean;
  isValidPosition(pos: string): boolean;
}

interface EventHandlers {
  handleStart(event: Event): void;
}

type Position = string; // use Regex to validate the string 

type PromotionTypes = "rook" | "knight" | "bishop" | "queen";
type PromotableShapes = RookShape | KnightShape | BishopShape | QueenShape;

interface StandardPiece {
  position: Position | null;
  setPosition(position: Position): Position;
  getPosition(): Position;
  // move(newPos: Position): Position;
}

interface PawnShape extends StandardPiece {
  promote(type: PromotionTypes, player: PlayerType, pos: Position): PromotableShapes;
  isPromotablePos(player: PlayerType, pos: Position): boolean;
  isPromotableType(type: PromotionTypes): boolean;
} 

interface KingShape extends StandardPiece {
  check: boolean;
  checkMate: boolean;
  isThreatPostion(): boolean // used to determine if spot is threat position? Necessary?
}

interface DOMViewer {
  playerPieces?: NodeListOf<HTMLImageElement>;
  boardSquares?: NodeListOf<HTMLDivElement>;
  startButton: HTMLButtonElement | null;
  selectBoardSquares(): void;
  selectPlayerPieces(): void;
  selectStartButton(): void;
  bindListeners(handlers: EventHandlers): void;
}
