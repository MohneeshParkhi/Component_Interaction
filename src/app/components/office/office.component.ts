import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.css']
})
export class OfficeComponent implements OnInit {

   passMess: string = '';
  //private passMess = new Subject<String>();
  constructor(private msgService: MessageService) { }

  ngOnInit() {
    // this.msgService.getMessage().subscribe((msg) =>{
    //   console.log(msg); 
    //   this.passMess = msg;
    //  });
  }
   
  showmsg(){
    this.msgService.getMessage().subscribe((msg) =>{
        console.log(msg); 
        this.passMess = msg;
     });
  }


}
