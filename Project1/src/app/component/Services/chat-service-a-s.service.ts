import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"
import { AuthChatASService } from '../Services/auth-chat-a-s.service';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import {ChatMessage} from '../Model/Chat-message.model';
import { DataPassService } from '../Services/data-pass.service';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ChatServiceASService {
  user: firebase.User;
  chatMessage: ChatMessage;
  chatMessages: AngularFireList<ChatMessage>;
  //chatMessages: AngularFireList<string>;
  
  receiverName :string;
  senderName: string ;
  message : string;
  userR:string='';
 
  private userN =new BehaviorSubject<string>(this.userR);
  cast =this.userN.asObservable();
   

  constructor(private data : DataPassService, private db: AngularFireDatabase) {
      
      this.data.currentMessage.subscribe(message => this.message = message);
      this.senderName = this.data.getMessage();
      this.cast.subscribe(userN=> this.userR=userN);
      
     }
     sendMessage(msg: string) {
      const timestamp = this.getTimeStamp();
      
    
      this.chatMessages = this.getMessages();
      this.chatMessages.push({
        message: msg,
        timeSent: new Date,
        userName: this.senderName,
        receiver:this.userR });
    }
    getMessages(): AngularFireList<ChatMessage> {
      
      return this.db.list('messages',ref => ref.orderByKey().limitToLast(25));
    }
     getTimeStamp() {
      const now = new Date();
      const date = now.getUTCFullYear() + '/' +
                   (now.getUTCMonth() + 1) + '/' +
                   now.getUTCDate();
      const time = now.getUTCHours() + ':' +
                   now.getUTCMinutes() + ':' +
                   now.getUTCSeconds();
  
      return (date + ' ' + time);
    }
    

    editUser (newUser){
     
      this.userN.next(newUser);
      
      
    }

    
}
