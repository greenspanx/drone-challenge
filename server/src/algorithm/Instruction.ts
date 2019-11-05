export class Coordinate {
    private readonly x: number
    private readonly y: number

    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }

    increaseY() {
        return new Coordinate(this.x, this.y+1);
    }

    decreaseY() {
        return new Coordinate(this.x, this.y-1);
    }

    increaseX() {
        return new Coordinate(this.x+1, this.y);
    }

    decreaseX() {
        return new Coordinate(this.x-1, this.y);
    }
}

export interface Instruction {
    applyTo(coord: Coordinate): [Coordinate, boolean]
}

export class GoNorth implements Instruction {
    applyTo(coord: Coordinate): [Coordinate, boolean] {
        return [coord.increaseY(), false]
    }
}

export const goNorth = new GoNorth();

export class GoSouth implements Instruction {
    applyTo(coord: Coordinate): [Coordinate, boolean] {
        return [coord.decreaseY(), false]
    }
}

export const goSouth = new GoSouth();

export class GoEast implements Instruction {
    applyTo(coord: Coordinate): [Coordinate, boolean] {
        return [coord.increaseX(), false]
    }
}

export const goEast = new GoEast();

export class GoWest implements Instruction {
    applyTo(coord: Coordinate): [Coordinate, boolean] {
        return [coord.decreaseX(), false]
    }
}

export const goWest = new GoWest();

export class TakePhoto implements Instruction {
    applyTo(coord: Coordinate): [Coordinate, boolean] {
        return [coord, true]
    }
}

export const takePhoto = new TakePhoto();

