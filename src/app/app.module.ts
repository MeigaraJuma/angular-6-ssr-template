import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';

import {AppRouter} from './app.routes';

export const APP_ID = 'my-app';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    BrowserModule.withServerTransition({ appId: APP_ID }),
    AppRouter
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
