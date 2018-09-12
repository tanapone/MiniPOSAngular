import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginControllerService } from 'src/app/shared_service/login-controller.service'
import { User } from 'src/app/class/user';
import { LocalStorageService } from 'ngx-webstorage';

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
    wrongAuth:''
  }

  constructor(private loginController : LoginControllerService,private localSt:LocalStorageService) { }

     verifyLogin(){
      console.log('username : '+this.username +' password : '+this.password)
      if(this.username=="" || this.username==null || this.password=="" || this.password==null){
        this.errorMsg.wrongAuth='กรุณากรอกชื่อบัญชี และ รหัสผ่าน'
      }else{
      this.user.setUsername(this.username);
      this.user.setPassword(this.password);
      this.loginController.verifyLogin(this.user).then((res:any)=>{
        let responseData = JSON.parse(res)
        if(responseData.message){
          if(responseData.message=='No permission.'){
            this.errorMsg.wrongAuth = 'คุณไม่มีสิทธิ์ใช้งานในส่วนนี้'
          }else if(responseData.message=='Wrong username or password.'){
            this.errorMsg.wrongAuth = 'ชื่อบัญชี หรือ รหัสผ่านไม่ถูกต้อง'
          }
        }
        console.log(responseData)
      })
      }
    }
    
    delete(){
      this.localSt.clear();
    }

  ngOnInit() {
  }

}
