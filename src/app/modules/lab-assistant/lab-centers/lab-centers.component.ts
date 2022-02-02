import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LabCenterService } from 'src/app/services/lab-center.service';

@Component({
  selector: 'app-lab-centers',
  templateUrl: './lab-centers.component.html',
  styleUrls: ['./lab-centers.component.css']
})
export class LabCentersComponent implements OnInit {

  constructor(
    private labCenterService: LabCenterService,
    private router: Router
  ) { }
  labCenters = []
  ngOnInit(): void {
    this.loadCenterList();
  }

  editCenter(selectedCenter) {
    this.labCenterService.selectedCenter$.next(selectedCenter);
    this.router.navigate([`/lab-assistant/edit-lab-center/${selectedCenter.centerID}`]);
  }

  deActivateCenter({ centerID }) {
    let payload = {
      centerID,
      loginlabID: "1",
      languageID: "1",
      centerStatus: "Inactive",
      apiType: "Android",
      apiVersion: "1.0"
    }
    this.labCenterService.deActivateCenter(payload).subscribe(() => {
      this.loadCenterList();
    })
  }

  deleteCenter({ centerID }) {
    let payload = {
      centerID,
      loginlabID: "1",
      languageID: "1",
      apiType: "Android",
      apiVersion: "1.0"
    }
    this.labCenterService.deleteCenter(payload).subscribe(() => {
      this.loadCenterList();
    })
  }

  loadCenterList() {
    const payload = { "loginlabID": "1", "languageID": "1", "apiType": "Android", "apiVersion": "1.0" }
    this.labCenterService.getCenterList(payload).subscribe((res) => {
      this.labCenters = res[0]['data'];
    })
  }

}
