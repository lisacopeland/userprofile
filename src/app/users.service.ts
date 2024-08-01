import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(prvate http: HttpClient) { }

  getUsers() {
    return this.http.get('./users.json')
  }
}
