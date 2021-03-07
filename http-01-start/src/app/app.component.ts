import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: Post) {
    //the .json below is a firebase requirement.
    this.http.post('https://my-test-project-9ddf9-default-rtdb.firebaseio.com/posts.json', postData).subscribe(
      (responseData) => {
        console.log(responseData);
      }
    );
  }

  onFetchPosts() {
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts()  {
    this.http
      .get('https://my-test-project-9ddf9-default-rtdb.firebaseio.com/posts.json')
      .pipe(
        map((responseData: {[key: string]: Post}) => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        })
      )
      .subscribe(
        posts => {
          console.log(posts);
        }
    );
  }
}
