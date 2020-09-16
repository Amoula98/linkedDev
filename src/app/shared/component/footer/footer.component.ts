import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  rectangle: any;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.rectangle =
     this.sanitizer.bypassSecurityTrustHtml( `<svg xmlns="http://www.w3.org/2000/svg" width="1" height="19" viewBox="0 0 1 19">
    <rect id="Rectangle_11" data-name="Rectangle 11" width="1" height="19" fill="#fff"/>
  </svg>`);
  }

}
