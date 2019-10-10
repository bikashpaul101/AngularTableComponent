import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ReuseableTableComponent';
  array: any = [];
  columns: any = [];
  ngOnInit() {
    this.columns = [
      { key: 'name', aliase: 'Name' },
      { key: 'age', aliase: 'Age' },
      { key: 'contact_number', aliase: 'Contact Number' },
      { key: 'email', aliase: 'Email' },
      { key: 'status', aliase: 'Status' }
    ];
    this.array = [
      {
        name: "User1",
        age: 23,
        contact_number: 1213319131,
        email: 'test1@mail.com',
        status:false
      },
      {
        name: "User2",
        age: 22,
        contact_number: 3453453454,
        email: 'test2@mail.com'
      },
      {
        name: "User3",
        age: 24,
        contact_number: 4562625654,
        email: 'test3@mail.com',
        status:true
      }
    ]
  }
}
