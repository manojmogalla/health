import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResetPasswordComponent } from '../login/reset-password/reset-password.component';
import { AddLabCenterComponent } from './lab-centers/add-lab-center/add-lab-center.component';
import { AddLabasistantComponent } from './lab-assistants/add-labasistant/add-labasistant.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { HomeComponent } from './home/home.component';
import { LabAssistantComponent } from './lab-assistant.component';
import { LabAssistantsComponent } from './lab-assistants/lab-assistants.component';
import { LabCentersComponent } from './lab-centers/lab-centers.component';
import { LabReportsComponent } from './lab-reports/lab-reports.component';
import { LabTestComponent } from './lab-test/lab-test.component';
import { ProfileComponent } from './profile/profile.component';
import { LabtestActiveComponent } from './lab-test/labtest-active/labtest-active.component';
import { LabtestInactiveComponent } from './lab-test/labtest-inactive/labtest-inactive.component';
import { LabtestApprovalPendingComponent } from './lab-test/labtest-approval-pending/labtest-approval-pending.component';

const routes: Routes = [

  { path: '', component:LabAssistantComponent },

  { path: 'lab-assistant', component:LabAssistantComponent,
  children:[

    { path: 'reset-password', component:ResetPasswordComponent },
    { path: 'home', component:HomeComponent },
    { path: 'lab-centers', component:LabCentersComponent },
    { path: 'lab-reports', component:LabReportsComponent },
    { path: 'lab-test', component:LabTestComponent,
    children:[
      {path:'lab-test-active',component:LabtestActiveComponent},
      {path:'lab-test-inactive',component:LabtestInactiveComponent},
      {path:'lab-test-approval-pending',component:LabtestApprovalPendingComponent},
    ] },
    { path: 'appointments', component:AppointmentsComponent },
    { path: 'lab-assistants', component:LabAssistantsComponent,
  },
    { path: 'profile', component:ProfileComponent },
    { path: 'add-lab-center', component:AddLabCenterComponent },
    { path: 'edit-lab-center/:id', component:AddLabCenterComponent },
    {path:'add-lab-assistant',component:AddLabasistantComponent},
    {path:'edit-lab-assistant/:id',component:AddLabasistantComponent},
  ]
},


];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LabAssistantRoutingModule {}
