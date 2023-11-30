// represents base piece from which all pieces inherit
interface GamePiece {
  position: string | null;
  setPosition(position: string): string;
  getPosition(): string;
}
