let request = require('supertest');
import {describe, expect, test, beforeAll, beforeEach} from '@jest/globals';
const app = require('../src/app.ts');
const { King } = require('../src/lib/king.ts');
const { Queen } = require('../src/lib/queen.ts');
const { Bishop} = require('../src/lib/bishop.ts');
const { Knight} = require('../src/lib/knight.ts');
const { Rook} = require('../src/lib/rook.ts');
const { Pawn } = require('../src/lib/pawn.ts');

// const { King, Queen, Bishop, Knight, Rook, Pawn } = require('../src/lib/pieces.ts');
// const routes = require(`../src/lib/routes.ts`);

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

  test("promote returns an instance of a PromotableType", () => {

  });
  
  test("isPromotable returns true if pawn position is in the last file", () => {

  });

  test("getPosition returns current pawn position", () => {
  
  });

  test("move returns the position of the square the pawn moves to", () => {

  });

  test("attack returns true when the pawn attack removes a piece from the board", () => {

  });
});

describe("King Tests", () => {
  test("King is a King object", () => {
    let result = new King();
    
    expect(result instanceof King).toBe(true);
    expect(typeof result).toBe('object');
  });

  test("getPosition returns current king position", () => {
  
  });

  test("isThreatPosition returns true if a potential movement places king in check", () => {

  });

  test("move returns the position of the square the king moves to", () => {

  });

  test("attack returns true when a king attack removes a piece from the board", () => {

  });

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

  test("getPosition returns current queen position", () => {
  
  });

  test("move returns the position of the square the queen moves to", () => {

  });

  test("attack returns true when a queen attack removes a piece from the board", () => {

  });

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

  test("getPosition returns current bishop position", () => {
  
  });

  test("move returns the position of the square the bishop moves to", () => {

  });

  test("attack returns true when the bishop attack removes a piece from the board", () => {

  });

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

  test("getPosition returns current knight position", () => {
  
  });

  test("move returns the position of the square the knight moves to", () => {

  });

  test("attack returns true when a knight attack removes a piece from the board", () => {

  });

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

  test("getPosition returns current rook position", () => {
  
  });

  test("move returns the position of the square the rook moves to", () => {

  });

  test("attack returns true when the rook attack removes a piece from the board", () => {

  });

  test("Rook.describePiece returns string", () => {
    let result = new Rook().describePiece();
    let string = "I am a Rook. I can only move as far as I want horizontally and vertically in any direction.";

    expect(typeof result).toBe('string');
    expect(result).toBe(string);
  });
});

// async test
// describe("GET routes", () => {
//   test("root request responds with status code 200", async () => {
//     const response = await request(app).get("/");
//     expect(response.statusCode).toBe(200);
//   });
// });
