import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {BaseResponse} from "../model/BaseResponse";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(user: any): Observable<any> {
    let payload = {
      username: user.value.username,
      password: user.value.password
    }
    return this.http.post('http://localhost:8080/auth/login' ,payload);
  }

  getAll(): Observable<any> {
    return this.http.get('http://localhost:8080/shoes');
  }
}
