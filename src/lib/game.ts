let { Pawn, King, Queen, Rook, Bishop, Knight } = require('./pieces');

export class Game implements Gameplay {
  player1: Players;
  player2: Players;
  board: GameBoard;

  constructor() {
    this.player1 = new Player("p1");
    this.player2 = new Player("p2");
    this.board = new Board();
    this.initializePieces(this.player1);
    this.initializePieces(this.player2);
  }
  
  reset(): boolean {

    return true;
  }

  startGame(): boolean {
    
    return true;
  }

  initializePieces(player: Players) {
    let roster = this.board.roster;
    let board = this.board;
    let playerType = player.type;
    let playerPieces = roster[player.type];
    let startingPieces = Object.keys(playerPieces);

    for (let i = 0; i < startingPieces.length; i++) {
      let pieceType = startingPieces[i];
      if (board.isValidPiece(pieceType)) {
        let positions = roster[playerType][pieceType];
        for (let j = 0; j < positions.length; j++) {
          let position = positions[j];
          if (board.isValidPosition(position)) {
            player.setPiece(board.registerPiece(pieceType, position));
          } else {
            throw new Error("Invalid Position");
          }
        }
      } else {
        throw new Error("Invalid Piece");
      }
    }
  }
}

export class Player implements Players {
  pieces: StandardPiece[] = [];
  type: "p1" | "p2";
  
  constructor(player: "p1" | "p2") {
    this.type = player;
  }

  setPiece(piece: StandardPiece): StandardPiece {
    this.pieces.push(piece);
    return piece;
  }

  beginTimer(): void {
    console.log("6:00"); // output start time for player
  }
}

export class Board implements GameBoard {
  squares: BoardObject;
  ranks: Ranks = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  files: Files = ['1', '2', '3', '4', '5', '6', '7', '8'];
  roster: PieceMap = {
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

  constructor() {
    this.squares = this.initGameBoard();
  }

  // set all squares to null on new game
  initGameBoard(): BoardObject { 
    let squares: BoardObject = {};
    this.files.forEach((file: string) => {
      this.ranks.forEach((rank: string) => {
        squares[`${rank}${file}`] = null;
      });
    });

    return squares;
  }

  // create new piece and set position to initial position
  // assign the square on the board to the piece
  // return the piece
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

    this.assignSquare(newPiece);
    return newPiece;
  }

  // assign the piece to the new position
  // if the piece is already on the board, remove it from its old position
  assignSquare(piece: StandardPiece, oldPos?: StandardPiece) {
      this.squares[piece.getPosition()] = piece;
      return this.squares[piece.getPosition()];
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
    let rank: any = pos[0];
    let file: any = pos[1];

    return pos.length === 2 && this.ranks.includes(rank) && this.files.includes(file);
  }
}
