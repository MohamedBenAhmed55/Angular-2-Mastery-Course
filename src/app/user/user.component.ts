import {Component, EventEmitter, Input, Output, output} from '@angular/core';
import {User} from "./user.model"

/*type User = {
  id:string,
    avatar:string,
    name:string
}*/

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) user!: User;
  @Input({required:true}) selected!: boolean
  @Output() select = new EventEmitter<string>();

  onSelectUser(){
    this.select.emit(this.user.id)
  }

  get imagePath(){
    return 'assets/users/' + this.user.avatar
  }
}
