export class Piece implements StandardPiece {
  position: Position | null = null;

  constructor(position: Position) {
    this.setPosition(position)
  }

  setPosition(position: Position) {
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
}

export class Pawn extends Piece implements PawnShape {
  type: string = "pawn";

  constructor(position: Position) {
    super(position);
  }

  promote(type: PromotionTypes, player: PlayerType): PromotableShapes {
    if (this.position === null) {
      throw new Error("Invalid call. Cannot promote piece that is set to null");
    }

    if (this.isPromotablePos(player)) {
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
        throw new Error("Invalid type: " + JSON.stringify(_exhaustiveCheck));
      }
    } else {
      throw new Error("Cannot promote pawn unless in promotable position");
    }
  }

  isPromotablePos(player: PlayerType): boolean {
    let promotablePositions;
    switch(player) {
      case("p1"):
        promotablePositions = ['a8', 'b8', 'c8', 'd8', 'e8', 'f8', 'g8', 'h8'];  
        return promotablePositions.includes(this.position as string);
        break;
      case("p2"):
        promotablePositions = ['a1', 'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1'];
        return promotablePositions.includes(this.position as string);
        break;
      default:
        let _exhaustiveCheck = player;
        throw new Error("Invalid player type: Player can either be 'p1' or 'p2'");
        break;
    }
  }

  describePiece() {
    return `I am a ${this.type}. I can only move forward 1 square at a time. But when I attack, I can only move forward diagonally by 1 square.`;
  }
}

export class Rook extends Piece implements StandardPiece {
  type: string= "rook";

  constructor(position: Position) {
    super(position);
  }

  describePiece() {
    return `I am a ${this.type}. I can only move as far as I want horizontally and vertically in any direction.`;
  }
}

export class Knight extends Piece implements StandardPiece {
  type: string = "knight"

  constructor(position: Position) {
    super(position);
  }
  
  describePiece() {
    return `I am a ${this.type}. I can jump over pieces. I also move in an L shape - either 1 up and 2 over, or 1 over and 2 up - in any direction.`;
  }
}

export class Bishop extends Piece implements StandardPiece {
  type: string = "bishop"

  constructor(position: Position) {
    super(position);
  }

  describePiece() {
    return `I am a ${this.type}. I move as far as I want diagonally in any direction. I'm the right hand for the King and the Queen.`;
  }  
}  

export class Queen extends Piece implements StandardPiece {
  type: string = "queen"; 

  constructor(position: Position) {
    super(position);
  }

  describePiece() {
    return `I am a ${this.type}. I can only as far as I want in any direction. I am the most powerful piece on the board, but my King gets all the credit.`;
  }
}


export class King extends Piece implements KingShape {
  type: string = "king";
  check: boolean;
  checkMate: boolean;
  
  constructor(position: Position) {
    super(position);
    this.check = false;
    this.checkMate = false;  
  }

  isThreatPostion(): boolean {
    return false;
  }

  describePiece() {
    return `I am a ${this.type}. I can only move forward 1 square in any direction. If I am cornered, the game is over.`;
  }
}
