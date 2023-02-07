import { Component, ViewChild } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') form: NgForm; //special that don't need to pass the form
  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  onSubmit(){
    console.log(this.form)
  }
}
