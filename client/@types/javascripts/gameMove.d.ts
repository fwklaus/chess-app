// defines how moves manipulate the game state
interface GameMove {
  isValid(): boolean;
  execute(): boolean;
  undo(): boolean;
}