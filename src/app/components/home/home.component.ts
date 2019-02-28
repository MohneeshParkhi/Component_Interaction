import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private messageService:MessageService) { }

  ngOnInit() {
  }

  onsubmitMessage(messageForm){
     // console.log(messageForm.value.messagePass);
   this.messageService.sendMessage(messageForm.value.messagePass);
  }

}
