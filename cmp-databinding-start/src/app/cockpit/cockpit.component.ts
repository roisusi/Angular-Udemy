import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"],
})
export class CockpitComponent implements OnInit {
  // newServerName = "";
  newServerContent = "";

  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output() bluePrintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  constructor() {}

  ngOnInit(): void {}

  onAddServer(serverInput: HTMLInputElement) {
    console.log(serverInput.value);
    this.serverCreated.emit({
      serverName: serverInput.value,
      serverContent: this.newServerContent,
    });
  }
  onAddBluePrint(bluePrintInput: HTMLInputElement) {
    this.bluePrintCreated.emit({
      serverName: bluePrintInput.value,
      serverContent: this.newServerContent,
    });
  }
}
