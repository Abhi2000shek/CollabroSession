import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Session, Member } from './Model/Session';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CollabserviceService {
  SessionCollection: AngularFirestoreCollection<Session>;
  MemberCollection: AngularFirestoreCollection<Member>;

  data: Observable<Session[]>;
  memberdata: Observable<Member[]>;

  constructor(private afs: AngularFirestore) {
    this.SessionCollection = this.afs.collection('SessionCollection');

    this.MemberCollection = this.afs.collection('MemberCollection');

    this.data = this.SessionCollection.valueChanges();
    this.memberdata = this.MemberCollection.valueChanges();

  }
  GetData() {
    return this.data;
  }
  GetMember() {
    return this.memberdata;
  }
  AddData(pd) {
    this.MemberCollection.add(pd);
  }
}
