import Piece from "./piece";

export default class Knight extends Piece implements Knight {
  type: "knight" = "knight";

  constructor(position: string) {
      super(position);
  }

  // describePiece() {
  //     return `I am a ${this.type}. I can jump over pieces. I also move in an L shape - either 1 up and 2 over, or 1 over and 2 up - in any direction.`;
  // }
}