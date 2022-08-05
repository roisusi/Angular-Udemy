# Angular-Udemy

Angular - The Complete Guide (2022 Edition) with Maximilian Schwarzmüller

<h3>Section 1 - Getting Started</h3>
<ul>
  <li>Downloading Node JS and Angular with: npm install -g @angular@cli</li>
  <li>Creating libary with: ng new my-first-app</li>
  <li>installing Bootstrap3 with: npm install --save bootstrap@3 </li>
  <li>configfure angular.json build->styles-> add new entry (for all angular project) node_modules/bootstrap/dist/css/bootstrap.min.css </li>
</ul>

<h3>Section 2 - The Basics</h3>
<ul>
<li>How Angular is Running: <br>
1. main.ts : bootstrapModule(AppModule) : {import { AppModule } from './app/app.module'} <br>
2. @NgModule : bootstrap: [AppComponent] : import { AppComponent } from './app.component' <br>
3. @Component({<br>
  selector: 'app-root',<br>
  templateUrl: './app.component.html',<br>
  styleUrls: ['./app.component.css']<br>
})<br>
4. index.html (that replace all the time)
</li>
</ul>
