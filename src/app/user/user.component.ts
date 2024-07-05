 import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardComponent } from '../shared/card/card.component';

type User = {
  id: string;
  avatar: string;
  name: string;
}


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required : true}) user!: User;
  @Input({required : true}) selected!: boolean;
  @Output() selectedUser = new EventEmitter<string>();


  get imagePath() {
    return "assets/" +  this.user.avatar;
  }

  onSelectUser() {
    this.selectedUser.emit(this.user.id);
  }
}
