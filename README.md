# Angular-Udemy

Angular - The Complete Guide (2022 Edition) by Maximilian Schwarzmüller

<h3>Section 1 - Getting Started</h3>
<ul>
  <li>Downloading Node JS and Angular with: npm install -g @angular@cli</li>
  <li>Creating libary with: ng new my-first-app</li>
  <li>installing Bootstrap3 with: npm install --save bootstrap@3 </li>
  <li>configfure angular.json build->styles-> add new entry (for all angular project) node_modules/bootstrap/dist/css/bootstrap.min.css </li>
  <li> ng g c to create Component and "--skip-tests"  without testing .spec file</li>
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
  <li>What is @Component and its attributes that can use external/internal URL or inline code </li>
  <li>how to generate Components by cli</li>
  <li>Working with styles</li>
  <li>How to work instead of < element > as attribute or class</li>
  <li>String Interpolation {{X}}</li>
  <li>Property Binding [property:"like disable on button"]= "bool instance (like AllowServer)"</li>
  <li>Event Binding with (event HTML (onClick is click))="name of the method" </li>
  <li>$event is the passed event object each time the using doing somthing and capturing the event data</li>
  <li>Two way binding using [(ngModel)] with FormsModule from '@angular/forms'</li>
  <li>Directives - like @Components</li>
  <li>Structure Directives - *ngIf (* means we change the structure of the DOM) add or remove elements</li>
  <li>Introdution to Local Reference # with < ng-template ></li>
  <li>Attribute Directives - only chage the element placed but not add or remove elements</li>
</ul>

<h3>Section 3 - Course Project The Basics</h3>
<ul>
  <li>Building the project with ng gc *name* --skip-tests to skip spec file</li>
  <li>Create new Class model typescript file</li>
  <li>@Input() - binding element - expose the element or variable to the "world", mean outside of the class so the parent class can recognize it Parnet->Child</il>
  <li>alias - @Input("aliasName") and the name of the element is now "aliasName" and the old element wont work</li>
  <li>@Output() : </li>
  <ul>
    <li>notify the Parent that his child changed something Child->Parent</li>
    <li>Stage 1 - Parent : create functions like onServerAdded(serverData:{object})</li>
    <li>Stage 2 - Parent : create <b>event</b> name in () like "(serverCreated(this is the event name))="onServerAdded($event)" </li>
    <li>Stage 3 - Child : @Output() the <b>event</b> name as Parent and new EventEmitter same as the Parent function arguments like: @Output() serverCreated new EventEmitter< types > from @angular/core</li>
    <li>Stage 4 - Child : create function (onAddServer exp) that the Parent will listen and emit it with the name you gave for the @Output() this.serverCreaterd.emit({this.newServerName...})</li>
  </ul>
  <li>alias - @Output("aliasName") same as input </li>
  <li>ViewEncapsulation - encapsulation of the css <a href="https://stackoverflow.com/questions/35651993/diff-between-viewencapsulation-native-viewencapsulation-none-and-viewencapsulat"> good explanation </a></li>
  <li>Local Reference - and html adding tag like id #< name > and it will be the reference of THAT HTML tag and knew only in the HTML we can put something in TS code as a passing arguments and getting all the html element and all its properties</li>
  <li>@ViewChild('') - Another replacment for twoway binding through passing local reference #serverContentInput with @ViewChild('')</li>
  <li>< ngcontent > </ ngcontent> this is marking that Angular wont reject contents between < app-X> </ app-X></li>
    <ul>LifeCycle : 
      <li>ngOnChange = called a bound input property changes</li>
      <li>ngOnInit = called once the component is initialized</li>
      <li>ngDoCheck = called during every change detection run</li>
      <li>ngAfterContentInit = called after < ng-content> has been projected into view</li>
      <li>ngAfterContentChecked = called everytime the projected content ha been cheecked</li>
      <li>ngAfterViewInit = called after the componet's view (and child views) has been initialized</li>
      <li>ngAfterViewCheched = called everytime the view (and child views) has been checked</li>
      <li>ngOnDestory = called once the component is about to be destroy</li>
    </ul>
    <li>@ContentChild('') - access the content of the elemets that < ngcontent > produces, @ViewChild('') can't access it</li>
</ul>

<h3>Section 4-6 is Handson practices</h3>

<h3>Section 7 - Derectives Deep Dive</h3>
<ul>
  <li>Create a Directive with ElementRef and Renderer2</li>
  <li>@HostListener for styleing</li>
  <li>@HostBinding for styleing</li>
  <li>Building new Directive </li>
  <li>ngSwitch</li>
</ul>

<h3>Section 9 - Using Services and Dependency Injection</h3>
<ul>
  <li>Create a Servives using ng g s</li>
  <li>Create a Dependency Injection using private of that service</li>
  <li><ol>Heirarchy of injection</li>
    <li>AppModule - all the application knows the Injection even with Services</li>
    <li>AppComponets - all the Components (from App and down) knows the Injection but without Services</li>
    <li>SingleComponent - only him and his children know the Injection, but his parent component can override the Injection</li>
  </ol>
  <li>@Injectable() - to inject into that services from another services</li>
  <li>@Injectable({providedIn: 'root'}) - is the same as insert it on providers[] in the appModule</li>
  <li>@Injectable({providedIn: 'root'}) - makes the services able to inject and makes it high in the hierarchy</li>
  <li>Service to Service Injectable</li>
</ul>

<h3>Section 10 - Routing</h3>
<ul>
  <li>Using Routes and RouterModule from @angular/router</li>
  <li>Using RouterModule.forRoot(appRoutes) to load routes like : const appRoutes: Routes = [
  { path: '', component: HomeComponent }]
  <li>Using ActivatedRoute parameters like : { path: 'users/:id/:name', component: UserComponent } and id: this.route.snapshot.params['id'] </li>
  <li>Relative paths vs absolute paths</li>
  <li>Using navigate router.navigate(['/servers'])</li>
  <li>Render page using subscribe event when the url changes</li>
  <li>Dynamic listem to query and fragments using ActivatedRoute<li>
  <li>Nested Routes with childrens routes</li>
  <li>Using relativeTo</li>
  <li>Working with queryParamsHandling</li>
  <li>Using redirectTo instad of component</li>
</ul>

<h3> Known ng engine </h3>
<ul>
  <li>ngModel from FormsModule for two way binding</li>
</ul>

<h3> Known ng Structure Directive </h3>
<ul>
  <li>*ngIf - for conditionals elements</li>
  <li>*ngFor - for loops of elements</li>
  <li>*ngSwitchCase - for cases goes with [ngSwtich]</li>
  <li>*ngSwitchDefault - for default cases goes with [ngSwitch]</li>
</ul>

<h3> Known ng Attribute Directive - using it with Property Binding</h3>
<ul>
  <li>ngStyle - come with data binding [ngStyle]</li>
  <li>ngClass - come with data binding [ngStyle] to add a class to the element</li>
  <li>ngSwitch - comes with data binding [ngSwitch] to have a switch case</li>
</ul>
