"use strict";
class Rook extends Piece {
    constructor(position) {
        super(position);
        this.type = "rook";
        this.initial = true;
    }
}
