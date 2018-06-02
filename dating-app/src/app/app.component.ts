import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireDatabase,FirebaseListObservable} from 'angularfire2/database';
import { AngularFireAuth} from 'angularfire2/auth';
import { NgIf } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { FirebaseService } from './services/firebase.services';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FirebaseService]
})

export class AppComponent implements OnInit {
title = 'Coders Dating';
candidates: Candidate[];
genders: Gender[];
appState: string;
activeKey: string;

constructor(private _firebaseService: FirebaseService) {
}

ngOnInit() {
  this.appState = 'default';

  this._firebaseService.getCandidate().subscribe(candidates => {
  this.candidates = candidates;
   });

}

                      // which parts of the HTML should be displayed depending on their state
changeState(state, key = null) {
  if(key) {
  this.activeKey = key;
   }
   this.appState = state;
 }


                      // new method
filterGender(gender) {
  this._firebaseService.getCandidate(gender).subscribe(candidates => {
	this.candidates = candidates;
   })
  }

}

export interface Candidate {
  $key: string;
  name: string; // ? means optional
  surname: string;
  age: number;
  inRelation: boolean;
  image: string;
  likes: number;
  gender: string;
}
export interface Gender {
  $key: string;
  name: string;
}