export class King implements KingShape {
  type: string;
  check: boolean;
  checkMate: boolean;
  initial: boolean;
  position: Position;
  
  constructor(position: Position) {
    this.type = "King";
    this.check = false;
    this.checkMate = false;  
    this.initial = true;
    this.position = position;
  }
  getPosition(): Position {
    return ['a', 1];   
  }

  isThreatPostion(): boolean {
    return false;
  }
  
  move(): Position {
    return ['a', 1];
  }
  
  attack(): boolean {
    return true;
  }

  describePiece() {
    return `I am a ${this.type}. I can only move forward 1 square in any direction. If I am cornered, the game is over.`;
  }
}
