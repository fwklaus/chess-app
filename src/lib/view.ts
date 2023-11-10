export class View implements DOMViewer {
  playerPieces?: NodeListOf<HTMLImageElement>;
  boardSquares?: NodeListOf<HTMLDivElement>;
  startButton: HTMLButtonElement | null = null;
  
  constructor(handlers: EventHandlers) {
    this.selectBoardSquares();
    this.selectPlayerPieces();
    this.selectStartButton();
    this.bindListeners(handlers);
  }  

  selectBoardSquares(): void {
    this.boardSquares = document.querySelectorAll("div.square");
  }
  
  selectPlayerPieces(): void {
    this.playerPieces = document.querySelectorAll("img.player");
  }

  selectStartButton(): void {
    this.startButton = document.querySelector("#start");
  }

  bindListeners(handlers: EventHandlers): void {
    this.startButton?.addEventListener("click", handlers.handleStart);
  }
}

