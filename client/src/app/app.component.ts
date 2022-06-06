import { HttpClient } from '@angular/common/http';
import { DefinitionKind } from '@angular/compiler/src/constant_pool';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DatingApp';
  users: any;

  constructor(private Http: HttpClient) {}

  ngOnInit() {
    this.getUsers();
  }
  getUsers() {
    this.Http.get('https://localhost:5001/api/users').subscribe(response => {
      this.users= response;
    }, error => {
      console.log(error);
    })
  }
  
}
