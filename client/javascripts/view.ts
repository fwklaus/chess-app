import GameController from "./gameController";

export default class View implements GameView {
  startButton: HTMLButtonElement | null = null;
  boardSquares: NodeListOf<HTMLDivElement>;
  playerPieces: NodeListOf<HTMLImageElement>;

  constructor(handlers: EventHandlers) {
      this.boardSquares = document.querySelectorAll("div.square");
      this.playerPieces = document.querySelectorAll("img.player");
      this.startButton = document.querySelector("#start") as HTMLButtonElement;
      this.bindListeners(handlers);
  }

  bindListeners(handlers: EventHandlers) {
    this.startButton?.addEventListener("click", handlers.handleStart);
  }
}

document.addEventListener("DOMContentLoaded", () => {
    new GameController();
});
