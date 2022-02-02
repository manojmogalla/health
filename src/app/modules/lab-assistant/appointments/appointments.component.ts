import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from 'src/app/services/appointment.service';
@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  constructor(private router: Router, public appoinment: AppointmentService) { }

  labappoinmentdata = []

  ngOnInit(): void {
    this.fetchlabAppoinmentList();
    this.fetchLabAssignAppoinment()
    this.fetchcompleteAppoinment()
  }

  fetchlabAppoinmentList() {
    const payload = { "loginlabID": "1", "languageID": "1", "apiType": "Android", "apiVersion": "1.0" }
    this.appoinment.fetchAppoinmentList(payload).subscribe((res) => {
      this.labappoinmentdata = res[0]['data'];
    })
  }
  fetchLabAssignAppoinment() {
    const payload = { "loginlabID": "1", "languageID": "1", "assistantID": "1", "appointmentID": "25", "apiType": "Android", "apiVersion": "1.0" }
    this.appoinment.assignAssistant(payload).subscribe((res) => {
      this.labappoinmentdata = res[0]['data'];
    })
  }

  fetchcompleteAppoinment() {
    const payload = { "appointmentID": "5", "loginlabID": "1", "languageID": "1", "logindoctorID": "0", "apiType": "Android", "apiVersion": "1.0" }
    this.appoinment.completeAppoinment(payload).subscribe((res) => { 
      this.labappoinmentdata = res[0]['data'];
    })
  }
}
