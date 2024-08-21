import { of } from "rxjs";
import { describe, expect, it } from "vitest";
import { mapEach } from "../src/index";

describe("mapEach", () => {
  it("should multiply each id by 2", () => {
    const source$ = of([{ id: 1 }, { id: 2 }, { id: 3 }]);

    source$
      .pipe(mapEach((item) => ({ ...item, id: item.id * 2 })))
      .subscribe((result) => {
        expect(result).toEqual([{ id: 2 }, { id: 4 }, { id: 6 }]);
      });
  });

  it("should add a new field to each object", () => {
    const source$ = of([{ id: 1 }, { id: 2 }]);

    source$
      .pipe(mapEach((item) => ({ ...item, name: `Item ${item.id}` })))
      .subscribe((result) => {
        expect(result).toEqual([
          { id: 1, name: "Item 1" },
          { id: 2, name: "Item 2" },
        ]);
      });
  });

  it("should handle an empty array", () => {
    const source$ = of([]);

    source$
      .pipe(mapEach((item) => ({ ...item, id: item.id * 2 })))
      .subscribe((result) => {
        expect(result).toEqual([]);
      });
  });
});
