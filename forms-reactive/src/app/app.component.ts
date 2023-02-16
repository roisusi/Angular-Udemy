import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup
  forbiddenUserNames = ["Chris", "Anna"];

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      "userData": new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenName.bind(this)]),
        "email": new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmail.bind(this)),
      }),
      "gender": new FormControl('male', Validators.required),
      "hobbies": new FormArray([])
    })
    //listens states tracks
    // this.signupForm.valueChanges.subscribe(value => {
    //   console.log(value)
    // });
    // this.signupForm.statusChanges.subscribe(state => {
    //   console.log(state);
    // });

    //setting and patching form
    // this.signupForm.setValue({
    //   'userData': {
    //     "username": "Chris",
    //     "email": "chris@gmail.com"
    //   },
    //   "gender" : "female",
    //   "hobbies": []
    // })
    this.signupForm.patchValue({"gender": 'female'})
  }

  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset({username: '', email: '', gender: 'male', hobbies: []});
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  get controls() {
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }

  //custom validator
  forbiddenName(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUserNames.indexOf(control.value) !== -1) {
      return {
        'nameIsForbidden': true
      };
    }
    return null;
  }

  //async validator
  forbiddenEmail(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'roisusi@gmail.com') {
          console.log(control.value === 'roisusi@gmail.com');
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500)
    })
    return promise;
  }
}
