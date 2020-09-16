import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  rectangle: any;



  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.rectangle =
    this.sanitizer.bypassSecurityTrustHtml( `<svg xmlns="http://www.w3.org/2000/svg" width="1" height="14" viewBox="0 0 1 14">
    <rect id="Shape_5_copy" data-name="Shape 5 copy" width="1" height="14" fill="#8d8d8d"/>
  </svg>
  `);
  }

}
