import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';
import { MustMatch } from 'src/app/helpers/must-match.validator';

@Component({
  selector: 'app-lab-assistant-login',
  templateUrl: './lab-assistant-login.component.html',
  styleUrls: ['./lab-assistant-login.component.css'],
})
export class LabAssistantLoginComponent implements OnInit {
  submitted = false;
  fieldTextType: boolean;
  fieldTextType1: boolean;

  labAssLogin: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService,
    public router: Router,
    private notify: NotificationService
  ) {}

  ngOnInit(): void {
    this.makeForm();
  }

  makeForm() {
    this.labAssLogin = this._fb.group(
      {
        languageID: ['1'],
        countryID: ['1'],
        labCountryCode: ['91'],
        labMobileNo: ['', [Validators.required,Validators.pattern(/^[0-9]*$/ ),Validators.minLength(10)]],
        labPassword: ['', Validators.required],
        apiType: ['Android'],
        apiVersion: ['1.0'],
      }
    );
  }
  get f() {
    return this.labAssLogin.controls;
  }
  labAssLoginFormSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.labAssLogin.invalid) {
      return;
    }
    if (this.labAssLogin.valid) {
      this._authService
        .signIn(JSON.stringify(this.labAssLogin.value))
        .subscribe((data: any) => {
          //console.log('form submited', data);
          // this.router.navigate(['/verify-otp'])
          if (data.status === 'true') {
            localStorage.setItem('token', data['data'][0]['labSecurityToken']);
            this.notify.showSuccess(data.message, 'Successfull !!');
            //Swal.fire(data.message,'','success')
            //this.router.navigate(['/verify-otp'])
            this.router.navigate(['/lab-assistant/home']);
          } else {
            this.notify.showError(data.message, 'Unsuccessfull !!');
            // Swal.fire(data.message,'','error')
          }
        });
    } else {
      this.notify.showError(
        'Please Enter the Mobile No & Password!',
        'Unsuccessfull !!'
      );
      //Swal.fire('please enter the required fields','','error')
      console.log('reached');
    }
  }

  forgetPass() {
    // this.router.navigate(['/forgot-password']);
  }
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
  toggleFieldTextType1() {
    this.fieldTextType1 = !this.fieldTextType1;
  }
}
