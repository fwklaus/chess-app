"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const piece_1 = __importDefault(require("./piece"));
const rook_1 = __importDefault(require("./rook"));
const knight_1 = __importDefault(require("./knight"));
const bishop_1 = __importDefault(require("./bishop"));
const queen_1 = __importDefault(require("./queen"));
class Pawn extends piece_1.default {
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
                    return new rook_1.default(this.position);
                    break;
                case ("knight"):
                    return new knight_1.default(this.position);
                    break;
                case ("bishop"):
                    return new bishop_1.default(this.position);
                    break;
                case ("queen"):
                    return new queen_1.default(this.position);
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
exports.default = Pawn;
