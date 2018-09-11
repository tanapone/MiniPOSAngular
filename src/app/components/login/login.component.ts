import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginService } from 'src/app/shared_service/login.service'
import { User } from 'src/app/class/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //define variables
  apiUrl = environment.apiUrl;
  user = new User();
  username:string;
  password:string;

  errorMsg = {
    usernameRequired:false,
    passwordRequied:false,
    wrongAuth:false
  }

  constructor(private loginService : LoginService) { }

    async verifyLogin(){

      if(this.username==null){
        this.errorMsg.usernameRequired = true;
      }else if(this.password==null){
        this.errorMsg.passwordRequied = true;
      }else{
      this.user.setUsername(this.username);
      this.user.setPassword(this.password);
      this.errorMsg.usernameRequired = false;
      this.errorMsg.passwordRequied = false;
      await this.loginService.verifyLogin(this.user).then((data:any)=>{
        let dataResult = data;
        this.user.setId(dataResult.id)
        this.user.setUsername(dataResult.username)
        this.user.setPassword(dataResult.password)
        this.user.setUserType(dataResult.userType)
        this.user.setFirstName(dataResult.firstName)
        this.user.setLastName(dataResult.lastName)
        this.user.setEmail(dataResult.email)
        this.user.setPhoneNumber(dataResult.phoneNumber)
        this.user.setAddress(dataResult.address)
        this.user.setAuthKey(dataResult.authKey)
        console.log('setter')
      }),error=>{
        console.log('error')
      }
      console.log(this.user)
      console.log('get user')
      if(this.user.getUsername() === undefined){
        this.errorMsg.wrongAuth = true
      }else{
        alert('username : '+this.user.getUsername())
        this.errorMsg.wrongAuth = false
      }
      
    }
    }

  ngOnInit() {
  }

}
