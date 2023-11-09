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

    let result1 = pawn.isPromotablePos(player2);
    let result2 = pawn2.isPromotablePos(player1);

    expect(result1).toBe(true);
    expect(result2).toBe(true);
  });

  test("getPosition returns current pawn position", () => {
    let position = (pawn as typeof Pawn).getPosition();
    expect(position).toBe('a1');
  });

  test("move returns the position of the square the pawn moves to", () => {
    let newPos = (pawn as typeof Pawn).move("h4");
    let pos = (pawn as typeof Pawn).position;
    expect(newPos).toBe('h4');
    expect(pos).toBe('h4');
  });
});

describe("King Tests", () => {
  let king: unknown;
  beforeEach(() => {
    king = new King("d1");
  });

  test("King is a King object", () => {
    expect(king instanceof King).toBe(true);
    expect(typeof king).toBe('object');
  });

  test("describePiece returns description string", () => {
    let description = (king as typeof King).describePiece();

    let kingDescription = "I am a king. I can only move forward 1 square in any direction. If I am cornered, the game is over.";

    expect(typeof description).toBe('string');
    expect(description).toBe(kingDescription);
  });

  test.todo("isThreatPosition returns true if a potential movement places king in check");
});

describe("Queen Tests", () => {
  let queen: unknown;
  beforeEach(() => {
    queen = new Queen("e1");
  });

  test("Queen is a Queen object", () => {
    expect(queen instanceof Queen).toBe(true);
    expect(typeof queen).toBe('object');
  });

  test("describePiece returns description string", () => {
    let description = (queen as typeof Queen).describePiece();
    let queenDescription = "I am a queen. I can only as far as I want in any direction. I am the most powerful piece on the board, but my King gets all the credit.";

    expect(typeof description).toBe('string');
    expect(description).toBe(queenDescription);
  });
});

describe("Bishop Tests", () => {
  let bishop: unknown;
  beforeEach(() => {
    bishop = new Bishop("c1");
  });

  test("Bishop is a Bishop object", () => {
    expect(bishop instanceof Bishop).toBe(true);
    expect(typeof bishop).toBe('object');
  });

  test("describePiece returns description string", () => {
    let description = (bishop as typeof Bishop).describePiece();
    let bishopDescription = "I am a bishop. I move as far as I want diagonally in any direction. I'm the right hand for the King and the Queen."

    expect(typeof description).toBe('string');
    expect(description).toBe(bishopDescription);
  });

  test.todo("getPosition returns current bishop position");
  test.todo("move returns the position of the square the bishop moves to");
  test.todo("attack returns true when the bishop attack removes a piece from the board");
});

describe("Knight Tests", () => {
  let knight: unknown;
  beforeEach(() => {
    knight = new Knight("b1");
  });

  test("Knight is a Knight object", () => {    
    expect(knight instanceof Knight).toBe(true);
    expect(typeof knight).toBe('object');
  });

  test("describePiece returns description string", () => {
    let description = (knight as typeof Knight).describePiece();
    let knightDescription = "I am a knight. I can jump over pieces. I also move in an L shape - either 1 up and 2 over, or 1 over and 2 up - in any direction.";

    expect(typeof description).toBe('string');
    expect(description).toBe(knightDescription);
  });
});

describe("Rook Tests", () => {
  let rook: unknown;
  beforeEach(() => {
    rook = new Rook("a1");
  });

  test("Rook is a Rook object", () => {
    expect(rook instanceof Rook).toBe(true);
    expect(typeof rook).toBe('object');
  });

  test("describePiece returns description string", () => {
    let description = (rook as typeof Rook).describePiece();
    let rookDescription = "I am a rook. I can only move as far as I want horizontally and vertically in any direction.";

    expect(typeof description).toBe('string');
    expect(description).toBe(rookDescription);
  });
});
