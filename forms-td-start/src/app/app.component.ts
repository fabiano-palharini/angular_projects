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
  // user: User = new User();

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
    console.log(this.signUpForm);
  }

  // onSubmit(form: HTMLFormElement) {
  //   console.log(this.signUpForm);
  // }
}
