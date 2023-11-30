interface Pawn extends GamePiece {
  type: "pawn";
  initial: boolean;
  promote(newType: string, player: string, position: string): GamePiece;
  isPromotableType(type: string): boolean;
  isPromotablePos(player: string, position: string): boolean;
}