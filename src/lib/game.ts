export class Game implements Gameplay {
  player1: Players;
  player2: Players;
  board: GameBoard;

  constructor() {
    this.player1 = new Player("p1");
    this.player2 = new Player("p2");
    this.board = new Board(this.player1, this.player2);
    this.player1.setPieces(this.board.roster, this.board);
    this.player2.setPieces(this.board.roster, this.board);
  }
  
  reset(): boolean {

    return true;
  }

  startGame(): boolean {
    
    return true;
  }
}

export class Player implements Players {
  pieces: AllPieces = [];
  type: "p1" | "p2";
  
  constructor(player: "p1" | "p2") {
    this.type = player;
  }
  
  setPieces(roster: Register, board: GameBoard): void {
    switch(this.type) {
      case("p1"):
        this.initializePieces(roster.p1, board);
        break;
      case("p2"):
        this.initializePieces(roster.p2, board);
        break;
      default:
        let _exhastiveCheck = this.type;
        throw new Error(JSON.stringify(_exhastiveCheck));
    }
  }

  initializePieces(pieces: Roster, board: GameBoard): void {
    let types = Object.keys(pieces);

    for (let i = 0; i < types.length; i++) {
      let type = types[0];
      if (board.isValidPiece(type)) {
        let positions = pieces[type]
        for (let j = 0; j < positions.length; j++) {
          let position = positions[j];
          if (board.isValidPosition(position)) {
            this.pieces.push(board.registerPiece(type, position));
          } else {
            throw new Error("Invalid Position");
          }
        }
      } else {
        throw new Error("Invalid Piece");
      }
    }
  }

  beginTimer(): void {
    console.log("6:00"); // output start time for player
  }
}

export class Board implements GameBoard {
  squares: BoardObject;
  ranks: Ranks = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  files: Files = [1, 2, 3, 4, 5, 6, 7, 8];
  roster: Register = {
    "p1": {
      "pawn": ['a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2'],
      "rook": ['a1', 'h1'],
      "knight": ['b1', 'g1'],
      "bishop": ['c1', 'f1'],
      "queen": ['d1'],
      "king": ['g1'],
    }, 
    "p2": {
      "pawn": ['a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7'],
      "rook": ['a8', 'h8'],
      "knight": ['b8', 'g8'],
      "bishop": ['c8', 'f8'],
      "queen": ['d8'],
      "king": ['g8'],
    }, 
  };

  constructor(player1:  Players, player2: Players) {
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

      // iterate over the keys
    // for each key, iterate over the positions
    // create the piece specified by the key
      // set the position of the piece to the position on each iteration


      
      // register the pieces position on the board
        // find the square in the board
          // set the object to the 

  registerPiece(piece: string, position: Position): StandardPiece {
    let newPiece: StandardPiece;
    switch(piece) {
      case("pawn"):
        newPiece = new Pawn(position);
        break;
      case("rook"):
        newPiece = new Rook(position);
        break;
      case("bishop"):
        newPiece = new Bishop(position);
        break;
      case("knight"):
        newPiece = new Knight(position);
        break;
      case("queen"):
        newPiece = new Queen(position);
        break;
      case("king"):
        newPiece = new King(position);
        break;
      default: 
        throw new Error("Invalid piece");
        break;
    }

    return newPiece;
  }

  isValidPiece(name: string): boolean {
    return name === 'pawn' ||
            name === 'rook' ||
            name === 'knight' ||
            name === 'bishop' ||
            name === 'queen' ||
            name === 'king'; 
  }

  isValidPosition(pos: string): boolean {
    return pos.length === 2 && pos[0] in this.ranks && pos[1] in this.files;
  }
}