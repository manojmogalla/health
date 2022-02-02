import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MustMatch } from 'src/app/helpers/must-match.validator';
import { LabCenterService } from 'src/app/services/lab-center.service';

@Component({
  selector: 'app-add-lab-center',
  templateUrl: './add-lab-center.component.html',
  styleUrls: ['./add-lab-center.component.css'],
})
export class AddLabCenterComponent implements OnInit {
  addLabCenterForm: FormGroup;

  submitted = false;

  centerId = '';
  labCenters: any[] = [];
  citiesList = [];

  constructor(
    private _fb: FormBuilder,
    private labCenterService: LabCenterService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {}

  addOrEditForm() {
    this.addLabCenterForm = this._fb.group(
      {
        languageID: ['1'],
        loginlabID: ['1'],
        centerName: ['', Validators.required],
        centerEmail: [
          '',
          [
            Validators.required,
            Validators.email,
            Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
          ],
        ],
        centerPassword: ['', Validators.required],
        confirmPassword: ['', Validators.required],
        centerAddressLine1: ['Vbbnnnnn'],
        centerAddressLine2: ['Ahmedabad'],
        cityName: ['', Validators.required],
        centerLandmark: ['l'],
        centerLatitude: [23.0453269],
        centerLongitude: [72.5596851],
        centerMobile: [
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
        validator: MustMatch('centerPassword', 'confirmPassword'),
      }
    );
  }

  ngOnInit(): void {
    this.addOrEditForm();
    this.centerId = this.activateRoute.snapshot.params['id'] || '';
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

    this.labCenterService.getCitiesList(payload).subscribe((response) => {
      this.citiesList = response[0].data;
      if (this.centerId) {
        this.loadCenterList();
      }
    });
  }
  get f() {
    return this.addLabCenterForm.controls;
  }
  addLabCenter() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.addLabCenterForm.invalid) {
      return;
    }

    // if (!this.centerId) {
    //   this.labCenterService.addCenter(this.addLabCenterForm.value).subscribe(
    //     () => {
    //       this.router.navigate(['/lab-assistant/lab-centers']);
    //     },
    //     (err) => {
    //       console.log(err);
    //     }
    //   );
    // } else {
    //   let payload = { ...this.addLabCenterForm.value, centerID: this.centerId };
    //   this.labCenterService.editCenter(payload).subscribe(
    //     () => {
    //       this.router.navigate(['/lab-assistant/lab-centers']);
    //     },
    //     (err) => {
    //       console.log(err);
    //     }
    //   );
    // }
  }

  loadCenterList() {
    const centerListPayload = {
      loginlabID: '1',
      languageID: '1',
      apiType: 'Android',
      apiVersion: '1.0',
    };
    this.labCenterService.getCenterList(centerListPayload).subscribe(
      (res) => {
        this.labCenters = res[0]['data'];
        const {
          centerName,
          centerEmail,
          centerAddressLine1,
          centerAddressLine2,
          cityID,
          centerLandmark,
          centerLatitude,
          centerLongitude,
          centerMobile,
        } =
          this.labCenters.find((center) => center.centerID === this.centerId) ||
          {};
        const formValue = {
          languageID: '1',
          loginlabID: '1',
          centerName,
          centerEmail,
          centerPassword: 'test',
          confirmPassword: 'test',
          centerAddressLine1,
          centerAddressLine2,
          cityName: this.citiesList.find((city) => city.cityID === cityID)
            .cityName,
          centerLandmark,
          centerLatitude,
          centerLongitude,
          centerMobile,
          apiType: 'Android',
          apiVersion: '1.0',
        };
        this.addLabCenterForm.setValue(formValue);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
