import { Component } from "@angular/core";
import { CounterServiceService } from "./services/counter-service.service";
import { UsersServiceService } from "./services/users-service.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  activeUsers = [];
  inactiveUsers = [];
  activeToInactive: number = 0;
  inactiveToActive: number = 0;

  constructor(
    private userService: UsersServiceService,
    private counterServices: CounterServiceService
  ) {}

  ngOnInit(): void {
    this.activeUsers = this.userService.activeUsers;
    this.inactiveUsers = this.userService.inactiveUsers;

    this.counterServices.activeStatusUpdate.subscribe((value) => {
      this.activeToInactive = value;
    });

    this.counterServices.inactiveStatusUpdate.subscribe((value) => {
      this.inactiveToActive = value;
    });
  }
}
