import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/class/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl = environment.apiUrl;
  constructor() { }

  getMethod(path:string){
    console.log(this.apiUrl+path)
  }

}
