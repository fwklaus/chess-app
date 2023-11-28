"use strict";
class Piece {
    constructor(position) {
        this.position = null;
        this.setPosition(position);
    }
    setPosition(position) {
        this.position = position;
        return this.position;
    }
    getPosition() {
        if (this.position === null) {
            throw new Error("Invalid request. Cannot get piece position until one is set");
        }
        else {
            return this.position;
        }
    }
}
