import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-towway-binding',
  templateUrl: './towway-binding.component.html',
  styleUrls: ['./towway-binding.component.css']
})
export class TowwayBindingComponent implements OnInit {
 Name;
 Email;
  constructor(user:UserService) { 
          this.Email=user.userEmail;
          this.Name=user.userName;
  }
  getData(){
    return JSON.stringify([
      this.Name,
      this.Email
    ])
  }
  ngOnInit(): void {
  }

}
