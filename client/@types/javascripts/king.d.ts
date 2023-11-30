interface King extends GamePiece {
  type: "king";
  check: boolean;
  checkMate: boolean;
  initial: boolean;
}
