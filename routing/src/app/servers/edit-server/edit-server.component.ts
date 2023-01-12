import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CanComponentDeactivate } from './canDeactivate-guard.service';
import { ServersService } from '../servers.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: { id: number; name: string; status: string };
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changeSaved = false;

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    //dynamicly get the query and fragments
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    this.route.queryParams.subscribe(
      (params: Params) =>
        (this.allowEdit = params['allowEdit'] === '1' ? true : false)
    );
    this.route.fragment.subscribe();
    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });
    this.changeSaved = true;
    this.router, navigator['../'], { relativeTo: this.route };
  }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    if (!this.allowEdit) {
      return true;
    }
    if (
      (this.serverName !== this.server.name ||
        this.serverStatus !== this.server.status) &&
      !this.changeSaved
    ) {
      return confirm('Do you really want to leave an discard the changes ?');
    } else {
      return true;
    }
  }
}
