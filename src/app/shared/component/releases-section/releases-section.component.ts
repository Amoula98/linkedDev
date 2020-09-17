import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-releases-section',
  templateUrl: './releases-section.component.html',
  styleUrls: ['./releases-section.component.scss']
})
export class ReleasesSectionComponent implements OnInit {
 @Input() _articles;

  constructor(private router: Router) { }

  ngOnInit() {
    console.log('newaapi', this._articles);
  }
  itemDetails(article) {
    sessionStorage.setItem('article', JSON.stringify(article));
    this.router.navigate(['/Home/Media-Center/News-Details']);
  }
}
