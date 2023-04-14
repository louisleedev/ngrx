import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/reducers';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"login", component:LoginComponent}
    ]),
    StoreModule.forFeature('login',{counter:counterReducer})
  ],
  exports:[
    LoginComponent
  ]
})
export class LoginModule { }
