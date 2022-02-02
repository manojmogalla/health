import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LabAssitantService } from 'src/app/services/lab-assitant.service';

@Component({
  selector: 'app-lab-assistants',
  templateUrl: './lab-assistants.component.html',
  styleUrls: ['./lab-assistants.component.css']
})
export class LabAssistantsComponent implements OnInit {

  labAssitant = []

  constructor( private labAssitantService: LabAssitantService,
    private router: Router) { }

  ngOnInit(): void {
    this.fetchAssitantList();
  }

  editAssistant(selectedAssistant) {
    this.labAssitantService.selectedAssistant$.next(selectedAssistant);
    this.router.navigate([`/lab-assistant/edit-lab-assistant/${selectedAssistant.assistantID}`]);
  }

  deleteAssistant({ assistantID }) {
    let payload = {
      assistantID,
      loginlabID: "1",
      languageID: "1",
      apiType: "Android",
      apiVersion: "1.0"
    }
    this.labAssitantService.deleteAssistant(payload).subscribe(() => {
      this.fetchAssitantList();
    })
  }
   fetchAssitantList() {
    const payload = { "loginlabID": "1", "languageID": "1", "apiType": "Android", "apiVersion": "1.0" }
    this.labAssitantService.getAssitantList(payload).subscribe((res) => {
      this.labAssitant = res[0]['data'];
    })
  }
}
