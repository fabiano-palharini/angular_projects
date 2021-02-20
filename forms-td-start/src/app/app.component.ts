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
  // user: User = new User();

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  onSubmit(form: HTMLFormElement) {
    console.log(this.signUpForm);
  }
}
