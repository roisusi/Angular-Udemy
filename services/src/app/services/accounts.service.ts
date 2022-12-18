import { Injectable, EventEmitter } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active',
    },
    {
      name: 'Testaccount',
      status: 'inactive',
    },
    {
      name: 'Hidden Account',
      status: 'unknown',
    },
  ];

  constructor(private loggingServices: LoggingService) {}

  statusUpdate = new EventEmitter<string>();

  addAccount(name: string, status: string) {
    this.accounts.push({ name: name, status: status });
    this.loggingServices.loggingService(status);
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.loggingServices.loggingService(status);
  }
}
