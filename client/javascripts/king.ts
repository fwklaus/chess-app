import Piece from "./piece";

export default class King extends Piece implements King {
  type: "king" = "king";
  initial: boolean;
  check: boolean;
  checkMate: boolean;

  constructor(position: string) {
    super(position);
    this.initial = true;
    this.check = false;
    this.checkMate = false;
  }

  // isThreatPostion() {
  //     return false;
  // }

  // describePiece() {
  //     return `I am a ${this.type}. I can only move forward 1 square in any direction. If I am cornered, the game is over.`;
  // }
}