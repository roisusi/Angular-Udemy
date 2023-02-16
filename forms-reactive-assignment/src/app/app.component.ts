import {Component} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Project} from './project';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  projectStatusOptions = ['Stable', 'Critical', 'Finished'];
  projectStatus  = ['Test'];
  formProject: Project;
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5','Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5','Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5','Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  containerHeight = '200px';
  assForm = new FormGroup({
    'projectName': new FormControl(null, [Validators.required, this.forbiddenName.bind(this)]),
    'email': new FormControl(null, [Validators.required], this.forbiddenEmail.bind(this)),
    'projectStatus': new FormControl(this.projectStatusOptions[1]),
  });
  onSubmit() {
    this.formProject = {
      projectName: this.assForm.get(['projectName']).value,
      email: this.assForm.get(['email']).value,
      projectStatus: this.assForm.get(['projectStatus']).value,
    };
    console.log(this.formProject);
  }
  forbiddenName(control: FormControl): { [s: string]: boolean } {
    if (this.projectStatus.indexOf(control.value) !== -1) {
      return {
        'nameIsForbidden': true
      };
    }
    return null;
  }

  forbiddenEmail(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'roisusi@gmail.com') {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }

  update(event: Event) {
    console.log((<HTMLSelectElement>event.target).value);
  }
}
