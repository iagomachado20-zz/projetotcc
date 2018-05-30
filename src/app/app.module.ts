import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './providers/auth-service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AppRoutingModule } from './/app-routing.module';


export const firebaseConfig = {
  apiKey: "AIzaSyBnMtJuV2QTSxJGK0noO23pVNJ3k7EN9VM",
  authDomain: "localhost",
  databaseURL: "https://projeto-modelo-ce746.firebaseapp.com",
  storageBucket: "<your-storage-bucket>",
  messagingSenderId: "927764646847"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [AuthService, AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
