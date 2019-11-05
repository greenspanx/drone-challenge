import { Coordinate, Instruction } from "./Instruction";
import { Journey } from "./Journey";
export interface Drone {
    execute(instructions: Instruction[]): Drone;
    uniquePhotos(): number;
}
export declare function singleDrone(coord?: Coordinate, journey?: Journey): SingleDrone;
export declare function compositeDrone(n: number): CompositeDrone;
declare class SingleDrone implements Drone {
    private readonly coord;
    readonly journey: Journey;
    constructor(coord: Coordinate, journey: Journey);
    execute(instructions: Instruction[]): SingleDrone;
    uniquePhotos(): number;
}
declare class CompositeDrone implements Drone {
    private readonly drones;
    constructor(drones: SingleDrone[]);
    execute(instructions: Instruction[]): Drone;
    uniquePhotos(): number;
}
export {};
