import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') myForm: NgForm;
  defaultSubscription: string = 'advanced';
  email: string;
  subscription: string;
  password: string;

  onSubmit() {
    this.email = this.myForm.value.email;
    this.subscription = this.myForm.value.subscription;
    this.password = this.myForm.value.password;
  }

}
