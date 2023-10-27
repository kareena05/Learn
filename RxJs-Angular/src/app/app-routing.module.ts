import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservablesComponent } from './observables/observables.component';
import { AllComponent } from './observables/all/all.component';
import { FormEventComponent } from './observables/form-event/form-event.component';
import { IntervalComponent } from './interval/interval.component';
import { OfFromComponent } from './of-from/of-from.component';
import { toArray } from 'rxjs';
import { ToArrayComponent } from './to-array/to-array.component';
import { CustomObsComponent } from './custom-obs/custom-obs.component';
import { MappComponent } from './mapp/mapp.component';
import { RetryComponent } from './retry/retry.component';

const routes: Routes = [
  {path:"obs",component:ObservablesComponent,children:[
    {path:"list",component:AllComponent},
    {path:"form-event",component:FormEventComponent},
    

  


  ]},
  {path:'interval',component:IntervalComponent},
  {path:"of",component:OfFromComponent},
  {path:"to-array",component:ToArrayComponent},
  {path:"customObs",component:CustomObsComponent},
  {path:"map",component:MappComponent},
  {path:"retry",component:RetryComponent},


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
