import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LabAssistantRoutingModule } from './lab-assistant-routing.module';
import { HomeComponent } from './home/home.component';
import { LabAssistantsComponent } from './lab-assistants/lab-assistants.component';
import { LabCentersComponent } from './lab-centers/lab-centers.component';
import { LabHeaderComponent } from './lab-header/lab-header.component';
import { LabReportsComponent } from './lab-reports/lab-reports.component';
import { LabAssistantComponent } from './lab-assistant.component';
import { LabFooterComponent } from './lab-footer/lab-footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { AddLabCenterComponent } from './lab-centers/add-lab-center/add-lab-center.component';
import { AddLabasistantComponent } from './lab-assistants/add-labasistant/add-labasistant.component';
import { LabtestActiveComponent } from './lab-test/labtest-active/labtest-active.component';
import { LabtestApprovalPendingComponent } from './lab-test/labtest-approval-pending/labtest-approval-pending.component';
import { LabtestInactiveComponent } from './lab-test/labtest-inactive/labtest-inactive.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    HomeComponent,
    LabAssistantComponent,
    LabAssistantsComponent,
    LabCentersComponent,
    LabHeaderComponent,
    LabReportsComponent,
    LabFooterComponent,
    ProfileComponent,
    AddLabCenterComponent,
    AddLabasistantComponent,
    LabtestActiveComponent,
    LabtestApprovalPendingComponent,
    LabtestInactiveComponent
  ],
  imports: [
    CommonModule,
    LabAssistantRoutingModule, ReactiveFormsModule,
    NgbModule
  ]
})
export class LabAssistantModule { }
