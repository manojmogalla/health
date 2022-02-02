import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';
import { LabTestService } from '../../../services/lab-test.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lab-test',
  templateUrl: './lab-test.component.html',
  styleUrls: ['./lab-test.component.css']
})
export class LabTestComponent implements OnInit {

  diagnosisList: any;

  constructor(
    private labTestService: LabTestService,
    private notify: NotificationService,
    private router: Router
  ) { }

  tab1="/labtest/lab-test-active"
  tab2="/labtest/lab-test-inactive"
  tab3="/labtest/lab-test-approval-pending"

  ngOnInit(): void {

    const payload = {
      "loginuserID": "1",
      "languageID": "1",
      "searchWord": "",
      "countryID": "0",
      "page": "0",
      "pagesize": "10",
      "apiType": "Android",
      "apiVersion": "1.0"
    }

    this.labTestService.getDiagnosisList(payload).subscribe((response) => {
      if (response[0].status == "true") {
        this.diagnosisList = response[0].data;
        this.notify.showSuccess(response[0].message, 'Successfull !!')
      } else {
        this.notify.showError(response[0].message, 'Unsuccessfull !!')
      }
    })
  }

  setTab(tabname: string) {
    this.router.navigate([`/${tabname}`]);
  }


}
