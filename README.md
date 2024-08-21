# map-each-pipe

A simple RxJS pipe to map each element of an array emitted by an observable.

## Installation

```bash
npm install map-each-pipe
```

## Usage

```typescript
import { of } from "rxjs";
import { mapEach } from "map-each-pipe";

const source$ = of([{ id: 1 }, { id: 2 }]);

const result$ = source$.pipe(mapEach((item) => ({ ...item, id: item.id * 2 })));

result$.subscribe(console.log);
// Output: [{ id: 2 }, { id: 4 }]
```
