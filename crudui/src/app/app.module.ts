import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

import {MyRouterModule} from './modules/my-router/myrouter.module';

import { AppComponent } from './app.component';
import { ListComponent } from './coponents/list/list.component';
import { AddComponent } from './coponents/add/add.component';
import { EditComponent } from './coponents/edit/edit.component';
import { HomeComponent } from './coponents/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddComponent,
    EditComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule,
    MyRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
