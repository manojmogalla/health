import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lab-assistant',
  templateUrl: './lab-assistant.component.html',
  styleUrls: ['./lab-assistant.component.css']
})
export class LabAssistantComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
   
  }

}
