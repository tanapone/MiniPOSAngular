import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// PrimeNG
import { AccordionModule } from 'primeng/primeng';
import { PanelModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { RadioButtonModule } from 'primeng/primeng';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { InputTextModule } from 'primeng/inputtext';


import { UserManagementComponent } from './components/user-management/user-management.component';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from 'src/app/shared_service/login.service';
import { ProductManagementComponent } from './components/product-management/product-management.component';
import { ListProductControllerService } from 'src/app/shared_service/list-product-controller.service';
import { CategoryManagementComponent } from './components/category-management/category-management.component'

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
    CategoryManagementComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),

    AccordionModule,
    PanelModule,
    ButtonModule,
    RadioButtonModule,
    AngularFontAwesomeModule,
    InputTextModule
    
  ],
  providers: [
    LoginService,
    ListProductControllerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
