// type ChessRank = 'a'| 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h';
// type ChessFile = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

// type Position = [ChessRank, ChessFile]; 

type Position = string; // use Regex to validate the string 

type PromotionTypes = "rook" | "knight" | "bishop" | "queen";
type PromotableShapes = RookShape | KnightShape | BishopShape | QueenShape;

type AllPieces = (StandardPiece | SpecialPiece)[];

interface StandardPiece {
  position: Position | null;
  #setPosition(position: Position): Position;
  getPosition(): Position;
  move(oldPos: Position, newPos: Position): Position;
}

interface SpecialPiece extends StandardPiece {
  initial: boolean;
}

interface PawnShape extends SpecialPiece {
  initialMove: boolean;
  promote(type: PromotionTypes): PromotableShapes;
  isPromotable(): boolean;
} 

interface RookShape extends SpecialPiece {}

interface KnightShape extends StandardPiece {}

interface BishopShape extends StandardPiece {}

interface KingShape extends SpecialPiece {
  check: boolean;
  checkMate: boolean;
  isThreatPostion(): boolean // used to determine if spot is threat position? Necessary?
}

interface QueenShape extends StandardPiece {}
