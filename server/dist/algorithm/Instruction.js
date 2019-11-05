"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Coordinate {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    increaseY() {
        return new Coordinate(this.x, this.y + 1);
    }
    decreaseY() {
        return new Coordinate(this.x, this.y - 1);
    }
    increaseX() {
        return new Coordinate(this.x + 1, this.y);
    }
    decreaseX() {
        return new Coordinate(this.x - 1, this.y);
    }
}
exports.Coordinate = Coordinate;
class GoNorth {
    applyTo(coord) {
        return [coord.increaseY(), false];
    }
}
exports.GoNorth = GoNorth;
exports.goNorth = new GoNorth();
class GoSouth {
    applyTo(coord) {
        return [coord.decreaseY(), false];
    }
}
exports.GoSouth = GoSouth;
exports.goSouth = new GoSouth();
class GoEast {
    applyTo(coord) {
        return [coord.increaseX(), false];
    }
}
exports.GoEast = GoEast;
exports.goEast = new GoEast();
class GoWest {
    applyTo(coord) {
        return [coord.decreaseX(), false];
    }
}
exports.GoWest = GoWest;
exports.goWest = new GoWest();
class TakePhoto {
    applyTo(coord) {
        return [coord, true];
    }
}
exports.TakePhoto = TakePhoto;
exports.takePhoto = new TakePhoto();
//# sourceMappingURL=Instruction.js.map