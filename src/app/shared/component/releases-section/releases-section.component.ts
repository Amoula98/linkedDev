import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-releases-section',
  templateUrl: './releases-section.component.html',
  styleUrls: ['./releases-section.component.scss']
})
export class ReleasesSectionComponent implements OnInit {
 @Input() _articles;

  constructor() { }

  ngOnInit() {
    console.log('newaapi', this._articles);

  }

}
