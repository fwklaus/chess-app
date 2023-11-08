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
  newGame(): boolean;
  startGame(): boolean;
  initializePieces(player: Players): void; 
  setTime(time: string): string;
  playerTurn(): void;
  computerturn(): void;
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
