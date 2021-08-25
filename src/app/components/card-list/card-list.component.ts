import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent {

@Input() userList: any
@Output() getUser: EventEmitter<any> = new EventEmitter<any>()

  onAddUserClick(): void {
    this.getUser.emit()
  }

}
