export class Bishop implements BishopShape {
  type: string;
  position: Position;

  constructor(position: Position) {
    this.type = "Bishop";
    this.position = position;
  }

  move(): Position {
    return ['a', 1];
  }
  
  attack(): boolean {
    return true;
  }
  
  getPosition(): Position {
    return ['a', 1];
  }

  describePiece() {
    return `I am a ${this.type}. I move as far as I want diagonally in any direction. I'm the right hand for the King and the Queen.`;
  }  
}  