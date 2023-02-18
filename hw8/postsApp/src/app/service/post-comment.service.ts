import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostComments } from '../model/post-comments.model';

@Injectable({
  providedIn: 'root'
})
export class PostCommentService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private http: HttpClient) { }

  getCommentsForPost(postId: number): Observable<PostComments[]> {
    const url = `${this.apiUrl}?postId=${postId}`;
    return this.http.get<PostComments[]>(url);
  }
}
