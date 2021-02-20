import { Component } from '@angular/core';

class User {
  username: string;
  email: string;
  secret: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User = new User();

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  onSubmit(form: HTMLFormElement) {
    console.log(form);
  }
}
