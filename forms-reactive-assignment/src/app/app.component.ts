import { Component } from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assForm = new FormGroup({
    "projectName": new FormControl(),
    "email": new FormControl(),
    "projectStatuus": new FormControl(),
    });
}
