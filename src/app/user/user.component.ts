import { UserdataService } from './../services/userdata.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user:any;
  constructor(private route:ActivatedRoute, private userdataservice:UserdataService) { }

  ngOnInit(): void {
    let id  = this.route.snapshot.params['id'];
    this.userdataservice.getuser(id).subscribe(u=>{
     this.user = u;
    })
  }

}
