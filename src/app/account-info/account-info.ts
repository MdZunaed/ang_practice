import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-account-info',
  imports: [],
  templateUrl: './account-info.html',
  styleUrl: './account-info.scss',
})
export class AccountInfo {
  @Input() userData:any={};
  @Output() passUsers=new EventEmitter(); 


  users=["user1","user2","user3"];

  sendusers(){
    this.passUsers.emit(this.users);
  }
}
