import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggingService {
  constructor() {}

  loggingService(status) {
    console.log('A server status changed, new status: ' + status);
  }
}
