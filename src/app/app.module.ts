import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {Ng2Webstorage} from 'ngx-webstorage';
import { NgxsModule } from '@ngxs/store';
// PrimeNG
import { AccordionModule } from 'primeng/primeng';
import { PanelModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { RadioButtonModule } from 'primeng/primeng';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { InputTextModule } from 'primeng/inputtext';
// service
import { WsTaskService } from './shared_service/ws-task.service'
import { ListProductControllerService } from 'src/app/shared_service/list-product-controller.service';
import { LoginControllerService } from './shared_service/login-controller.service'
//
import { UserManagementComponent } from './components/user-management/user-management.component';
import { LoginComponent } from './components/login/login.component';
import { ProductManagementComponent } from './components/product-management/product-management.component';
import { CategoryManagementComponent } from './components/category-management/category-management.component';
import { NavbarComponent } from './components/navbar/navbar.component'
const appRoutes:Routes=[
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'users',
    component:UserManagementComponent
  },
  {
    path:'products',
    component:ProductManagementComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    UserManagementComponent,
    LoginComponent,
    ProductManagementComponent,
    CategoryManagementComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    Ng2Webstorage,
    AccordionModule,
    PanelModule,
    ButtonModule,
    RadioButtonModule,
    AngularFontAwesomeModule,
    InputTextModule,
    NgxsModule
    
  ],
  providers: [
    WsTaskService,
    ListProductControllerService,
    LoginControllerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
