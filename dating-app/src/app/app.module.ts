import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { FemalePageComponent } from './female-page/female-page.component';
import { MalePageComponent } from './male-page/male-page.component';
import { HeroComponent } from './hero/hero.component';

const appRoutes : Routes = [
{
  path: '', component: HomePageComponent
},
{
  path: 'female', component: FemalePageComponent
},
{
  path: 'male', component: MalePageComponent
},
];

export const firebaseConfig ={
	  apiKey: "AIzaSyAFzfhSKEAqkAdqIO-0qv-ZtmCsqTmUKNo",
    authDomain: "dating-92647.firebaseapp.com",
    databaseURL: "https://dating-92647.firebaseio.com",
    projectId: "dating-92647",
    storageBucket: "dating-92647.appspot.com",
    messagingSenderId: "573009123888"
 // You will have this information from firebase .
};

@NgModule({
 declarations: [
   AppComponent,
   NavbarComponent,
   HomePageComponent,
   FemalePageComponent,
   MalePageComponent,
   HeroComponent
 ],

 imports: [
   BrowserModule,
   AngularFireModule.initializeApp(firebaseConfig),
   AngularFireAuthModule,
   AngularFireDatabaseModule,
   RouterModule.forRoot(appRoutes)
  ],
 providers: [],
 bootstrap: [AppComponent]
})
export class AppModule { }
