import {describe, expect, test, beforeAll, beforeEach} from '@jest/globals';

const { King } = require('../src/lib/king.ts');
const { Queen } = require('../src/lib/queen.ts');
const { Bishop} = require('../src/lib/bishop.ts');
const { Knight} = require('../src/lib/knight.ts');
const { Rook} = require('../src/lib/rook.ts');
const { Pawn } = require('../src/lib/pawn.ts');
const { Game, Player, Board}  = require('../src/lib/game')

describe("Pawn Tests", () => {
  test("Pawn is a Pawn object", () => {
    let result = new Pawn();
    
    expect(result instanceof Pawn).toBe(true);
    expect(typeof result).toBe('object');
  });

  test("describePiece returns string", () => {
    let result = new Pawn().describePiece();
    let string = "I am a Pawn. I can only move forward 1 square at a time. But when I attack, I can only move forward diagonally by 1 square."

    expect(typeof result).toBe('string');
    expect(result).toBe(string);
  });

  test.todo("promote returns an instance of a PromotableType");
  test.todo("isPromotable returns true if pawn position is in the last file");
  test.todo("getPosition returns current pawn position");
  test.todo("move returns the position of the square the pawn moves to");
  test.todo("attack returns true when the pawn attack removes a piece from the board");
  test.todo("instantiation sets the pawn position for player 1 to file 2");
  test.todo("instantiation sets the pawn position for player 2 to file 7");
});

describe("King Tests", () => {
  test("King is a King object", () => {
    let result = new King();
    
    expect(result instanceof King).toBe(true);
    expect(typeof result).toBe('object');
  });

  test.todo("getPosition returns current king position");
  test.todo("isThreatPosition returns true if a potential movement places king in check");
  test.todo("move returns the position of the square the king moves to");
  test.todo("attack returns true when a king attack removes a piece from the board");

  test("King.describePiece returns string", () => {
    let result = new King().describePiece();

    let string = "I am a King. I can only move forward 1 square in any direction. If I am cornered, the game is over.";

    expect(typeof result).toBe('string');
    expect(result).toBe(string);
  });
});

describe("Queen Tests", () => {
  test("Queen is a Queen object", () => {
    let result = new Queen();
    
    expect(result instanceof Queen).toBe(true);
    expect(typeof result).toBe('object');
  });

  test.todo("getPosition returns current queen position");
  test.todo("move returns the position of the square the queen moves to");
  test.todo("attack returns true when a queen attack removes a piece from the board");

  test("Queen.describePiece returns string", () => {
    let result = new Queen().describePiece();
    let string = "I am a Queen. I can only as far as I want in any direction. I am the most powerful piece on the board, but my King gets all the credit.";

    expect(typeof result).toBe('string');
    expect(result).toBe(string);
  });
});

describe("Bishop Tests", () => {
  test("Bishop is a Bishop object", () => {
    let result = new Bishop();
    
    expect(result instanceof Bishop).toBe(true);
    expect(typeof result).toBe('object');
  });

  test.todo("getPosition returns current bishop position");
  test.todo("move returns the position of the square the bishop moves to");
  test.todo("attack returns true when the bishop attack removes a piece from the board");

  test("Bishop.describePiece returns string", () => {
    let result = new Bishop().describePiece();
    let string = "I am a Bishop. I move as far as I want diagonally in any direction. I'm the right hand for the King and the Queen."

    expect(typeof result).toBe('string');
    expect(result).toBe(string);
  });
});

describe("Knight Tests", () => {
  test("Knight is a Knight object", () => {
    let result = new Knight();
    
    expect(result instanceof Knight).toBe(true);
    expect(typeof result).toBe('object');
  });

  test.todo("getPosition returns current knight position");
  test.todo("move returns the position of the square the knight moves to");
  test.todo("attack returns true when a knight attack removes a piece from the board");

  test("Knight.describePiece returns string", () => {
    let result = new Knight().describePiece();
    let string = "I am a Knight. I can jump over pieces. I also move in an L shape - either 1 up and 2 over, or 1 over and 2 up - in any direction.";

    expect(typeof result).toBe('string');
    expect(result).toBe(string);
  });
});

describe("Rook Tests", () => {
  test("Rook is a Rook object", () => {
    let result = new Rook();
    
    expect(result instanceof Rook).toBe(true);
    expect(typeof result).toBe('object');
  });

  test.todo("getPosition returns current rook position");
  test.todo("move returns the position of the square the rook moves to");
  test.todo("attack returns true when the rook attack removes a piece from the board");

  test("Rook.describePiece returns string", () => {
    let result = new Rook().describePiece();
    let string = "I am a Rook. I can only move as far as I want horizontally and vertically in any direction.";

    expect(typeof result).toBe('string');
    expect(result).toBe(string);
  });
});

describe("GameBoard Tests", () => {
  test("Gameboard is an object", () => {
    let board = new Board();
    expect(typeof board).toBe('object');
  });

  test("Gameboard has 64 string keys", () => {
    let board = new Board();

    console.log(board.squares)
    let keys = Object.keys(board.squares);
    let allStrings = keys.every((key) => {
      return typeof key === 'string'; 
    });

    expect(allStrings).toBe(true);
    expect(keys.length).toBe(64);
  });
});
