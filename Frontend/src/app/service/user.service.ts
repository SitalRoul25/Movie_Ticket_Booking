import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

// const baseUrl="http://localhost:3500/api/users";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl="http://localhost:3500/api/users";

  constructor(private http:HttpClient, private router:Router) { }

  // FIXME: API connection
  register(user:any) {
    return this.http.post<any>(`${this.baseUrl}/reg`,user);
    }

  login(user:any) {
    return this.http.post<any>(`${this.baseUrl}/login`,user);
  }

  // TODO: Authorization
  loggedIn() {
    return !localStorage.getItem("access_token");
  }

  logout() {
    localStorage.removeItem("access_token");
    this.router.navigate(["/Movies"]);
  }
}
