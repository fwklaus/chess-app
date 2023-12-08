import {describe, expect, test, beforeAll, beforeEach} from '@jest/globals';
import Bishop from '../../client/javascripts/bishop';

describe("Bishop Tests", () => {
  let bishop: Bishop;
  beforeEach(() => {
    bishop = new Bishop("c1");
  });

  test("Bishop is a Bishop object", () => {
    let bishop: unknown = new Bishop("c1");
    expect(bishop instanceof Bishop).toBe(true);
    expect(typeof bishop).toBe('object');
  });

  // test("describePiece returns description string", () => {
  //   let description = bishop.describePiece();
  //   let bishopDescription = "I am a bishop. I move as far as I want diagonally in any direction. I'm the right hand for the King and the Queen."

  //   expect(typeof description).toBe('string');
  //   expect(description).toBe(bishopDescription);
  // });

  test.todo("getPosition returns current bishop position");
  test.todo("move returns the position of the square the bishop moves to");
  test.todo("attack returns true when the bishop attack removes a piece from the board");
});
