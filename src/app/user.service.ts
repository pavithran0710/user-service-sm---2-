import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API="http://localhost:8080";
  public registerUser(userData: any)
  {
    return this.http.post(`${this.API}/userservice` , userData);
  }

  public getUsers(){
    return this.http.get(`${this.API}/userservice`);
  }

  public deleteUser(userid: any){
    return this.http.delete(`${this.API}/userservice/${userid}`);
  }

  public updateUser(user: any){
    return this.http.put(`${this.API}/userservice/${user.id}`, user);
  }
  constructor(private http: HttpClient) { }
}
