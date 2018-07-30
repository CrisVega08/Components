import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NumericInputComponent } from './numeric-input/numeric-input.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TecnicosComponent } from './tecnicos/tecnicos.components';


@NgModule({
  declarations: [
    AppComponent,
    NumericInputComponent,
    TecnicosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
