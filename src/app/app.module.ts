import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatChipsModule } from '@angular/material/chips';
import { DialogComponent } from './dialog/dialog.component';
import { DialogAnimationsExampleDialog } from './dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './login/store/reducers';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    DialogAnimationsExampleDialog,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatChipsModule,
    MatIconModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatDialogModule,
    LoginModule,
    StoreModule.forRoot({count: counterReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
