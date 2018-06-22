import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users') //gets the API JSON from site
  }
  getUser(userId) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/' +userId) //gets the API JSON from site
  }
  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts') //gets the API JSON from site
  }
}

