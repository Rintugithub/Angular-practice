import { UserdataService } from './../services/userdata.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
 users:any;
 errorMessage:string="Loading......"
  constructor(private userdata:UserdataService) { }

  ngOnInit(): void {

    this.userdata.getAllUsers().subscribe((data)=>{
      this.users= data;
    },(err)=>{
      this.errorMessage = err.message;
    })
  }


}
