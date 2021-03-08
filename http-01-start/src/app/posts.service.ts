import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from './post.model';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PostsService {
  error = new Subject<string>();

  constructor(private http: HttpClient) {}

  createAndStorePost(postData: Post) {
    this.http
      .post<{name: string}>('https://my-test-project-9ddf9-default-rtdb.firebaseio.com/posts.json', postData)
      .subscribe(
        (responseData) => {
          console.log(responseData);
        },
        (error) => {
          this.error.next(error.message);
        }
      );
  }

  fetchPosts() {
    return this.http
      .get<{[key: string]: Post}>(
        'https://my-test-project-9ddf9-default-rtdb.firebaseio.com/posts.json',
        {
          headers: new HttpHeaders({'Custom-Header': 'Hello'})
        }
      )
      .pipe(
        map((responseData) => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        })
      );
  }

  deletePosts(){
    return this.http.delete('https://my-test-project-9ddf9-default-rtdb.firebaseio.com/posts.json');
  }
}
