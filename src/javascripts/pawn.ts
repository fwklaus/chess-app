class Pawn extends Piece implements Pawn {
  type: "pawn" = "pawn";
  initial: boolean;

  constructor(position: string) {
      super(position);
      this.initial = true;
  }

  promote(type: string, player: string, pos: string): GamePiece {
      if (this.position === null) {
          throw new Error("Invalid call. Cannot promote piece that is set to null");
      }
      if (this.isPromotableType(type) && this.isPromotablePos(player, pos)) {
          switch (type) {
              case ("rook"):
                  return new Rook(this.position);
                  break;
              case ("knight"):
                  return new Knight(this.position);
                  break;
              case ("bishop"):
                  return new Bishop(this.position);
                  break;
              case ("queen"):
                  return new Queen(this.position);
                  break;
              default:
                  let _exhaustiveCheck = type;
                  throw new Error("Invalid type: " + JSON.stringify(_exhaustiveCheck));
          }
      }
      else {
          throw new Error("Must provide valid PromotableType and valid PlayerType");
      }
  }
  isPromotableType(type: string): boolean {
      return type === "rook" || type === 'knight' || type === "bishop" || type === "queen";
  }
  isPromotablePos(player: string, pos: string): boolean {
      let promotablePositions;
      switch (player) {
          case ("p1"):
              promotablePositions = new RegExp(/[a-h]8/);
              break;
          case ("p2"):
              promotablePositions = new RegExp(/[a-h]1/);
              break;
          default:
              let _exhaustiveCheck = player;
              throw new Error("Invalid player type: Player can either be 'p1' or 'p2'");
              break;
      }
      return promotablePositions.test(pos);
  }
  // describePiece() {
  //     return `I am a ${this.type}. I can only move forward 1 square at a time. But when I attack, I can only move forward diagonally by 1 square.`;
  // }
}