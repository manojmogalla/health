import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgetPass: FormGroup
  constructor(private router: Router,
    private _fb: FormBuilder,
    private _authService: AuthService,) {}
    
  ngOnInit(): void {
    this.forget_pass();
  }

  forget_pass() {
    this.forgetPass = this._fb.group({
      languageID: [1],
      apiType: "Android",
      apiVersion: "1.0",
      labMobileNo:['', [Validators.required]]
    })
  }

  sendOTP() {
    //api here
    this._authService.forgotPassword(this.forgetPass.value).subscribe(data => {
      Swal.fire(data.message,'','success')
      this.router.navigate(['/verify-otp']);
     }, err => {
      Swal.fire('api success','','error')
     })
    //this.router.navigate(['/verify-otp']);
  }
}
