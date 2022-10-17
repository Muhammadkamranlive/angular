import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipconcepts',
  templateUrl: './pipconcepts.component.html',
  styleUrls: ['./pipconcepts.component.css']
})
export class PipconceptsComponent implements OnInit {
   course={
     title:"Angular course",
     rating:4.56676899,
     students:243434,
     releaseDate:new Date()
   }
  constructor() { }

  ngOnInit(): void {
  }

}
