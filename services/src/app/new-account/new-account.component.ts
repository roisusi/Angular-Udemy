import { Component } from '@angular/core';
import { AccountsService } from '../services/accounts.service';
// import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent {
  constructor(
    // private loggingService: LoggingService,
    private accountsServices: AccountsService
  ) {
    this.accountsServices.statusUpdate.subscribe((status: string) =>
      alert(`New Status ${status}`)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsServices.addAccount(accountName, accountStatus);
    // this.loggingService.loggingService(accountName);
  }
}
