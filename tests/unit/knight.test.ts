import {describe, expect, test, beforeAll, beforeEach} from '@jest/globals';
import Knight from '../../client/javascripts/knight';

describe("Knight Tests", () => {
  let knight: Knight;
  beforeEach(() => {
    knight = new Knight("b1");
  });

  test("Knight is a Knight object", () => {    
    let king: unknown = new Knight("b1");
    expect(knight instanceof Knight).toBe(true);
    expect(typeof knight).toBe('object');
  });

  // test("describePiece returns description string", () => {
  //   let description = knight.describePiece();
  //   let knightDescription = "I am a knight. I can jump over pieces. I also move in an L shape - either 1 up and 2 over, or 1 over and 2 up - in any direction.";

  //   expect(typeof description).toBe('string');
  //   expect(description).toBe(knightDescription);
  // });
});
