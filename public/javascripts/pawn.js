"use strict";
class Pawn extends Piece {
    constructor(position) {
        super(position);
        this.type = "pawn";
        this.initial = true;
    }
    promote(type, player, pos) {
        if (this.position === null) {
            throw new Error("Invalid call. Cannot promote piece that is set to null");
        }
        if (this.isPromotableType(type) && this.isPromotablePos(player, pos)) {
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
                    throw new Error("Invalid type: " + JSON.stringify(_exhaustiveCheck));
            }
        }
        else {
            throw new Error("Must provide valid PromotableType and valid PlayerType");
        }
    }
    isPromotableType(type) {
        return type === "rook" || type === 'knight' || type === "bishop" || type === "queen";
    }
    isPromotablePos(player, pos) {
        let promotablePositions;
        switch (player) {
            case ("p1"):
                promotablePositions = new RegExp(/[a-h]8/);
                break;
            case ("p2"):
                promotablePositions = new RegExp(/[a-h]1/);
                break;
            default:
                let _exhaustiveCheck = player;
                throw new Error("Invalid player type: Player can either be 'p1' or 'p2'");
                break;
        }
        return promotablePositions.test(pos);
    }
}
