class Piece implements GamePiece {
  position: string | null = null;

  constructor(position: string) {
    this.setPosition(position);
  }
  
  setPosition(position: string) {
      this.position = position;
      return this.position;
  }
  getPosition() {
      if (this.position === null) {
          throw new Error("Invalid request. Cannot get piece position until one is set");
      }
      else {
          return this.position;
      }
  }
}