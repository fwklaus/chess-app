import Piece from "./piece";

export default class Bishop extends Piece implements Bishop{
  type: "bishop" = "bishop";

  constructor(position: string) {
      super(position);
  }

  // describePiece() {
  //     return `I am a ${this.type}. I move as far as I want diagonally in any direction. I'm the right hand for the King and the Queen.`;
  // }
}