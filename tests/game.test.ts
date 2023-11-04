import {describe, expect, test, beforeAll, beforeEach} from '@jest/globals';

const { Game, Player, Board}  = require('../src/lib/game')
const { Pawn, Rook, Knight, Bishop, Queen, King, Piece } = require('../src/lib/pieces');

describe("GameBoard Tests", () => {
  test("On initialization, new Board has 64 squares", () => {
    let board = new Board();

    let squares = Object.keys(board.squares);
    let allStrings = squares.every((square) => {
      return typeof square === 'string'; 
    });

    expect(allStrings).toBe(true);
    expect(squares.length).toBe(64);
  });

  test("On initialization, new Board squares represent valid Rank and File Coordinates", () => {
    let files = [1, 2, 3, 4, 5, 6, 7, 8];
    let ranks = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    let validCoordinates: string[] = [];
    let board = new Board();
    let allSquares = Object.keys(board.squares);
    
    files.forEach(file => {
      ranks.forEach(rank => {
        let squareCoordinate = rank + String(file);
        validCoordinates.push(squareCoordinate);
      });
    });
    
    let allValid = validCoordinates.every((validSquare) => {
      return allSquares.includes(validSquare);
    });

    expect(allValid).toBe(true);
  });

test("registerPiece returns a Pawn instance at a given position", () => {
    let board = new Board();
    let type = "pawn";
    let position = "a2"

    let pawn = board.registerPiece(type, position);

    console.log

    expect(pawn instanceof Pawn).toBe(true);
    expect(pawn.getPosition()).toBe(position);
  });

  test("registerPiece returns a Rook instance at a given position", () => {
    let board = new Board();
    let type = "rook";
    let position = "a1"
  
    let rook = board.registerPiece(type, position);
  
    expect(rook instanceof Rook).toBe(true);
    expect(rook.getPosition()).toBe(position);
  });
  
  test("registerPiece returns a Knight instance at a given position", () => {
    let board = new Board();
    let type= "knight";
    let position = "b1"
  
    let knight = board.registerPiece(type, position);
  
    expect(knight instanceof Knight).toBe(true);
    expect(knight.getPosition()).toBe(position);
  });
  
  test("registerPiece returns a Bishop instance at a given position", () => {
    let board = new Board();
    let type= "bishop";
    let position = "c1"
  
    let bishop = board.registerPiece(type, position);
  
    expect(bishop instanceof Bishop).toBe(true);
    expect(bishop.getPosition()).toBe(position);
  });
  
  test("registerPiece returns a Queen instance at a given position", () => {
    let board = new Board();
    let type= "queen";
    let position = "d1"
  
    let queen = board.registerPiece(type, position);
  
    expect(queen instanceof Queen).toBe(true);
    expect(queen.getPosition()).toBe(position);
  });
  
  test("registerPiece returns a King instance at a given position", () => {
    let board = new Board();
    let type= "king";
    let position = "e1"
  
    let king = board.registerPiece(type, position);
  
    expect(king instanceof King).toBe(true);
    expect(king.getPosition()).toBe(position);
  });  

  test("assignSquare assigns a piece to a given position on the board", () => {
    let position = "a2";
    let pawn = new Pawn(position);
    let board = new Board();

    let square = board.squares[position];
    expect(square).toBeNull();    
    
    board.assignSquare(pawn);
    square = board.squares[position];
    expect(square).toBeTruthy();
    expect(square instanceof Pawn).toBe(true);
  });

  test("isValidPiece returns false unless it receives: 'pawn', 'rook', 'knight', 'bishop', 'queen', or 'king'", () => {
    let board = new Board();
    let pieces = ['pawn', 'rook', 'knight', 'bishop', 'queen', 'king'];
    let allValidPieces = pieces.every(piece => {
      return board.isValidPiece(piece);
    }); 

    expect(allValidPieces).toBe(true);
    expect(board.isValidPiece('tony')).toBe(false);
    expect(board.isValidPiece('jerry')).toBe(false);
  });

  test("isValidPosition returns false for invalid board positions", () => {
    let board = new Board();
    let validPositions = Object.keys(board.squares);
    let allValid = validPositions.every(pos => {
      return board.isValidPosition(pos);
    });

    expect(allValid).toBe(true);
    expect(board.isValidPosition("x5")).toBe(false);
    expect(board.isValidPosition("i9")).toBe(false);
  });

  test.todo("assignSquare removes a piece from its old position on the board and assigns it to its new position");

  test.todo("assignSquare returns the new position of the given piece");
});


describe.skip("Player tests", () => {

});

describe.skip("Game tests", () => {

});
