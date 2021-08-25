import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

   API_URL = 'https://randomuser.me/api/'

  constructor(private http: HttpClient) { }

  getUsers() {
      return this.http.get(this.API_URL)
  }

  getNewUser() {
    return this.http.get(this.API_URL + '/?results=1')
  }
}
