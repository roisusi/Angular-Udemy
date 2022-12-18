import { Component } from '@angular/core';
import { AccountsService } from './services/accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  accounts: { name: string; status: string }[] = [];

  constructor(private accounsServices: AccountsService) {}

  ngOnInit() {
    this.accounts = this.accounsServices.accounts;
  }
}
