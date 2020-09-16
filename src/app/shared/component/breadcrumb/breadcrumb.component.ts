import { Component,  OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
 breadcrumbItems;
  constructor(private router: Router) { }

  ngOnInit() {
    this.detectChangeOfRoute();
  }
  detectChangeOfRoute() {
    this.router.events.subscribe((event: NavigationEnd) => {
      console.log('detectChangeOfRoute', event.url);
      if (event instanceof NavigationEnd) {
        // Hide loading indicator
        this.madeBreadCrumbPath(event.url);
    }
    });
  }
  madeBreadCrumbPath(pathname) {
    this.breadcrumbItems = [];
    const pathnameArr = pathname.split('/');
    pathnameArr.shift();
    pathnameArr.map((item, index) => {
      this.breadcrumbItems.push({lable: item.split('-').join(' ') ,
       href: `${index == 0 ? '' : this.breadcrumbItems[index - 1].href}/${item}`});
    });
    console.log('madeBreadCrumbPath' , pathname,  this.breadcrumbItems);
  }
}
