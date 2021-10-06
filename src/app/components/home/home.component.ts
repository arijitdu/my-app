import { Component, OnInit } from '@angular/core';
import { UsersDataService } from '../../services/users-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'my-app';
  users :any;
  constructor(private userData:UsersDataService){
    this.userData.users().subscribe((data)=>{
      this.users=data; 
    })
  }
  ngOnInit(): void {
  }

}

function data(arg0: string, data: any) {
  throw new Error('Function not implemented.');
}

