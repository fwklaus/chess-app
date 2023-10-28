class Pawn {
  static type: string = "Pawn";

  constructor() {}

  static describeAction() {
    return `I am a ${Pawn.type}. I can only move forward 1 square at a time. But when I attack, I can only move forward diagonally by 1 square.`;
  }
}

class King {
  static type: string = "King";

  constructor() {}

  static describeAction() {
    return `I am a ${King.type}. I can only move forward 1 square in any direction. If I am cornered, the game is over.`;
  }
}

class Queen {
  static type: string = "Queen";

  constructor() {}

  static describeAction() {
    return `I am a ${Queen.type}. I can only as far as I want in any direction. I am the most powerful piece on the board, but my King gets all the credit.`;
  }
}

class Bishop {
  static type: string = "Bishop";

  constructor(name: string) {}

  static describeAction() {
    return `I am a ${Bishop.type}. I move as far as I want diagonally in any direction. I'm the right hand for the King and the Queen.`;
  }
}

class Knight {
  static type: string = "Knight";

  constructor(name: string) {}

  static describeAction() {
    return `I am a ${Knight.type}. I can jump over pieces. I also move in an L shape - either 1 up and 2 over, or 1 over and 2 up - in any direction.`;
  }
}

class Rook {
  static type: string = "Rook";

  constructor() {}

  static describeAction() {
    return `I am a ${Rook.type}. I can only move as far as I want horizontally and vertically in any direction.`;
  }
}

// module.exports = { King, Queen, Bishop, Knight, Rook, Pawn };

// export{}

export{ King, Queen, Bishop, Knight, Rook, Pawn };