import { NgModule } from '@angular/core';
import { homeRouter } from './home.router';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        homeRouter,
        CommonModule,
    ],
    declarations: [
        HomeComponent
    ],
})

export class HomeModule {
}
