import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { PianoAppComponent } from './piano-app/piano-app.component';
import { GeneralaAppComponent } from './generala-app/generala-app.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivasComponent,
    DataBindingComponent,
    PianoAppComponent,
    GeneralaAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
