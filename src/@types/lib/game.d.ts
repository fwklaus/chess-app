type Ranks = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
type Files = [1, 2, 3, 4, 5, 6, 7, 8];

interface BoardObject {
  [key:string]: string | null;
}

interface Register {
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
  reset(): boolean;
  startGame(): boolean;
  board: GameBoard;
}

interface Players {
  pieces: allPieces;
  type: "p1" | "p2";
  beginTimer(): void;
  setPieces(roster: Registry, board: GameBoard): void;
  initializePieces(pieces: Roster, board: GameBoard): void;
}

interface GameBoard {
  squares: BoardObject;
  roster: Registry;  
  ranks: Ranks;
  files: Files;
  initGameBoard(): BoardObject;
  registerPiece(piece: string, position: Position): StandardPiece;
  isValidPiece(name: string): boolean;
  isValidPosition(pos: string): boolean;
}
