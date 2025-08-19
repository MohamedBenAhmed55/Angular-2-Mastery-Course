import {Component, EventEmitter, Input, Output, output} from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) user!: {
    id:string,
    avatar:string,
    name:string
  }

  @Output() select = new EventEmitter<string>();

  onSelectUser(){
    this.select.emit(this.user.id)
  }

  get imagePath(){
    return 'assets/users/' + this.user.avatar
  }
}
