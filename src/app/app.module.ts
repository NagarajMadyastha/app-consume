import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NgModuleFactory } from '@angular/core';

import { AppComponent } from './app.component';
//import {HeaderModule } from 'bundle/'
//import {HeaderModule } from 'bundle/src/app/modules/header/header.module'

//import { HeaderComponent} from 'bundle'
import { FirstComponent } from './module/first/first.component';


import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { ModuleModule } from './module/module.module';
import { Type } from '@angular/compiler/src/output/output_ast';
declare const System: any;

const routes: Routes = [
  {
    path: '',
    redirectTo: 'first',
    pathMatch: 'full'
  },
  {
    path: 'first',
    component: FirstComponent
  },
  {
    path: 'child',
    loadChildren: 'bundle#HeaderModule'
  
  }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModuleModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }



