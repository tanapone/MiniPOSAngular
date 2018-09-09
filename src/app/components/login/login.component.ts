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
  apiUrl = environment.apiUrl;


  constructor(private loginService : LoginService) { }

  getMethod(){
    this.loginService.getMethod('/get');
  }

  ngOnInit() {
  }



}
