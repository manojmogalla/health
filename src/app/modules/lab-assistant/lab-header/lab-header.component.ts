import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lab-header',
  templateUrl: './lab-header.component.html',
  styleUrls: ['./lab-header.component.css']
})
export class LabHeaderComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }

}
