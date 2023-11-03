export class Game implements Gameplay {
  player1: Players;
  player2: Players;
  board: GameBoard;

  constructor() {
    this.player1 = new Player("player1");
    this.player2 = new Player("player2");
    this.board = new Board();
  }

  reset(): boolean {

    return true;
  }

  startGame(): boolean {
    
    return true;
  }
}

export class Player implements Players {
  pieces: (StandardPiece | SpecialPiece)[] = [];
  
  constructor(player: "player1" | "player2") {
    this.setPieces(player);
  }
  
  setPieces(player: "player1" | "player2"): void {
    switch(player) {
      case("player1"):
        this.setPlayer1();
        break;
      case("player2"):
        this.setPlayer2();
        break;
      default:
        let _exhastiveCheck = player;
        throw new Error(JSON.stringify(_exhastiveCheck));
    }
  }

  // set this.pieces directly if player 1 
  setPlayer1(): (StandardPiece | SpecialPiece)[] {
    // const P1_PAWN_FILE = 2;

    return this.pieces;
  }

  // set this.pieces directly if player 2
  setPlayer2(): (StandardPiece | SpecialPiece)[] {
    // const P2_PAWN_FILE = 7;


    return this.pieces;
  }

  beginTimer(): void {
    console.log("6:00"); // output start time for player
  }
}

export class Board implements GameBoard {
  squares: BoardObject;
  ranks: Ranks = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  files: Files = [1, 2, 3, 4, 5, 6, 7, 8];

  constructor() {
    this.squares = this.initGameBoard();
  }

  initGameBoard(): BoardObject { 
    let squares: BoardObject = {};
    this.files.forEach((file: number) => {
      this.ranks.forEach((rank: string) => {
        squares[`${rank}${file}`] = null;
      });
    });

    return squares;
  }
}