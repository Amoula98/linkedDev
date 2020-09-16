import { Component, OnInit } from '@angular/core';
import { SharingDataService } from '../../_services';

@Component({
  selector: 'app-news-listing-releases',
  templateUrl: './news-listing-releases.component.html',
  styleUrls: ['./news-listing-releases.component.scss']
})
export class NewsListingReleasesComponent implements OnInit {
  articles: any;

  constructor(private sharingDataService: SharingDataService) { }

  ngOnInit() {
    this.articles = this.sharingDataService.articles;
    if (!this.articles) {
      this.articles =  JSON.parse(sessionStorage.getItem('articles'));
    }
  }

}
