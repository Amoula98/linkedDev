import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BreadcrumbComponent, PageNotFoundComponent } from './shared/component';
import { HomeComponent, NewsDetailsComponent, NewsListingReleasesComponent } from './views';

const routes: Routes = [
  {path: '' , redirectTo: 'Home', pathMatch: 'full'},
  {path: 'Home' , component: HomeComponent},
  {path: 'Home' ,  children: [
    {path: 'Media-Center', component: BreadcrumbComponent, children: [
      {path: 'Press-Release', component: NewsListingReleasesComponent},
      {path: 'News-Details', component: NewsDetailsComponent}
    ]}
  ]},
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
