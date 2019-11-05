import { Coordinate } from "./Instruction";
export declare class Journey {
    private readonly steps;
    constructor(steps: Step[]);
    uniquePhotos(): number;
    addSteps(newSteps: Step[]): Journey;
    mergeWith(journey: Journey): Journey;
}
export declare const EmptyJourney: Journey;
export declare class Step {
    readonly coord: Coordinate;
    readonly photo: boolean;
    constructor(coord: Coordinate, photo: boolean);
}
