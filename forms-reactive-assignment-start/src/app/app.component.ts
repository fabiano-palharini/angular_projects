import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;
  forbiddenNames = ['Test'];

  onSubmit() {
    console.log(this.projectForm);
  }

  ngOnInit() {
    this.projectForm = new FormGroup({
      'projectData': new FormGroup({
        'name': new FormControl(null, [Validators.required /*, this.forbiddenProjectNames.bind(this)*/], this.forbiddenProjectNames),
        'email': new FormControl(null, Validators.email),
        'status': new FormControl('critical', Validators.required),
      })
    })
  }

  // forbiddenProjectNames(control: FormControl): {[s: string]: boolean} {
  //   if (this.forbiddenNames.indexOf(control.value) !== -1) {
  //     return {'nameIsForbidden': true}
  //   }
  //   return null;
  // }

  forbiddenProjectNames(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test') {
          resolve({'nameIsForbidden': true})
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
