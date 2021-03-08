import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class PostsService {
  constructor(private http: HttpClient) {}

  createAndStorePost(postData: Post) {
    this.http
    .post<{name: string}>('https://my-test-project-9ddf9-default-rtdb.firebaseio.com/posts.json', postData)
    .subscribe(
      (responseData) => {
        console.log(responseData);
      }
    );
  }

  fetchPosts() {
    return this.http
      .get<{[key: string]: Post}>('https://my-test-project-9ddf9-default-rtdb.firebaseio.com/posts.json')
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
}
