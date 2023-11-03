type Ranks = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
type Files = [1, 2, 3, 4, 5, 6, 7, 8];

// type Positions = Array<Array<Position>>;

interface BoardObject {
  [key:string]: string | null;
}

interface Gameplay {
  player1: Players;
  player2: Players;
  reset(): boolean;
  startGame(): boolean;
  board: GameBoard;
}

interface Players {
  pieces: (StandardPiece | SpecialPiece)[];
  setPieces(player: "player1" | "player2"): void;
  beginTimer(): void;
  setPlayer1(): (StandardPiece | SpecialPiece)[];
  setPlayer2(): (StandardPiece | SpecialPiece)[];
}

interface GameBoard {
  squares: BoardObject;
  ranks: Ranks;
  files: Files;
  initGameBoard(): BoardObject;
}
