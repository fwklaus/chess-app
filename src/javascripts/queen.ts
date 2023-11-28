class Queen extends Piece implements Queen {
  type: "queen" = "queen";
  constructor(position: string) {
      super(position);
  }
  // describePiece() {
  //     return `I am a ${this.type}. I can only as far as I want in any direction. I am the most powerful piece on the board, but my King gets all the credit.`;
  // }
}
