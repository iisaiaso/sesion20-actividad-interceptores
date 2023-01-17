import { Component, OnInit } from '@angular/core';
import { ApiPostService } from 'src/app/services/api-post.service';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.css']
})
export class ShowPostComponent implements OnInit {

  showPosts: any = []
  constructor(private posts: ApiPostService) { }
  ngOnInit(): void {
    this.getShowPosts()
  }
  getShowPosts() {
    this.posts.getPosts().subscribe(post => this.showPosts = post)
  }
}
