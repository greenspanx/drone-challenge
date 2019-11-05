export declare class Coordinate {
    private readonly x;
    private readonly y;
    constructor(x: number, y: number);
    increaseY(): Coordinate;
    decreaseY(): Coordinate;
    increaseX(): Coordinate;
    decreaseX(): Coordinate;
}
export interface Instruction {
    applyTo(coord: Coordinate): [Coordinate, boolean];
}
export declare class GoNorth implements Instruction {
    applyTo(coord: Coordinate): [Coordinate, boolean];
}
export declare const goNorth: GoNorth;
export declare class GoSouth implements Instruction {
    applyTo(coord: Coordinate): [Coordinate, boolean];
}
export declare const goSouth: GoSouth;
export declare class GoEast implements Instruction {
    applyTo(coord: Coordinate): [Coordinate, boolean];
}
export declare const goEast: GoEast;
export declare class GoWest implements Instruction {
    applyTo(coord: Coordinate): [Coordinate, boolean];
}
export declare const goWest: GoWest;
export declare class TakePhoto implements Instruction {
    applyTo(coord: Coordinate): [Coordinate, boolean];
}
export declare const takePhoto: TakePhoto;
