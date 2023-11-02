// type Ranks = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
// type Files = [1, 2, 3, 4, 5, 6, 7, 8];

// type Positions = Array<Array<Position>>;

interface Gameplay {
  reset(): boolean;
  startGame(): boolean;
  player1: Players;
  player2: Players;
  // board: GameBoard;
}

interface Players {
  beginTimer(): void;
  pieces: (StandardPiece | SpecialPiece)[];
  setPieces(player: "player1" | "player2"): void;
  setPlayer1(): (StandardPiece | SpecialPiece)[];
  setPlayer2(): (StandardPiece | SpecialPiece)[];
}

// interface GameBoard {
//   squares: Array<Array<Position>>;
//   currentPositions: 
// }
