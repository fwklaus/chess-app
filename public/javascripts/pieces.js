"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Piece_instances, _Piece_setPosition;
class Piece {
    constructor(position) {
        _Piece_instances.add(this);
        this.position = null;
        __classPrivateFieldGet(this, _Piece_instances, "m", _Piece_setPosition).call(this, position);
    }
    getPosition() {
        if (this.position === null) {
            throw new Error("Invalid request. Cannot get piece position until one is set");
        }
        else {
            return this.position;
        }
    }
    // need to register piece with board each time a piece moves
    move(oldPos, newPos) {
        __classPrivateFieldGet(this, _Piece_instances, "m", _Piece_setPosition).call(this, newPos);
        if (this.position === null) {
            throw new Error("Invalid request. Cannot get piece position until one is set");
        }
        else {
            return this.position;
        }
    }
}
_Piece_instances = new WeakSet(), _Piece_setPosition = function _Piece_setPosition(position) {
    this.position = position;
    return this.position;
};
class Pawn extends Piece {
    constructor(position) {
        super(position);
        this.type = "pawn";
        this.initial = true;
        this.initialMove = false;
    }
    promote(type) {
        if (this.position === null) {
            throw new Error("Invalid call. Cannot promote piece that is set to null");
        }
        switch (type) {
            case ("rook"):
                return new Rook(this.position);
                break;
            case ("knight"):
                return new Knight(this.position);
                break;
            case ("bishop"):
                return new Bishop(this.position);
                break;
            case ("queen"):
                return new Queen(this.position);
                break;
            default:
                let _exhaustiveCheck = type;
                throw new Error("Invalid " + JSON.stringify(_exhaustiveCheck));
        }
    }
    isPromotable() {
        return false;
    }
    describePiece() {
        return `I am a ${this.type}. I can only move forward 1 square at a time. But when I attack, I can only move forward diagonally by 1 square.`;
    }
}
class Rook extends Piece {
    constructor(position) {
        super(position);
        this.type = "rook";
        this.initial = true;
    }
    describePiece() {
        return `I am a ${this.type}. I can only move as far as I want horizontally and vertically in any direction.`;
    }
}
class Knight extends Piece {
    constructor(position) {
        super(position);
        this.type = "knight";
    }
    describePiece() {
        return `I am a ${this.type}. I can jump over pieces. I also move in an L shape - either 1 up and 2 over, or 1 over and 2 up - in any direction.`;
    }
}
class Bishop extends Piece {
    constructor(position) {
        super(position);
        this.type = "bishop";
    }
    describePiece() {
        return `I am a ${this.type}. I move as far as I want diagonally in any direction. I'm the right hand for the King and the Queen.`;
    }
}
class Queen extends Piece {
    constructor(position) {
        super(position);
        this.type = "queen";
    }
    describePiece() {
        return `I am a ${this.type}. I can only as far as I want in any direction. I am the most powerful piece on the board, but my King gets all the credit.`;
    }
}
class King extends Piece {
    constructor(position) {
        super(position);
        this.type = "king";
        this.check = false;
        this.checkMate = false;
        this.initial = true;
    }
    isThreatPostion() {
        return false;
    }
    describePiece() {
        return `I am a ${this.type}. I can only move forward 1 square in any direction. If I am cornered, the game is over.`;
    }
}
module.exports = {
    Pawn,
    Rook,
    Knight,
    Bishop,
    Queen,
    King,
};
