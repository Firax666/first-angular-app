import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-angular-app';
  users = DUMMY_USERS;
  selectedUserId = "u0";

  get selectedUser() {
    return DUMMY_USERS.find((user) => user.id === this.selectedUserId)
  }


  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
