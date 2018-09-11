import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/class/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl = environment.apiUrl;
  authKey = 'be58e594-c02c-4a6b-9e31-b4942365be6d';
  constructor(private _http: HttpClient) { }
  
  verifyLogin(user:User){
    return this._http.post(this.apiUrl+'/login/admin',user).toPromise()
}

  testVerify(user:User){
    console.log('do promise')
    return this._http.post(this.apiUrl+'/login/admin',user).toPromise()
  }
}