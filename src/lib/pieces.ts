class Piece implements StandardPiece {
  position: Position | null = null;

  constructor(position: Position) {
    this.#setPosition(position)
  }

  #setPosition(position: Position) {
    this.position = position;
    return this.position;
  }

  getPosition(): Position {
    if (this.position === null) {
      throw new Error("Invalid request. Cannot get piece position until one is set");
    } else {
      return this.position;
    }
  }
 
  // need to register piece with board each time a piece moves
  move(oldPos: Position, newPos: Position): Position {
    this.#setPosition(newPos);
    if (this.position === null) {
      throw new Error("Invalid request. Cannot get piece position until one is set");
    } else {
      return this.position;
    }
  }
}

class Pawn extends Piece implements PawnShape {
  type: string = "pawn";
  initial: boolean;
  initialMove: boolean;

  constructor(position: Position) {
    super(position);
    this.initial = true;
    this.initialMove = false;
  }

  promote(type: PromotionTypes): PromotableShapes {
    if (this.position === null) {
      throw new Error("Invalid call. Cannot promote piece that is set to null");
    }

    switch(type) {
      case("rook"): 
        return new Rook(this.position);
        break;
      case("knight"):
        return new Knight(this.position);
        break;
      case("bishop"):
        return new Bishop(this.position);
        break;
      case("queen"):
        return new Queen(this.position);
        break;
      default:
        let _exhaustiveCheck: never = type;
        throw new Error("Invalid " + JSON.stringify(_exhaustiveCheck));
    }
  }

  isPromotable(): boolean {
    return false;
  }

  describePiece() {
    return `I am a ${this.type}. I can only move forward 1 square at a time. But when I attack, I can only move forward diagonally by 1 square.`;
  }
}

class Rook extends Piece implements RookShape {
  type: string= "rook";
  initial: boolean;

  constructor(position: Position) {
    super(position);
    this.initial = true;
  }

  describePiece() {
    return `I am a ${this.type}. I can only move as far as I want horizontally and vertically in any direction.`;
  }
}

class Knight extends Piece implements KnightShape {
  type: string = "knight"

  constructor(position: Position) {
    super(position);
  }
  
  describePiece() {
    return `I am a ${this.type}. I can jump over pieces. I also move in an L shape - either 1 up and 2 over, or 1 over and 2 up - in any direction.`;
  }
}

class Bishop extends Piece implements BishopShape {
  type: string = "bishop"

  constructor(position: Position) {
    super(position);
  }

  describePiece() {
    return `I am a ${this.type}. I move as far as I want diagonally in any direction. I'm the right hand for the King and the Queen.`;
  }  
}  

class Queen extends Piece implements QueenShape {
  type: string = "queen"; 

  constructor(position: Position) {
    super(position);
  }

  describePiece() {
    return `I am a ${this.type}. I can only as far as I want in any direction. I am the most powerful piece on the board, but my King gets all the credit.`;
  }
}


class King extends Piece implements KingShape {
  type: string = "king";
  check: boolean;
  checkMate: boolean;
  initial: boolean;
  
  constructor(position: Position) {
    super(position);
    this.check = false;
    this.checkMate = false;  
    this.initial = true;
  }

  isThreatPostion(): boolean {
    return false;
  }

  describePiece() {
    return `I am a ${this.type}. I can only move forward 1 square in any direction. If I am cornered, the game is over.`;
  }
}

module.exports = {
  Pawn,
  Rook,
  Knight,
  Bishop,
  Queen, 
  King,
};