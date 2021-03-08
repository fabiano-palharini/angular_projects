import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { PostsService } from './posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  isFetching: boolean = false;
  error = null;
  private errorSubscription: Subscription;

  constructor(private http: HttpClient, private postsService: PostsService) {}

  ngOnInit() {
    this.errorSubscription = this.postsService.error.subscribe(
      (errorMessage) => {
        this.error = errorMessage;
      }
    );

    this.fetchPosts();
  }

  ngOnDestroy() {
    this.errorSubscription.unsubscribe();
  }

  onCreatePost(postData: Post) {
    //the .json below is a firebase requirement.
    this.postsService.createAndStorePost(postData);
  }

  onFetchPosts() {
    this.fetchPosts();
  }

  onClearPosts() {
    this.postsService.deletePosts().subscribe(
      () => {
        this.loadedPosts = [];
        this.fetchPosts();
      }
    );
  }

  onHandleError() {
    this.error = null;
  }

  private fetchPosts()  {
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe(
      (posts: Post[]) => {
        this.loadedPosts = posts;
        this.isFetching = false;
      },
      (error) => {
        this.isFetching = false;
        this.error = error.message;
      }
    );
  }
}
