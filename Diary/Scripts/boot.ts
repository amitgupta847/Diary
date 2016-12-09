///<reference path="./../typings/globals/core-js/index.d.ts"/>
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import './rxjs-extensions';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { routing } from './app.routes'
import { HeaderComponent } from './header.component';
import { AppComponent } from './app';
import { DepositsComponent } from './Deposits/deposits.component';

@NgModule({
    imports: [BrowserModule,  FormsModule,
        ReactiveFormsModule, HttpModule],
    declarations: [AppComponent, HeaderComponent, DepositsComponent],
    bootstrap: [AppComponent],
    //providers: [HttpService]
})
export class AppModule { }