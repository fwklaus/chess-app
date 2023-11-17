import {describe, expect, test, beforeAll, beforeEach} from '@jest/globals';

const { Pawn, Rook, Knight, Bishop, Queen, King, Piece } = require('../src/lib/pieces');

describe("Pawn Tests", () => {
  let pawn: typeof Pawn;
  beforeEach(() => {
    pawn = new Pawn("a2");
  });

  test("Pawn is a Pawn object", () => {    
    let pawn: unknown = new Pawn("a2");
    expect(pawn instanceof Pawn).toBe(true);
    expect(typeof pawn).toBe('object');
  });

  test("describePiece returns description string", () => {
    let description = pawn.describePiece();
    let pawnDescription = "I am a pawn. I can only move forward 1 square at a time. But when I attack, I can only move forward diagonally by 1 square."

    expect(typeof description).toBe('string');
    expect(description).toBe(pawnDescription);
  });

  test("promote throws an error if promote is called on a Pawn instance and no arguments are provided", () => {
    expect(() => {
      pawn.promote()
    }).toThrow(Error);
  });

  test("promote throws an error when given an invalid piece type", () => {
    expect(() => {
      pawn.promote("king", "p2", "a1")
    }).toThrow("Must provide valid PromotableType and valid PlayerType");
    
    expect(() => {
      pawn.promote("pawn", "p2", "a1")
    }).toThrow("Must provide valid PromotableType and valid PlayerType");
  });

  test("promote throws an error if given an invalid position", () => {
    expect(() => {
      pawn.promote("queen", "p1", "a1")
    }).toThrow("Must provide valid PromotableType and valid PlayerType");
    
    expect(() => {
      pawn.promote("bishop", "p2", "a8")
    }).toThrow("Must provide valid PromotableType and valid PlayerType");
  });

  test("promote returns an instance for a given string specifying a valid type", () => {
    let validTypes = ["rook", "knight", "bishop", "queen"];
    expect(pawn.promote(validTypes[0], "p2", "a1") instanceof Rook).toBe(true);
    expect(pawn.promote(validTypes[1], "p2", "a1") instanceof Knight).toBe(true);
    expect(pawn.promote(validTypes[2], "p2", "a1") instanceof Bishop).toBe(true);
    expect(pawn.promote(validTypes[3], "p2", "a1") instanceof Queen).toBe(true);
  });

  test("isPromotablePos returns true if pawn is in last file for either player", () => {
    let player1 = "p1";
    let player2 = "p2";
    let position1 = "a8";
    let position2 = "a1";
    let pawn = new Pawn("a1");
    let pawn2 = new Pawn("a8");

    let result1 = pawn.isPromotablePos(player1, position1);
    let result2 = pawn2.isPromotablePos(player2, position2);

    expect(result1).toBe(true);
    expect(result2).toBe(true);
  });

  test("getPosition returns current pawn position", () => {
    let position = pawn.getPosition();
    expect(position).toBe('a2');
  });

  // test("move returns the position of the square the pawn moves to", () => {
  //   let newPos = pawn.move("h4");
  //   let pos = pawn.position;
  //   expect(newPos).toBe('h4');
  //   expect(pos).toBe('h4');
  // });

  test.todo("move returns the position of the square the pawn moves to");
});

describe("King Tests", () => {
  let king: typeof King;
  beforeEach(() => {
    king = new King("d1");
  });

  test("King is a King object", () => {
    let king: unknown = new King("d1");
    expect(king instanceof King).toBe(true);
    expect(typeof king).toBe('object');
  });

  test("describePiece returns description string", () => {
    let description = king.describePiece();

    let kingDescription = "I am a king. I can only move forward 1 square in any direction. If I am cornered, the game is over.";

    expect(typeof description).toBe('string');
    expect(description).toBe(kingDescription);
  });

  test.todo("isThreatPosition returns true if a potential movement places king in check");
});

describe("Queen Tests", () => {
  let queen: typeof Queen;
  beforeEach(() => {
    queen = new Queen("e1");
  });

  test("Queen is a Queen object", () => {
    let queen: unknown = new Queen("e1");
    expect(queen instanceof Queen).toBe(true);
    expect(typeof queen).toBe('object');
  });

  test("describePiece returns description string", () => {
    let description = queen.describePiece();
    let queenDescription = "I am a queen. I can only as far as I want in any direction. I am the most powerful piece on the board, but my King gets all the credit.";

    expect(typeof description).toBe('string');
    expect(description).toBe(queenDescription);
  });
});

describe("Bishop Tests", () => {
  let bishop: typeof Bishop;
  beforeEach(() => {
    bishop = new Bishop("c1");
  });

  test("Bishop is a Bishop object", () => {
    let bishop: unknown = new Bishop("c1");
    expect(bishop instanceof Bishop).toBe(true);
    expect(typeof bishop).toBe('object');
  });

  test("describePiece returns description string", () => {
    let description = bishop.describePiece();
    let bishopDescription = "I am a bishop. I move as far as I want diagonally in any direction. I'm the right hand for the King and the Queen."

    expect(typeof description).toBe('string');
    expect(description).toBe(bishopDescription);
  });

  test.todo("getPosition returns current bishop position");
  test.todo("move returns the position of the square the bishop moves to");
  test.todo("attack returns true when the bishop attack removes a piece from the board");
});

describe("Knight Tests", () => {
  let knight: typeof Knight;
  beforeEach(() => {
    knight = new Knight("b1");
  });

  test("Knight is a Knight object", () => {    
    let king: unknown = new King("b1");
    expect(knight instanceof Knight).toBe(true);
    expect(typeof knight).toBe('object');
  });

  test("describePiece returns description string", () => {
    let description = knight.describePiece();
    let knightDescription = "I am a knight. I can jump over pieces. I also move in an L shape - either 1 up and 2 over, or 1 over and 2 up - in any direction.";

    expect(typeof description).toBe('string');
    expect(description).toBe(knightDescription);
  });
});

describe("Rook Tests", () => {
  let rook: typeof Rook;
  beforeEach(() => {
    rook = new Rook("a1");
  });

  test("Rook is a Rook object", () => {
    let rook: unknown = new Rook("d1");
    expect(rook instanceof Rook).toBe(true);
    expect(typeof rook).toBe('object');
  });

  test("describePiece returns description string", () => {
    let description = rook.describePiece();
    let rookDescription = "I am a rook. I can only move as far as I want horizontally and vertically in any direction.";

    expect(typeof description).toBe('string');
    expect(description).toBe(rookDescription);
  });
});
