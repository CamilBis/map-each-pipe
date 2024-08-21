import { Observable } from "rxjs";
export declare function mapEach<R, T>(fn: (value: T) => R): (source: Observable<T[]>) => Observable<R[]>;
