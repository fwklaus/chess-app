export class Queen implements QueenShape {
  type: string;

  constructor() {
    this.type = "Queen";
  }

  getPosition(): Position {
    return ['a', 1];
  }

  move(): Position {
    return ['a', 1];
  }

  attack(): boolean {
    return true;
  }

  describePiece() {
    return `I am a ${this.type}. I can only as far as I want in any direction. I am the most powerful piece on the board, but my King gets all the credit.`;
  }
}
