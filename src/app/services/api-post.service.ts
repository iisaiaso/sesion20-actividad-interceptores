import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiPostService implements OnInit {
  urlApi = 'https://jsonplaceholder.typicode.com/posts'
  constructor(private http: HttpClient) { }
  ngOnInit(): void {

  }

  getPosts() {
    return this.http.get<any>(this.urlApi)
  }

}
