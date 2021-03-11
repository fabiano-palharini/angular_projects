import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';
import { Post } from './post.model';
import { map, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PostsService {
  error = new Subject<string>();

  constructor(private http: HttpClient) {}

  createAndStorePost(postData: Post) {
    this.http
      .post<{name: string}>('https://my-test-project-9ddf9-default-rtdb.firebaseio.com/posts.json',
            postData,
            {
              observe:'response',
            })
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
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty').append('test', 'yes');

    return this.http
      .get<{[key: string]: Post}>(
        'https://my-test-project-9ddf9-default-rtdb.firebaseio.com/posts.json',
        {
          headers: new HttpHeaders({'Custom-Header': 'Hello'}),
          params: searchParams,
          responseType: 'json'
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
    return this.http
      .delete('https://my-test-project-9ddf9-default-rtdb.firebaseio.com/posts.json', {
        observe: 'events',
        responseType:  'text'//text, blob, json ... default is json
      })
      .pipe(
        tap(event => {
          console.log(event);
          if (event.type === HttpEventType.Sent) {
            console.log('Request sent over the wire');
          }
          if (event.type === HttpEventType.Response) {
            console.log('Response including the body was received');
            console.log(event.body);
          }
        })
      );
  }
}
