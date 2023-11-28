"use strict";
class King extends Piece {
    constructor(position) {
        super(position);
        this.type = "king";
        this.initial = true;
        this.check = false;
        this.checkMate = false;
    }
}
