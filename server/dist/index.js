"use strict";
// start server independently here to decouple from app.js 
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
app_1.default.listen(4001, () => console.log(`Api started at http://localhost:4001`));
//# sourceMappingURL=index.js.map