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
<li>What is @Component and its attributes that can use external/internal URL or inline cose </li>
<li>how to generate Components by cli</li>
<li>Working with styles</li>
<li>How to work instead of < element > as attribute or class</li>
<li>String Interpolation {{X}}</li>
<li>Property Binding [property:"like disable on button"]= "bool instance (like AllowServer)"</li>
<li>Event Binding with (event HTML (onClick is click))="name of the method" </li>
<li>$event is the passed event object each time the using doing somthing and capturing the event data</li>
<li>Two way binding using [(ngModel)] with FormsModule from '@angular/forms';</li>
</ul>

<h3> Known ng engine </h3>
<ul>
<li>ngModel from FormsModule for two way binding</li>
</ul>
