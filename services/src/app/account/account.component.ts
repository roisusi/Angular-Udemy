import { Component, Input } from '@angular/core';
import { AccountsService } from '../services/accounts.service';
// import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent {
  @Input() account: { name: string; status: string };
  @Input() id: number;

  constructor(
    // private loggingService: LoggingService,
    private accountsServices: AccountsService
  ) {}

  onSetTo(status: string) {
    this.accountsServices.updateStatus(this.id, status);
    // this.loggingService.loggingService(status);
    this.accountsServices.statusUpdate.emit(status); //not a good way of observable
  }
}
