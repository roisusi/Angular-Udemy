import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CounterServiceService {
  counterToInactive: number = 0;
  counterToActive: number = 0;

  constructor() {}

  activeStatusUpdate = new EventEmitter<number>();
  inactiveStatusUpdate = new EventEmitter<number>();
}
