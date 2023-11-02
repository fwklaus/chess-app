export class Queen implements QueenShape {
  type: string;
  position: Position;

  constructor(position: Position) {
    this.type = "Queen";
    this.position = position;
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
