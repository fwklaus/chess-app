export class Rook implements RookShape {
  type: string;
  initial: boolean;
  position: Position;

  constructor(position: Position) {
    this.type = "Rook";
    this.initial = true;
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
    return `I am a ${this.type}. I can only move as far as I want horizontally and vertically in any direction.`;
  }
}
