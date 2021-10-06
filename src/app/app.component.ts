import { Component } from '@angular/core';
import { UsersDataService } from './services/users-data.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  users :any;
  constructor(private userData:UsersDataService){
    this.userData.users().subscribe((data)=>{
      this.users=data; 
    })
  }
}
