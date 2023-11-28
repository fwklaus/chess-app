class Player implements Player {
  pieces: Piece[] = [];
  time = "6:00";
  type;

  constructor(player: string) {
      this.type = player;
  }
  // sets the initial position of a piece on the board
  addPiece(piece: Piece): Piece {
      this.pieces.push(piece);
      return piece;
  }
  beginTimer(): void {
      // will require some mathematics
      // use setInterval to decrement the clock when the timer starts
      // must update the DOM - countdown as the timer counts up
      console.log(this.time); // output start time for player
  }

  validMoves(state: GameState): GameMove[] {
    return [];
  }

  // move piece to new position
  // register pieces new position on the board
  // set the old position to null
  // move(newPos) {
  //     // this.setPosition(newPos);
  //     // if (this.position === null) {
  //     //   throw new Error("Invalid request. Cannot get piece position until one is set");
  //     // } else {
  //     //   return this.position;
  //     // }
  //     // return this.setPosition(newPos);
  //     return newPos;
  // }
}