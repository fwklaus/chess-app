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
