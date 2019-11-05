"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Instruction_1 = require("./Instruction");
const Journey_1 = require("./Journey");
function singleDrone(coord = new Instruction_1.Coordinate(0, 0), journey = Journey_1.EmptyJourney) {
    return new SingleDrone(coord, journey);
}
exports.singleDrone = singleDrone;
function compositeDrone(n) {
    if (n < 2) {
        throw new Error("n must greater than 1, but was: " + n);
    }
    const drones = new Array();
    for (let i = 0; i < n; i++) {
        drones.push(singleDrone());
    }
    return new CompositeDrone(drones);
}
exports.compositeDrone = compositeDrone;
class SingleDrone {
    constructor(coord, journey) {
        this.coord = coord;
        this.journey = journey;
    }
    execute(instructions) {
        const steps = instructions.reduce((accStep, i) => {
            let newCoord, photo;
            [newCoord, photo] = i.applyTo(this.coord);
            accStep.push(new Journey_1.Step(newCoord, photo));
            return accStep;
        }, new Array());
        const lastStep = steps.pop();
        if (lastStep) {
            const newJourney = this.journey.addSteps(steps);
            return new SingleDrone(lastStep.coord, newJourney);
        }
        else {
            return this;
        }
    }
    uniquePhotos() {
        return this.journey.uniquePhotos();
    }
}
class CompositeDrone {
    constructor(drones) {
        this.drones = drones;
    }
    execute(instructions) {
        throw new Error("not implemented");
    }
    uniquePhotos() {
        const mergedJourney = this.drones.reduce((accJourney, drone) => {
            return accJourney.mergeWith(drone.journey);
        }, Journey_1.EmptyJourney);
        return mergedJourney.uniquePhotos();
    }
}
//# sourceMappingURL=Drone.js.map