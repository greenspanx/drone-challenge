"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Instruction_1 = require("../Instruction");
const Drone_1 = require("../Drone");
describe("test class SingleDrone", () => {
    it('eleminate 1 duplicate photo within 8 photos', () => {
        const instructions = parseInstructions('x^^>>xvvx<<x<<x<<x^^x>>x');
        const drone = Drone_1.singleDrone();
        const drone_fly1 = drone.execute(instructions);
        // const drone_fly2 = drone_fly1.execute()
        expect(drone_fly1.uniquePhotos()).toEqual(7);
    });
    function parseInstructions(text) {
        return text.split('').map((txt) => {
            switch (txt) {
                case '^':
                    return Instruction_1.goNorth;
                case 'v':
                    return Instruction_1.goSouth;
                case '>':
                    return Instruction_1.goEast;
                case '<':
                    return Instruction_1.goWest;
                case 'x':
                    return Instruction_1.takePhoto;
                default:
                    throw new Error("unknown instruction: " + txt);
            }
        });
    }
});
//# sourceMappingURL=SingleDrone.test.js.map