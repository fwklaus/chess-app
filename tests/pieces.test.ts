import {describe, expect, test, beforeAll, beforeEach} from '@jest/globals';

const { Pawn, Rook, Knight, Bishop, Queen, King, Piece } = require('../src/lib/pieces');

describe("Pawn Tests", () => {
  let pawn: unknown;
  beforeEach(() => {
    pawn = new Pawn("a1");
  });

  test("Pawn is a Pawn object", () => {    
    expect(pawn instanceof Pawn).toBe(true);
    expect(typeof pawn).toBe('object');
  });

  test("describePiece returns description string", () => {
    let description = (pawn as typeof Pawn).describePiece();
    let pawnDescription = "I am a pawn. I can only move forward 1 square at a time. But when I attack, I can only move forward diagonally by 1 square."

    expect(typeof description).toBe('string');
    expect(description).toBe(pawnDescription);
  });

  test("promote throws an error if promote is called on a Pawn instance and no argument is provided", () => {
    expect(() => {
      (pawn as typeof Pawn).promote("king", "p2")
    }).toThrow("Invalid type: \"king\"");
    
    expect(() => {
      (pawn as typeof Pawn).promote("pawn", "p2")
    }).toThrow("Invalid type: \"pawn\"");

    expect(() => {
      (pawn as typeof Pawn).promote("queen", "p2")
    }).not.toThrow("Invalid type: \"queen\"");
  });

  test("promote returns an instance for a given string specifying a valid type", () => {
    let validTypes = ["rook", "knight", "bishop", "queen"];
    expect((pawn as typeof Pawn).promote(validTypes[0], "p2") instanceof Rook).toBe(true);
    expect((pawn as typeof Pawn).promote(validTypes[1], "p2") instanceof Knight).toBe(true);
    expect((pawn as typeof Pawn).promote(validTypes[2], "p2") instanceof Bishop).toBe(true);
    expect((pawn as typeof Pawn).promote(validTypes[3], "p2") instanceof Queen).toBe(true);
  });

  test("isPromotablePos returns true if pawn is in last file for either player", () => {
    let player1 = "p1";
    let player2 = "p2";




    let pawn = new Pawn("a1");
    let pawn2 = new Pawn("a8");




  });

  test.todo("getPosition returns current pawn position");
  test.todo("move returns the position of the square the pawn moves to");
  test.todo("attack returns true when the pawn attack removes a piece from the board");
  test.todo("instantiation sets the pawn position for player 1 to file 2");
  test.todo("instantiation sets the pawn position for player 2 to file 7");
});

describe.skip("King Tests", () => {
  test("King is a King object", () => {
    let result = new King();
    
    expect(result instanceof King).toBe(true);
    expect(typeof result).toBe('object');
  });

  test.todo("getPosition returns current king position");
  test.todo("isThreatPosition returns true if a potential movement places king in check");
  test.todo("move returns the position of the square the king moves to");
  test.todo("attack returns true when a king attack removes a piece from the board");

  test("describePiece returns description string", () => {
    let result = new King().describePiece();

    let string = "I am a king. I can only move forward 1 square in any direction. If I am cornered, the game is over.";

    expect(typeof result).toBe('string');
    expect(result).toBe(string);
  });
});

describe.skip("Queen Tests", () => {
  test("Queen is a Queen object", () => {
    let result = new Queen();
    
    expect(result instanceof Queen).toBe(true);
    expect(typeof result).toBe('object');
  });

  test.todo("getPosition returns current queen position");
  test.todo("move returns the position of the square the queen moves to");
  test.todo("attack returns true when a queen attack removes a piece from the board");

  test("describePiece returns description string", () => {
    let result = new Queen().describePiece();
    let string = "I am a queen. I can only as far as I want in any direction. I am the most powerful piece on the board, but my King gets all the credit.";

    expect(typeof result).toBe('string');
    expect(result).toBe(string);
  });
});

describe.skip("Bishop Tests", () => {
  test("Bishop is a Bishop object", () => {
    let result = new Bishop();
    
    expect(result instanceof Bishop).toBe(true);
    expect(typeof result).toBe('object');
  });

  test.todo("getPosition returns current bishop position");
  test.todo("move returns the position of the square the bishop moves to");
  test.todo("attack returns true when the bishop attack removes a piece from the board");

  test("describePiece returns description string", () => {
    let result = new Bishop().describePiece();
    let string = "I am a bishop. I move as far as I want diagonally in any direction. I'm the right hand for the King and the Queen."

    expect(typeof result).toBe('string');
    expect(result).toBe(string);
  });
});

describe.skip("Knight Tests", () => {
  test("Knight is a Knight object", () => {
    let result = new Knight();
    
    expect(result instanceof Knight).toBe(true);
    expect(typeof result).toBe('object');
  });

  test.todo("getPosition returns current knight position");
  test.todo("move returns the position of the square the knight moves to");
  test.todo("attack returns true when a knight attack removes a piece from the board");

  test("describePiece returns description string", () => {
    let result = new Knight().describePiece();
    let string = "I am a knight. I can jump over pieces. I also move in an L shape - either 1 up and 2 over, or 1 over and 2 up - in any direction.";

    expect(typeof result).toBe('string');
    expect(result).toBe(string);
  });
});

describe.skip("Rook Tests", () => {
  test("Rook is a Rook object", () => {
    let result = new Rook();
    
    expect(result instanceof Rook).toBe(true);
    expect(typeof result).toBe('object');
  });

  test.todo("getPosition returns current rook position");
  test.todo("move returns the position of the square the rook moves to");
  test.todo("attack returns true when the rook attack removes a piece from the board");

  test("describePiece returns description string", () => {
    let result = new Rook().describePiece();
    let string = "I am a rook. I can only move as far as I want horizontally and vertically in any direction.";

    expect(typeof result).toBe('string');
    expect(result).toBe(string);
  });
});
