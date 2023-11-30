// presents information to and accepts it from the user
interface GameView {
  startButton: HTMLButtonElement | null;
  boardSquares: NodeListOf<HTMLDivElement>;
  playerPieces: NodeListOf<HTMLImageElement>;
  bindListeners(handlers: EventHandlers);
}
