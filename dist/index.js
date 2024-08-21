"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapEach = mapEach;
const operators_1 = require("rxjs/operators");
function mapEach(fn) {
    return (source) => {
        return source.pipe((0, operators_1.map)((values) => values.map(fn)));
    };
}
