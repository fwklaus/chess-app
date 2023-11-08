type Position = string; // use Regex to validate the string 

type PromotionTypes = "rook" | "knight" | "bishop" | "queen";
type PromotableShapes = RookShape | KnightShape | BishopShape | QueenShape;

interface StandardPiece {
  position: Position | null;
  setPosition(position: Position): Position;
  getPosition(): Position;
  move(newPos: Position): Position;
}

interface PawnShape extends StandardPiece {
  promote(type: PromotionTypes, player: "p1" | "p2"): PromotableShapes;
  isPromotablePos(player: "p1" | "p2"): boolean;
} 

interface KingShape extends StandardPiece {
  check: boolean;
  checkMate: boolean;
  isThreatPostion(): boolean // used to determine if spot is threat position? Necessary?
}
