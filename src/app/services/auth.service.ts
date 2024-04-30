import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { switchMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface User {
  uid: string;
  email: string;
  
}
 
export interface Message {
  createdAt: firebase.firestore.FieldValue;
  id: string;
  from: string;
  msg: string;
  name: string;
  myMsg: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: User = null;
constructor(private AFauth : AngularFireAuth, private router : Router, private db : AngularFirestore) { 
  this.AFauth.onAuthStateChanged((user) => {
    this.currentUser = user; 
       
  });
  
}

login(email:string, password:string){

  return new Promise((resolve, rejected) => {
    this.AFauth.signInWithEmailAndPassword(email, password).then(user => {
      resolve(user)
    }).catch(err => rejected(err));
  });
}

logout(){
  this.AFauth.signOut().then(() => {
    this.router.navigate(['/login']);
  })
}

register(email : string, password : string, name : string){
  
  return new Promise ((resolve, reject) => {
    this.AFauth.createUserWithEmailAndPassword(email, password).then (res =>{
      const uid = res.user.uid;
      this.db.collection('users').doc(uid).set({
        name : name,
        email :email,
        uid : uid
      })
      resolve(res)
    }).catch( err => reject(err))
  })
}

resetPassword(email:string){
  return this.AFauth.sendPasswordResetEmail(email);
}

addChatMessage(msg) {
  return this.db.collection('messages').add({
    msg: msg,
    from: this.currentUser.uid,
    name:this.currentUser.email,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  });
}

getChatMessages() {
  let users = [];
  return this.getUsers().pipe(
    switchMap(res => {
      users = res;
      return this.db.collection('messages', ref => ref.orderBy('createdAt')).valueChanges({ idField: 'id' }) as Observable<Message[]>;
    }),
    map(messages => {
      // Get the real name for each user
      for (let m of messages) {          
        m.name = this.getUserForMsg(m.from, users);
        m.myMsg = this.currentUser.uid === m.from;
      }        
      return messages
    })
  )
}

private getUsers() {
  return this.db.collection('users').valueChanges({ idField: 'uid' }) as Observable<User[]>;
}

private getUserForMsg(msgFromId, users: User[]): string {    
  for (let usr of users) {
    if (usr.uid == msgFromId) {
      return usr.email;
    }
  }
  return 'Nombre(No funciona)';
}

}
