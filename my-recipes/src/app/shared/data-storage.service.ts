import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'}) //instead of doing this here we can also add this to the providers array in the app.module.ts
export class DataStorageService {
  dbUrl = 'https://ng-course-recipe-book-3d4f2-default-rtdb.firebaseio.com/';

  constructor(private http: HttpClient){ }
}
