import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.css'],
})
export class VerifyOtpComponent implements OnInit {

  otpForm: FormGroup;
  labAssLogin: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.otpForm = this._fb.group({
      languageID: "1",
      loginlabID: "1",
      labOTP:['', [Validators.required]],
      labDeviceID: "xczxcxzczxczxcxcxc",
      apiType: "Android",
      apiVersion: "1.0"
  })
   }
  
  verifyOtpFormSubmit() {
    this._authService.verifyOtp(this.otpForm.value).subscribe(data => {
      Swal.fire(data.message,'','success')
      //this.router.navigate(['/lab-assistant/home'])
      this.router.navigate(['/reset-password'])
     }, err => {
      Swal.fire('fail','','error')
     // this._router.navigate(['/login'])
     })
  }
}
