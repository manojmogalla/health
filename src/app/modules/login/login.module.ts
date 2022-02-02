import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LabAssistantLoginComponent } from './lab-assistant-login/lab-assistant-login.component';
import { DocterLoginComponent } from './docter-login/docter-login.component';
import { HospitalLoginComponent } from './hospital-login/hospital-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { FooterComponent } from '../commonStatic/footer/footer.component';
import { TopHeaderComponent } from '../commonStatic/top-header/top-header.component';
import { VerifyOtpComponent } from './verify-otp/verify-otp.component';
import {RouterModule} from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { MainloginComponent } from './mainlogin/mainlogin.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    LoginComponent,
    ForgotPasswordComponent,
    VerifyOtpComponent,
    LabAssistantLoginComponent,
    DocterLoginComponent,
    HospitalLoginComponent,
    FooterComponent,
    TopHeaderComponent,
    MainloginComponent,
    ResetPasswordComponent
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, LoginRoutingModule, RouterModule,
    ToastrModule.forRoot({
      timeOut:10000,
      positionClass:'toast-top-right',
      preventDuplicates:true
    }),],
  exports: [
    LoginComponent,
    VerifyOtpComponent,
    LabAssistantLoginComponent,
    DocterLoginComponent,
    HospitalLoginComponent,
    FooterComponent,
    ResetPasswordComponent
  ],
})
export class LoginModule {}
