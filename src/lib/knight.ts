export class Knight implements KnightShape {
  type: string;

  constructor() {
    this.type = "Knight";
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
    return `I am a ${this.type}. I can jump over pieces. I also move in an L shape - either 1 up and 2 over, or 1 over and 2 up - in any direction.`;
  }
}
