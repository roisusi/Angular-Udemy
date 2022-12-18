import { Component, OnInit } from "@angular/core";
import { CounterServiceService } from "../services/counter-service.service";
import { UsersServiceService } from "../services/users-service.service";

@Component({
  selector: "app-inactive-users",
  templateUrl: "./inactive-users.component.html",
  styleUrls: ["./inactive-users.component.css"],
})
export class InactiveUsersComponent implements OnInit {
  users: string[];
  inActiveCounter = 0;

  constructor(
    private userServices: UsersServiceService,
    private counterServices: CounterServiceService
  ) {}

  ngOnInit(): void {
    this.users = this.userServices.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.userServices.setToActive(id);
    this.inActiveCounter += 1;
    this.counterServices.inactiveStatusUpdate.emit(this.inActiveCounter);
  }
}
