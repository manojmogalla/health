import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LabAssistantModule } from './modules/lab-assistant/lab-assistant.module';
import { LoginModule } from './modules/login/login.module';

const routes: Routes = [
	{
		path: '', redirectTo: '/login', pathMatch: 'full'
	},                
	{
		path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => LoginModule),
	},
	{
		path: 'lab-assistant', loadChildren: () => import('./modules/lab-assistant/lab-assistant.module').then(m => LabAssistantModule),
	}


];
@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true, onSameUrlNavigation: 'reload' })],
	exports: [RouterModule]
})
export class AppRoutingModule { }
