import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationFormComponent } from './views/registration-form/registration-form.component';
import { ParticipantsComponent } from './views/participants/participants.component';

const routes: Routes = [
  {
    path: '',
    component: RegistrationFormComponent
  },
  {
    path: 'registration',
    component: RegistrationFormComponent
  },
  {
    path: 'participants',
    component: ParticipantsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
