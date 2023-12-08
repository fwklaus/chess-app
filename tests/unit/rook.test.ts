import {describe, expect, test, beforeAll, beforeEach} from '@jest/globals';
import Rook from '../../client/javascripts/rook';

describe("Rook Tests", () => {
  let rook: Rook;
  beforeEach(() => {
    rook = new Rook("a1");
  });

  test("Rook is a Rook object", () => {
    let rook: unknown = new Rook("d1");
    expect(rook instanceof Rook).toBe(true);
    expect(typeof rook).toBe('object');
  });

  // test("describePiece returns description string", () => {
  //   let description = rook.describePiece();
  //   let rookDescription = "I am a rook. I can only move as far as I want horizontally and vertically in any direction.";

  //   expect(typeof description).toBe('string');
  //   expect(description).toBe(rookDescription);
  // });
});
