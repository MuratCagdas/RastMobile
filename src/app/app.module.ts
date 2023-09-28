import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { DxDataGridModule } from 'devextreme-angular';
import { DxTextBoxModule } from 'devextreme-angular';
import { DxButtonModule } from 'devextreme-angular';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ErrorInterceptor } from './config/interceptor/error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DxDataGridModule,
    DxTextBoxModule,
    DxButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    

  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:ErrorInterceptor,multi:true}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }