import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControlName } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent implements OnInit {
  reset_Password: FormGroup
  constructor(private _router: Router, private _fb: FormBuilder, private _authService: AuthService,) {}

  ngOnInit(): void { 
    this.reset_Password = this._fb.group({
      loginlabID: ["1"],
      languageID: ["1"],
      labNewPassword: ["",Validators.required],
      apiType: ["Android"],
      apiVersion: ["1.0"]
  })
  }

  resetPassword() {
    this._authService.resetPassword(this.reset_Password.value).subscribe(data => {
      if (data.status === 'true'){
        Swal.fire(data.message,'','success')  
       //this._router.navigate(['/lab-assistant/home'])
       this._router.navigate(['/login'])
      }
      else {
        Swal.fire(data.message,'','error')
      }
     }, err => {
      Swal.fire(err.message,'Fail','error')
     // this._router.navigate(['/login'])
     })
  }
}
