import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  message: string = "hey this the message passed by parent component to child"; 

  constructor() { }

  ngOnInit() {
  }

  
}
