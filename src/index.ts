import { Observable } from "rxjs";
import { map } from "rxjs/operators";

export function mapEach<R, T>(fn: (value: T) => R) {
  return (source: Observable<T[]>): Observable<R[]> => {
    return source.pipe(map((values) => values.map(fn)));
  };
}
