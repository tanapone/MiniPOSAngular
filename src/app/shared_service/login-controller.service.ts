import { Injectable } from '@angular/core';
import { WsTaskService } from './ws-task.service';
import { User } from 'src/app/class/user';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class LoginControllerService {

  constructor(private wsTask:WsTaskService,private localSt:LocalStorageService) { }
  
  public  verifyLogin(user:User):Promise<string|void>{
    let newUser = new User();
    return this.wsTask.doPost("/login/admin",user).then((data:any)=>{
      let responseData = data
      if( responseData.message ){
        console.log(responseData.message)
        if(responseData.message){
          return JSON.stringify(responseData)
        }
        }else{
        newUser.setAuthKey(data.authKey)
      }
       return JSON.stringify(newUser)
      // return newUser
    },error=>{
      console.log(error)
    }
  )}

}
