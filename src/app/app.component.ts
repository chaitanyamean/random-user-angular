import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

import { finalize } from "rxjs/operators";
import { pipe } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'prezent-app';
  userList: any[] = [];
  dataList: any[] = [];
  stringField: string = '';
  isLoading: boolean = false;
  constructor(private userService: UsersService) {
   }

  ngOnInit(): void {
    this.isLoading = true;
    this.userService.getUsers().pipe(finalize(() => this.isLoading = false)).subscribe((data:any) => {
      this.userList = data.results;
      this.dataList = data.results;
    })
  }

  getNewUser() {
    this.isLoading = true;
    this.userService.getNewUser().pipe(finalize(() => this.isLoading = false)).subscribe((data: any) => {
      if(data && data.results && data.results.length > 0) {
        let user = data.results[0]
        this.userList.push(user);
        this.dataList = this.userList;
      }
    }, (error) => {
      console.log(error);
    })
  }

  filterUsers(stringField: string): void {
    let users = this.dataList;
    this.stringField = stringField;
    if(stringField) {
      const filteredUsers = users.filter(this.filterByName.bind(this))
      if(filteredUsers && filteredUsers.length > 0) {
        this.userList = filteredUsers;
      }
    } else {
      this.userList = this.dataList;
      this.stringField = '';
    }
  }

  filterByName(item: any): Boolean {
      if(item.name.first.toLowerCase().includes(this.stringField.toLowerCase()) ||
      item.name.last.toLowerCase().includes(this.stringField.toLowerCase())) {
        return true
      }
      return false
  }
}


