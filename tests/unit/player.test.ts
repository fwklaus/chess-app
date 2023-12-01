import {describe, expect, test, beforeAll, beforeEach} from '@jest/globals';
import Pawn from '../../client/javascripts/pawn';
import Player from '../../client/javascripts/player';
import Knight from '../../client/javascripts/knight';
import King from '../../client/javascripts/king';

describe("Player tests", () => {
  test("setPiece adds a piece to the pieces array", () => {
    let player1 = new Player("p1");
    let pawn = new Pawn("a2");
    let knight = new Knight("b1");
    let king = new King("d1");


    let pieces = player1.pieces;
    expect(pieces.length).toBe(0);

    // player1.setPiece(pawn);
    // expect(pieces.length).toBe(1);

    // player1.setPiece(knight)
    // expect(pieces.length).toBe(2);

    // player1.setPiece(king);
    // expect(pieces.length).toBe(3);

    expect(player1.pieces[0] instanceof Pawn).toBe(true);
    expect(player1.pieces[1] instanceof Knight).toBe(true);
    expect(player1.pieces[2] instanceof King).toBe(true);
  });
  
  test.todo("Begin timer outputs the time limit for the player on each turn");
  test.todo("move sets a players piece to the specified position on the board")
});