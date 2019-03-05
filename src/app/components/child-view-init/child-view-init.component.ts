import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-view-init',
  templateUrl: './child-view-init.component.html',
  styleUrls: ['./child-view-init.component.css']
})
export class ChildViewInitComponent implements OnInit {

  constructor() { }
 message = "Child tyrant is coming....Run.. save your life";
  ngOnInit() {
  }

}
