import {Component, ElementRef, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm; //special that don't need to pass the form
  @ViewChild('userData', {static: false}) usersData: ElementRef; //special that don't need to pass the form
  defaultQuestion = 'pet'
  answer = "";
  genders = ['male', 'female'];

  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  }
  submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: 'ppo@cc.com',
    //   }
    //   , userAnswers: {
    //     gender: 'female',
    //     questionAnswer: "Susi"
    //   },
    //   userSecrets: {secret: 'pet'}
    // });
    this.signupForm.form.patchValue(({
      userData: {
        username: suggestedName,
      }
    }))
  }

  onSubmit() {
    console.log(this.signupForm)
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.userSecrets.secret;
    this.user.gender = this.signupForm.value.userAnswers.gender;
    this.user.answer = this.signupForm.value.userAnswers.questionAnswer;
    this.submitted = true;
  }

  reset(){
    this.signupForm.reset();
  }
}
