import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { GeneralaAppComponent } from './generala-app/generala-app.component';
import { PianoAppComponent } from './piano-app/piano-app.component';

const routes: Routes = [
{  path : '', component : GeneralaAppComponent},
{  path : 'dataBinding', component : DataBindingComponent},
{  path : 'directivas', component : DirectivasComponent},
{  path : 'pianoApp', component : PianoAppComponent},
{  path : 'generalaApp', component : GeneralaAppComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
