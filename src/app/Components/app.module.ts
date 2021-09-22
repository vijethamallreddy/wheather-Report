import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import {RouterModule, Routes} from '@angular/router'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TemparetureDetailsComponent } from './tempareture-details/tempareture-details.component';

const appRoutes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'tempDetails', component:TemparetureDetailsComponent},
  {path:'tempDetails/:name', component:TemparetureDetailsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    TemparetureDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
