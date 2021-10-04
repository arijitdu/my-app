import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  {path: '',component : AppComponent},
  {path: 'home',component : HomeComponent},
  {path: 'about',component : AboutComponent},
  {path: 'contact',component : ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
