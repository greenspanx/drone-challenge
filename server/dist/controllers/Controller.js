"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import module
const Deduplication_1 = require("../algorithm/Deduplication");
// controller
exports.default = (req, res, next) => {
    console.log('req.body: ', req.body);
    const { instructions, drone_counts } = req.body;
    if (!instructions || !drone_counts || +drone_counts > 2) {
        next(new Error('no valid instructions or drone number'));
    }
    let uniqueArr = new Deduplication_1.Deduplication(instructions, +drone_counts);
    // return res.send(uniqueArr.deduplication().length);
    res.json({ uniqueShots: `${uniqueArr.deduplication().length}` });
};
//# sourceMappingURL=Controller.js.map