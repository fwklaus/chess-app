interface DOMViewer {
  playerPieces?: NodeListOf<HTMLImageElement>;
  boardSquares?: NodeListOf<HTMLDivElement>;
  startButton: HTMLButtonElement | null;
  selectBoardSquares(): void;
  selectPlayerPieces(): void;
  selectStartButton(): void;
  bindListeners(handlers: EventHandlers): void;
}