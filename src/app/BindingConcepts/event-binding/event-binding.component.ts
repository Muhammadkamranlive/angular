import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
   imgUrl="https://firebasestorage.googleapis.com/v0/b/images-107c9.appspot.com/o/csm_00_placeholder_male_0c3ee9b684.jpg?alt=media&token=76722ea7-fb92-42be-b721-a32d962f5bd8";
   rating=5;
   Rating(){
       alert("default rating is :"+ this.rating)
       console.log("default rating is :"+ this.rating)
   }

  ngOnInit(): void {
  }

}
