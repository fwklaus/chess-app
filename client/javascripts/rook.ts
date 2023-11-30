import Piece from "./piece";

export default class Rook extends Piece implements Rook {
  type: "rook" = "rook";
  initial: boolean;

  constructor(position: string) {
    super(position);
    this.initial = true;
  }

  // describePiece() {
  //     return `I am a ${this.type}. I can only move as far as I want horizontally and vertically in any direction.`;
  // }
}