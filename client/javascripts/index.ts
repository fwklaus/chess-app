export class GameController implements Gameplay {
  player1: Players;
  player2: Players;
  board: GameBoard;
  view: DOMViewer;
  handlers: EventHandlers;

  constructor() {
    this.handlers = new Handlers();
    this.view = new View(this.handlers);
    this.player1 = new Player("p1");
    this.player2 = new Player("p2");
    this.board = new Board();
    this.initializePieces(this.player1);
    this.initializePieces(this.player2);
  }

  setTime(time: string): string {
    this.player1.time = time;
    this.player2.time = time;
    return time;
  }
  
  newGame(): boolean {

    return true;
  }

  startGame(): boolean {
    // game loop
    // alternate player turns until the game is over
      // the game ends when
        // a king is in checkmate
        // when there is a stalemate
        // when a player gives up
        // when the time runs out for a player
    
    return true;
  }

  playerTurn() {
    // start timer
    // wait for move to be made
    // handle movement, provide feedback if bad move
    // move piece if valid move
    // end timer
  }

  computerTurn() {
    // start timer
    // calculate the best move (use libary or package?)
    // move piece 
    // end timer
  }

  initializePieces(player: Players) {
    let roster = this.board.roster;
    let board = this.board;
    let playerType = player.type;
    let playerPieces = roster[player.type];
    let startingPieces = Object.keys(playerPieces);

    for (let i = 0; i < startingPieces.length; i++) {
      let pieceType = startingPieces[i] as string;
      if (board.isValidPiece(pieceType)) {
        let positions = roster[playerType][pieceType] as string[];
        for (let j = 0; j < positions.length; j++) {
          let position = positions[j] as string;
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
  time: string = "6:00";
  
  constructor(player: "p1" | "p2") {
    this.type = player;
  }

  // sets the initial position of a piece on the board
  setPiece(piece: StandardPiece): StandardPiece {
    this.pieces.push(piece);
    return piece;
  }

  beginTimer(): void {
    // will require some mathematics
    // use setInterval to decrement the clock when the timer starts
      // must update the DOM - countdown as the timer counts up

    console.log(this.time); // output start time for player
  }

  // move piece to new position
  // register pieces new position on the board
  // set the old position to null
  move(newPos: Position): Position {
    // this.setPosition(newPos);
    // if (this.position === null) {
    //   throw new Error("Invalid request. Cannot get piece position until one is set");
    // } else {
    //   return this.position;
    // }
    
    // return this.setPosition(newPos);

    return newPos;
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

export class Handlers implements EventHandlers {
  constructor() {}

  handleStart(event: Event): void {
    console.log("Interesting");
  }
}

export class Piece implements StandardPiece {
  position: Position | null = null;

  constructor(position: Position) {
    this.setPosition(position)
  }

  setPosition(position: Position) {
    this.position = position;
    return this.position;
  }

  getPosition(): Position {
    if (this.position === null) {
      throw new Error("Invalid request. Cannot get piece position until one is set");
    } else {
      return this.position;
    }
  }
}

export class Pawn extends Piece implements PawnShape {
  type: string = "pawn";

  constructor(position: Position) {
    super(position);
  }

  promote(type: PromotionTypes, player: PlayerType, pos: Position): PromotableShapes {
    if (this.position === null) {
      throw new Error("Invalid call. Cannot promote piece that is set to null");
    }

    if (this.isPromotableType(type) && this.isPromotablePos(player, pos)) {
      switch(type) {
      case("rook"): 
        return new Rook(this.position);
        break;
      case("knight"):
        return new Knight(this.position);
        break;
      case("bishop"):
        return new Bishop(this.position);
        break;
      case("queen"):
        return new Queen(this.position);
        break;
      default:
        let _exhaustiveCheck: never = type;
        throw new Error("Invalid type: " + JSON.stringify(_exhaustiveCheck));
      }
    } else {
      throw new Error("Must provide valid PromotableType and valid PlayerType");
    }
  }

  isPromotableType(type: PromotionTypes): boolean {
    return type === "rook" || type === 'knight' || type === "bishop" || type === "queen";
  }

  isPromotablePos(player: PlayerType, pos: Position): boolean {
    let promotablePositions;
    switch(player) {
      case("p1"):
        promotablePositions = new RegExp(/[a-h]8/);
        break;
      case("p2"):
        promotablePositions = new RegExp(/[a-h]1/);
        break;
      default:
        let _exhaustiveCheck = player;
        throw new Error("Invalid player type: Player can either be 'p1' or 'p2'");
        break;
    }

    return promotablePositions.test(pos);
  }

  describePiece() {
    return `I am a ${this.type}. I can only move forward 1 square at a time. But when I attack, I can only move forward diagonally by 1 square.`;
  }
}

export class Rook extends Piece implements StandardPiece {
  type: string= "rook";

  constructor(position: Position) {
    super(position);
  }

  describePiece() {
    return `I am a ${this.type}. I can only move as far as I want horizontally and vertically in any direction.`;
  }
}

export class Knight extends Piece implements StandardPiece {
  type: string = "knight"

  constructor(position: Position) {
    super(position);
  }
  
  describePiece() {
    return `I am a ${this.type}. I can jump over pieces. I also move in an L shape - either 1 up and 2 over, or 1 over and 2 up - in any direction.`;
  }
}

export class Bishop extends Piece implements StandardPiece {
  type: string = "bishop"

  constructor(position: Position) {
    super(position);
  }

  describePiece() {
    return `I am a ${this.type}. I move as far as I want diagonally in any direction. I'm the right hand for the King and the Queen.`;
  }  
}  

export class Queen extends Piece implements StandardPiece {
  type: string = "queen"; 

  constructor(position: Position) {
    super(position);
  }

  describePiece() {
    return `I am a ${this.type}. I can only as far as I want in any direction. I am the most powerful piece on the board, but my King gets all the credit.`;
  }
}


export class King extends Piece implements KingShape {
  type: string = "king";
  check: boolean;
  checkMate: boolean;
  
  constructor(position: Position) {
    super(position);
    this.check = false;
    this.checkMate = false;  
  }

  isThreatPostion(): boolean {
    return false;
  }

  describePiece() {
    return `I am a ${this.type}. I can only move forward 1 square in any direction. If I am cornered, the game is over.`;
  }
}

export class View implements DOMViewer {
  playerPieces?: NodeListOf<HTMLImageElement>;
  boardSquares?: NodeListOf<HTMLDivElement>;
  startButton: HTMLButtonElement | null = null;
  
  constructor(handlers: EventHandlers) {
    this.selectBoardSquares();
    this.selectPlayerPieces();
    this.selectStartButton();
    this.bindListeners(handlers);
  }  

  selectBoardSquares(): void {
    this.boardSquares = document.querySelectorAll("div.square");
  }
  
  selectPlayerPieces(): void {
    this.playerPieces = document.querySelectorAll("img.player");
  }

  selectStartButton(): void {
    this.startButton = document.querySelector("#start");
  }

  bindListeners(handlers: EventHandlers): void {
    this.startButton?.addEventListener("click", handlers.handleStart);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new GameController();
});
