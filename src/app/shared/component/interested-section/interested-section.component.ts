import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-interested-section',
  templateUrl: './interested-section.component.html',
  styleUrls: ['./interested-section.component.scss']
})
export class InterestedSectionComponent implements OnInit {
  @Input() _interestedItems ;
  constructor() { }

  ngOnInit() {
  }

}
