import {Coordinate} from "./Instruction";

export class Journey {
    private readonly steps: Step[]

    constructor(steps: Step[]) {
        this.steps = steps
    }

    uniquePhotos(): number {
        const stepsWithPhoto = this.steps.filter(step => step.photo)
        const coordsWithPhoto = stepsWithPhoto.map(step => JSON.stringify(step.coord))
        const uniqueCoords = new Set(coordsWithPhoto);
        return uniqueCoords.size;
    }

    addSteps(newSteps: Step[]): Journey {
        return new Journey(this.steps.concat(newSteps))
    }

    mergeWith(journey: Journey): Journey {
        return new Journey(this.steps.concat(journey.steps))
    }
}

export const EmptyJourney = new Journey(Array())

export class Step {
    readonly coord: Coordinate
    readonly photo: boolean

    constructor(coord: Coordinate, photo: boolean) {
        this.coord = coord
        this.photo = photo
    }
}