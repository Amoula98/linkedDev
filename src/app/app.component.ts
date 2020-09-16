import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Location } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'testProj';
  lang: string;
  isHome: boolean;
  breadcrumbTtems = [];
  constructor(private _translate: TranslateService,
    private location: Location, private router: Router,
    ) {

  }
 ngOnInit() {
  this.lang = 'en';
  this._translate.setDefaultLang(this.lang);
  this._translate.use(this.lang);
  this.detectChangeOfRoute();
  this.isShowBreadCrumb(this.location.path());
  console.log('location',  this.location.path() == '');
 }
  detectChangeOfRoute() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      console.log('detectChangeOfRoute', event.url);
      this.isShowBreadCrumb(event.url);
    });
  }
isShowBreadCrumb(pathname) {
  this.isHome = false;
  if ( pathname == '/Home' || pathname == ''  || pathname == '/') {
    this.isHome = true;
  }
}

}
