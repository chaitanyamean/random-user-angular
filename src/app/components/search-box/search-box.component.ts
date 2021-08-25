import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {
  searchText: string = '';
  @Output() filterUsers: EventEmitter<any> = new EventEmitter();

  onChange(event: any) {
    this.filterUsers.emit(event);
  }

}
