import {describe, expect, test, beforeAll, beforeEach} from '@jest/globals';
import King from '../../client/javascripts/king';

describe("King Tests", () => {
  let king: King;
  beforeEach(() => {
    king = new King("d1");
  });

  test("King is a King object", () => {
    let king: unknown = new King("d1");
    expect(king instanceof King).toBe(true);
    expect(typeof king).toBe('object');
  });

  // test("describePiece returns description string", () => {
    // let description = king.describePiece();

    // let kingDescription = "I am a king. I can only move forward 1 square in any direction. If I am cornered, the game is over.";

    // expect(typeof description).toBe('string');
    // expect(description).toBe(kingDescription);
  // });

  test.todo("isThreatPosition returns true if a potential movement places king in check");
});