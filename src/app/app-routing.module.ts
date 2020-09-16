import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent, NewsListingReleasesComponent } from './views';

const routes: Routes = [
  {path: '' , redirectTo: 'Home', pathMatch: 'full'},
  {path: 'Home' , component: HomeComponent},
  {path: 'Home' ,  children: [
    {path: 'Media-Center', component: NewsListingReleasesComponent}
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
