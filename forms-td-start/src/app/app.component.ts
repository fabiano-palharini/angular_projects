import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

// class User {
//   username: string;
//   email: string;
//   secret: string;
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signUpForm: NgForm;
  defaultQuestion: string = 'pet';
  answer: string;
  genders = ['male', 'female'];
  submitted = false;
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender:''
  };

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signUpForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: 'suggested@email.com'
    //   },
    //   secret: 'teacher',
    //   questionAnswer: 'new suggestion',
    //   gender: 'female'
    // });
    this.signUpForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  onSubmit() {
    this.submitted = true;

    this.user.username = this.signUpForm.value.userData.username;
    this.user.email = this.signUpForm.value.userData.email;
    this.user.secretQuestion = this.signUpForm.value.secret;
    this.user.answer = this.signUpForm.value.questionAnswer;
    this.user.gender = this.signUpForm.value.gender;

    this.signUpForm.reset();
  }

  // onSubmit(form: HTMLFormElement) {
  //   console.log(this.signUpForm);
  // }
}
