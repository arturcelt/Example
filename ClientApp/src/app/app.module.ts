//import { BrowserModule } from '@angular/platform-browser';
//import { NgModule } from '@angular/core';
//import { FormsModule } from '@angular/forms';
//import { HttpClientModule } from '@angular/common/http';
//import { RouterModule } from '@angular/router';

//import { AppComponent } from './app.component';
//import { NavMenuComponent } from './nav-menu/nav-menu.component';
//import { HomeComponent } from './home/home.component';
//import { CounterComponent } from './counter/counter.component';
//import { FetchDataComponent } from './fetch-data/fetch-data.component';

//@NgModule({
//  declarations: [
//    AppComponent,
//    NavMenuComponent,
//    HomeComponent,
//    CounterComponent,
//    FetchDataComponent
//  ],
//  imports: [
//    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
//    HttpClientModule,
//    FormsModule,
//    RouterModule.forRoot([
//      { path: '', component: HomeComponent, pathMatch: 'full' },
//      { path: 'counter', component: CounterComponent },
//      { path: 'fetch-data', component: FetchDataComponent },
//    ])
//  ],
//  providers: [],
//  bootstrap: [AppComponent]
//})
//export class AppModule { }


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductComponent } from "./component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaAttrDirective } from "./attr.directive";
import { PaModel } from "./twoway.directive";
import { PaStructureDirective } from "./structure.directive";
import { CommonModule } from '@angular/common';
import { PaIteratorDirective } from "./iterator.directive";
import { PaCellColor } from "./cellColor.directive";
import { PaCellColorSwitcher } from "./cellColorSwitcher.directive";

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, CommonModule],
  declarations: [ProductComponent, PaAttrDirective, PaModel, PaStructureDirective, PaIteratorDirective, PaCellColor, PaCellColorSwitcher],
  bootstrap: [ProductComponent]
})
export class AppModule { }
