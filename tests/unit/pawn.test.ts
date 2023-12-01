import {describe, expect, test, beforeAll, beforeEach} from '@jest/globals';
import Pawn from '../../client/javascripts/pawn';


describe("Pawn Tests", () => {
  let pawn: Pawn;
  beforeEach(() => {
    pawn = new Pawn("a2");
  });

  test("Pawn is a Pawn object", () => {    
    let pawn: unknown = new Pawn("a2");
    expect(pawn instanceof Pawn).toBe(true);
    expect(typeof pawn).toBe('object');
  });

  // test("describePiece returns description string", () => {
    // let description = pawn.describePiece();
    // let pawnDescription = "I am a pawn. I can only move forward 1 square at a time. But when I attack, I can only move forward diagonally by 1 square."

    // expect(typeof description).toBe('string');
    // expect(description).toBe(pawnDescription);
  // });

  // test("promote throws an error if promote is called on a Pawn instance and no arguments are provided", () => {
  //   expect(() => {
  //     pawn.promote()
  //   }).toThrow(Error);
  // });

  // test("promote throws an error when given an invalid piece type", () => {
  //   expect(() => {
  //     pawn.promote("king", "p2", "a1")
  //   }).toThrow("Must provide valid PromotableType and valid PlayerType");
    
  //   expect(() => {
  //     pawn.promote("pawn", "p2", "a1")
  //   }).toThrow("Must provide valid PromotableType and valid PlayerType");
  // });

  test("promote throws an error if given an invalid position", () => {
    expect(() => {
      pawn.promote("queen", "p1", "a1")
    }).toThrow("Must provide valid PromotableType and valid PlayerType");
    
    expect(() => {
      pawn.promote("bishop", "p2", "a8")
    }).toThrow("Must provide valid PromotableType and valid PlayerType");
  });

  // test("promote returns an instance for a given string specifying a valid type", () => {
  //   let validTypes = ["rook", "knight", "bishop", "queen"];
  //   expect(pawn.promote(validTypes[0], "p2", "a1") instanceof Rook).toBe(true);
  //   expect(pawn.promote(validTypes[1], "p2", "a1") instanceof Knight).toBe(true);
  //   expect(pawn.promote(validTypes[2], "p2", "a1") instanceof Bishop).toBe(true);
  //   expect(pawn.promote(validTypes[3], "p2", "a1") instanceof Queen).toBe(true);
  // });

  // test("isPromotablePos returns true if pawn is in last file for either player", () => {
  //   let player1 = "p1";
  //   let player2 = "p2";
  //   let position1 = "a8";
  //   let position2 = "a1";
  //   let pawn = new Pawn("a1");
  //   let pawn2 = new Pawn("a8");

  //   let result1 = pawn.isPromotablePos(player1, position1);
  //   let result2 = pawn2.isPromotablePos(player2, position2);

  //   expect(result1).toBe(true);
  //   expect(result2).toBe(true);
  // });

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