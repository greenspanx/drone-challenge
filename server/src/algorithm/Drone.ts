import {Coordinate, Instruction} from "./Instruction";
import {EmptyJourney, Journey, Step} from "./Journey";

export interface Drone {
    execute(instructions: Instruction[]): Drone;
    uniquePhotos(): number;
}

export function singleDrone(
    coord: Coordinate = new Coordinate(0, 0),
    journey: Journey = EmptyJourney): SingleDrone {
    return new SingleDrone(coord, journey)
}

export function compositeDrone(n: number): CompositeDrone {
    if (n < 2) {
        throw new Error("n must greater than 1, but was: " + n)
    }

    const drones = new Array<SingleDrone>();
    for(let i = 0; i < n; i ++){
        drones.push(singleDrone());
    }
    return new CompositeDrone(drones);
}

class SingleDrone implements Drone {
    private readonly coord: Coordinate
    readonly journey: Journey

    constructor(coord: Coordinate, journey: Journey){
        this.coord = coord
        this.journey = journey
    }

    execute(instructions: Instruction[]): SingleDrone {
        const steps = instructions.reduce((accStep, i) => {
            let newCoord: Coordinate, photo: boolean;
            [newCoord, photo] = i.applyTo(this.coord);

            accStep.push(new Step(newCoord, photo));
            return accStep;

        }, new Array<Step>());

        const lastStep = steps.pop();
        if(lastStep){
            const newJourney = this.journey.addSteps(steps);
            return new SingleDrone(lastStep.coord, newJourney);
        }else{
            return this;
        }
        
    }

    uniquePhotos(): number {
        return this.journey.uniquePhotos()
    }
}

class CompositeDrone implements Drone {
    private readonly drones: SingleDrone[]

    constructor(drones: SingleDrone[]) {
        this.drones = drones
    }

    execute(instructions: Instruction[]): Drone {
        throw new Error("not implemented")
    }

    uniquePhotos(): number {
        const mergedJourney = this.drones.reduce((accJourney, drone) => {
            return accJourney.mergeWith(drone.journey)
        }, EmptyJourney);

        return mergedJourney.uniquePhotos();
    }
}