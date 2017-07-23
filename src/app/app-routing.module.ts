import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },{
    path: 'profile',
    component: ProfileComponent
  },{
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
