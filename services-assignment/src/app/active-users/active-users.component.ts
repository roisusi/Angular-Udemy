import { Component, OnInit } from "@angular/core";
import { CounterServiceService } from "../services/counter-service.service";
import { UsersServiceService } from "../services/users-service.service";

@Component({
  selector: "app-active-users",
  templateUrl: "./active-users.component.html",
  styleUrls: ["./active-users.component.css"],
})
export class ActiveUsersComponent implements OnInit {
  users: string[];
  activeUsersCounter = 0;

  constructor(
    private userServices: UsersServiceService,
    private counterServices: CounterServiceService
  ) {}

  ngOnInit() {
    this.users = this.userServices.activeUsers;
  }

  onSetToInactive(id: number) {
    this.userServices.setToInactive(id);
    this.activeUsersCounter += 1;
    this.counterServices.activeStatusUpdate.emit(this.activeUsersCounter);
  }
}
