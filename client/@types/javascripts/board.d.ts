interface StartingPositions {
  "p1": {[piece:string]: string[]};
  "p2": {[piece:string]: string[]};
}  

interface Squares {
  [square: string]: Piece | null;
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