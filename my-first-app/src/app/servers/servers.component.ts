import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]', //as attribute
  selector: '.app-servers', //as class
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  serverCreated = false;
  servers = ['Testserver', 'TestServer2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus =
      'Server was Created name is  ' + this.serverName;
  }

  // onUpdateServerName(event: any) {
  //   this.serverName = event.target.value;
  // }

  ngOnInit(): void {}
}
