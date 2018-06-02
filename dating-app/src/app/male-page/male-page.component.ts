import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { NgIf } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { FirebaseService } from 'app/Services/firebase.services';

@Component({
  selector: 'male-page',
  templateUrl: './male-page.component.html',
  styleUrls: ['./male-page.component.css'],
  providers: [FirebaseService]
})
export class MalePageComponent implements OnInit {
candidates: Candidate[];
genders: Gender[];
appState: string;
activeKey: string;
  constructor(private _firebaseService: FirebaseService) { }

   ngOnInit() {
  this.appState = 'default';

  this._firebaseService.getCandidate().subscribe(candidates => {
  this.candidates = candidates;
  });

}

changeState(state, key = null) {
  if(key) {
  this.activeKey = key;
   }
   this.appState = state;
 }

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