import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ObservablesComponent } from './observables/observables.component';
import { AllComponent } from './observables/all/all.component';
import { FormEventComponent } from './observables/form-event/form-event.component';
import { IntervalComponent } from './interval/interval.component';
import { OfFromComponent } from './of-from/of-from.component';
import { ToArrayComponent } from './to-array/to-array.component';
import { CustomObsComponent } from './custom-obs/custom-obs.component';
import { MappComponent } from './mapp/mapp.component';
import { RetryComponent } from './retry/retry.component';
import { HttpClientModule } from '@angular/common/http';
import { DebounceComponent } from './debounce/debounce.component';
import { SubjectComponent } from './subject/subject.component';
import { HeaderComponent } from './header/header.component';
import { Comp1Component } from './comps/comp1/comp1.component';
import { Comp2Component } from './comps/comp2/comp2.component';
import { Comp3Component } from './comps/comp3/comp3.component';
import { AsyncSubjectComponent } from './async-subject/async-subject.component';
import { ConcatComponent } from './concat/concat.component';
import { MergeComponent } from './merge/merge.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservablesComponent,
    AllComponent,
    FormEventComponent,
    IntervalComponent,
    OfFromComponent,
    ToArrayComponent,
    CustomObsComponent,
    MappComponent,
    RetryComponent,
    DebounceComponent,
    SubjectComponent,
    HeaderComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    AsyncSubjectComponent,
    ConcatComponent,
    MergeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
