type ChessRank = 'a'| 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h';
type ChessFile = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

type Position = [ChessRank, ChessFile]; 

type PromotionTypes = "rook" | "knight" | "bishop" | "queen";
type PromotableShapes = RookShape | KnightShape | BishopShape | QueenShape;

interface Position {
  
}

interface StandardPiece {
  position: Position;
  type: string;
  describePiece(): string;
  move(): Position;
  attack(): boolean;
  getPosition(): Position;
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
