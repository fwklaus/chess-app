import { Bishop } from "./bishop";
import { Knight } from "./knight";
import { Queen } from "./queen";
import { Rook } from "./rook";

export class Pawn implements PawnShape {
  type: string;
  initial: boolean;
  initialMove: boolean;

  constructor() {
    this.type = "Pawn";
    this.initial = true;
    this.initialMove = false;
  }

  promote(type: PromotionTypes): PromotableShapes {
    switch(type) {
      case("rook"): 
        return new Rook();
        break;
      case("knight"):
        return new Knight();
        break;
      case("bishop"):
        return new Bishop();
        break;
      case("queen"):
        return new Queen();
        break;
      default:
        let _exhaustiveCheck: never = type;
        throw new Error("Invalid " + JSON.stringify(_exhaustiveCheck));
    }
  }

  isPromotable(): boolean {
    return false;
  }

  getPosition(): Position {
    return ["a", 1];
  }
 
  move(): Position {
    return ["a", 1];    
  }

  attack(): boolean {
    return true;
  }

  describePiece() {
    return `I am a ${this.type}. I can only move forward 1 square at a time. But when I attack, I can only move forward diagonally by 1 square.`;
  }
}
