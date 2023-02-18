import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post.model';
import { PostCommentService } from '../service/post-comment.service';
import { PostsService } from '../service/posts.service';
import { PostComments } from '../model/post-comments.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  comments: PostComments[] = [];
  selectedPostId?: number;

  constructor(
    private postService: PostsService,
    private postCommentService: PostCommentService
  ) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  private loadPosts() {
    this.postService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }

  onSelectPost(post: Post): void {
    this.selectedPostId = post.id;
    this.postCommentService.getCommentsForPost(post.id).subscribe((comments) => {
      this.comments = comments;
    });
  }

  goBack(): void {
    this.selectedPostId = undefined;
    this.comments = [];
  }

  getPostTitle(): string {
    const selectedPost = this.posts.find((post) => post.id === this.selectedPostId);
    return selectedPost ? selectedPost.title : 'Unknown post';
  }
}
