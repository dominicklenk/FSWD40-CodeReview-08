import {Injectable} from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map';

@Injectable()
export class FirebaseService{
  candidates: FirebaseListObservable<Candidate[]>;
  genders: FirebaseListObservable<Gender[]>;
  
  constructor(private af: AngularFireDatabase) {

  }

  getCandidate(gender: string = null) {
    if (gender != null) {
      this.candidates = this.af.list('/candidates', {
        query: {
          orderByChild: 'gender',
          equalTo: gender
        }
      }) as FirebaseListObservable<Candidate[]>;
    } else {
        this.candidates = this.af.list('/candidates') as FirebaseListObservable<Candidate[]>;
    }
      return this.candidates;
  }


  getGender() {
      this.genders = this.af.list('/genders') as FirebaseListObservable<Gender[]>;
      return this.genders;
  }

  addCandidate(newCandidate) {
      return this.candidates.push(newCandidate);
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


// services interacts with Firebase, so we can manipulate the Data