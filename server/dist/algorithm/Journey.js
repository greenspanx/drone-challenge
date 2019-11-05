"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Journey {
    constructor(steps) {
        this.steps = steps;
    }
    uniquePhotos() {
        const stepsWithPhoto = this.steps.filter(step => step.photo);
        const coordsWithPhoto = stepsWithPhoto.map(step => JSON.stringify(step.coord));
        const uniqueCoords = new Set(coordsWithPhoto);
        return uniqueCoords.size;
    }
    addSteps(newSteps) {
        return new Journey(this.steps.concat(newSteps));
    }
    mergeWith(journey) {
        return new Journey(this.steps.concat(journey.steps));
    }
}
exports.Journey = Journey;
exports.EmptyJourney = new Journey(Array());
class Step {
    constructor(coord, photo) {
        this.coord = coord;
        this.photo = photo;
    }
}
exports.Step = Step;
//# sourceMappingURL=Journey.js.map