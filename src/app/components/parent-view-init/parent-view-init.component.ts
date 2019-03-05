import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildViewInitComponent } from '../child-view-init/child-view-init.component';

@Component({
  selector: 'app-parent-view-init',
  templateUrl: './parent-view-init.component.html',
  styleUrls: ['./parent-view-init.component.css']
})
export class ParentViewInitComponent implements OnInit {
 @ViewChild(ChildViewInitComponent) child; 
  constructor() { }

   message: String= '' ; //= "Tyrant is coming";
  ngOnInit() {
  }
  ngAfterViewInit(): void {
    this.message = this.child.message;
  }

}
