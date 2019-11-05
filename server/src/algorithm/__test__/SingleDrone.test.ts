import {Coordinate, Instruction, goNorth, goSouth, goEast, goWest, takePhoto} from "../Instruction";
import {singleDrone} from "../Drone";

describe("test class SingleDrone", () => {

    it('eleminate 1 duplicate photo within 8 photos', () => {
        const instructions = parseInstructions('x^^>>xvvx<<x<<x<<x^^x>>x')
        const drone = singleDrone()
        const drone_fly1 = drone.execute(instructions)
        // const drone_fly2 = drone_fly1.execute()
        expect(drone_fly1.uniquePhotos()).toEqual(7)
    })

    function parseInstructions(text: string): Instruction[] {
        return text.split('').map((txt) => {
            switch (txt) {
                case '^':
                    return goNorth;
                case 'v':
                    return goSouth;
                case '>':
                    return goEast;
                case '<':
                    return goWest;
                case 'x':
                    return takePhoto;
                default:
                    throw new Error("unknown instruction: " + txt)
            }
        })
    }
})