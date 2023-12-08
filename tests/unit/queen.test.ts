import {describe, expect, test, beforeAll, beforeEach} from '@jest/globals';
import Queen from '../../client/javascripts/queen';

describe("Queen Tests", () => {
  let queen: Queen;
  beforeEach(() => {
    queen = new Queen("e1");
  });

  test("Queen is a Queen object", () => {
    let queen: unknown = new Queen("e1");
    expect(queen instanceof Queen).toBe(true);
    expect(typeof queen).toBe('object');
  });

  // test("describePiece returns description string", () => {
    // let description = queen.describePiece();
    // let queenDescription = "I am a queen. I can only as far as I want in any direction. I am the most powerful piece on the board, but my King gets all the credit.";

    // expect(typeof description).toBe('string');
    // expect(description).toBe(queenDescription);
  // });
});