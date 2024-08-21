"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapEach = void 0;
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
// Define the mapEach function
function mapEach(fn) {
    return (source) => {
        return source.pipe((0, operators_1.map)((values) => {
            // Log values before transformation for debugging
            console.log("Original values:", values);
            return values.map(fn);
        }));
    };
}
exports.mapEach = mapEach;
// Test the mapEach function
(() => {
    const source$ = (0, rxjs_1.of)([{ id: 1 }, { id: 2 }, { id: 3 }]);
    source$
        .pipe(mapEach((value) => {
        // Ensure we're returning the transformed object
        return { id: value.id * 2 };
    }))
        .subscribe({
        next: (result) => console.log("Transformed result:", result),
        error: (err) => console.error("Error:", err),
        complete: () => console.log("Completed"),
    });
})();
