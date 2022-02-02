import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LabAssitantService } from 'src/app/services/lab-assitant.service';
import { NotificationService } from 'src/app/services/notification.service';
import { LabCenterService } from 'src/app/services/lab-center.service';
import { MustMatch } from 'src/app/helpers/must-match.validator';

@Component({
  selector: 'app-add-labasistant',
  templateUrl: './add-labasistant.component.html',
  styleUrls: ['./add-labasistant.component.css'],
})
export class AddLabasistantComponent implements OnInit {
  labCenters = [];
  labAssitant = [];
  assistantId = '';
  public labData: any = [];
  submitted: boolean;
  addLabAssitantForm: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private labAssitantService: LabAssitantService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private notify: NotificationService,
    private labCenterService: LabCenterService
  ) {
    this.assistantId = this.activateRoute.snapshot.params['id'] || '';
  }

  ngOnInit(): void {
    this.loadCenterList();
    this.fetchAssitantList();
    const payload = {
      loginuserID: '1',
      languageID: '1',
      searchWord: '',
      countryID: '0',
      page: '0',
      pagesize: '10',
      apiType: 'Android',
      apiVersion: '1.0',
    };
    this.addLabAssitantForm = this._fb.group(
      {
        languageID: ['1'],
        loginlabID: ['1'],
        centerID: ['', Validators.required],
        assistantFirstName: [, Validators.required],
        assistantEmail: [
          '',
          [
            Validators.required,
            Validators.email,
            Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
          ]
        ],
        assistantPassword: ['', Validators.required],
        confirmPassword: ['', Validators.required],
        assistantLastName: ['', Validators.required],
        assistantMobile: [
          '',
          [
            Validators.required,
            Validators.pattern(/^[0-9]*$/),
            Validators.minLength(10),
            Validators.maxLength(10),
          ],
        ],
        apiType: ['Android'],
        apiVersion: ['1.0'],
      },
      {
        validator: MustMatch('assistantPassword', 'confirmPassword'),
      }
    );
  }

  loadCenterList() {
    const payload = {
      loginlabID: '1',
      languageID: '1',
      apiType: 'Android',
      apiVersion: '1.0',
    };
    this.labCenterService.getCenterList(payload).subscribe((res) => {
      this.labCenters = res[0]['data'];
    });
  }
  get f() {
    return this.addLabAssitantForm.controls;
  }
  addLabAssistant() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.addLabAssitantForm.invalid) {
      return;
    }
    if (!this.assistantId) {
      this.labAssitantService
        .addAssitant(this.addLabAssitantForm.value)
        .subscribe(
          (data) => {
            this.notify.showSuccess(data.message, 'Successfull !!');
            this.router.navigate(['/lab-assistant/lab-assistants']);
          },
          (err) => {
            this.notify.showError(err.message, 'Unsuccessfull !!');
            console.log(err);
          }
        );
    } else {
      let payload = {
        ...this.addLabAssitantForm.value,
        assistantID: this.assistantId,
      };
      this.labAssitantService.editAssistant(payload).subscribe(
        (data) => {
          this.notify.showSuccess(data.message, 'Successfull !!');
          this.router.navigate(['/lab-assistant/lab-assistants']);
        },
        (err) => {
          this.notify.showError(err.message, 'Unsuccessfull !!');
          console.log(err);
        }
      );
    }
  }
  fetchAssitantList() {
    const payload = {
      loginlabID: '1',
      languageID: '1',
      apiType: 'Android',
      apiVersion: '1.0',
    };
    this.labAssitantService.getAssitantList(payload).subscribe((res) => {
      this.labAssitant = res[0]['data'];
      this.labData = this.labAssitant.filter(
        (x) => this.assistantId === x.assistantID
      );
      console.log('labdata', this.labData);
      console.log('name', this.labData.assistantFirstName);
      this.addLabAssitantForm.setValue({
        languageID: ['1'],
        loginlabID: ['1'],
        centerID: ['', Validators.required],
        assistantFirstName: this.labData[0].assistantFirstName,
        assistantEmail: this.labData[0].assistantEmail,
        assistantPassword: ['', Validators.required],
        assistantLastName: this.labData[0].assistantLastName,
        assistantMobile: this.labData[0].assistantMobile,
        apiType: ['Android'],
        apiVersion: ['1.0'],
      });
    });
  }
}
