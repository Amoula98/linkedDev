import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { SharingDataService } from '../../_services';
import * as newaapi from './../../_files/newsapi.json';

interface Article {
  sourceID: number; id: number; showOnHomepage: boolean; title: string;
  description: string; urlToImage: string; publishedAt: string; content: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  articles: Article[];
  lastestArticles: Article[];
  constructor(private router: Router) { }

  ngOnInit() {
    this.lastestArticles = newaapi.articles.filter((item) => item.showOnHomepage == true).
    sort((item: any, item2: any) =>  {
      const c: any = new Date(item.publishedAt);
      const d: any = new Date(item2.publishedAt);
      return d - c;
    }).slice(0, 4);

}

routeToPressReleases() {
  this.router.navigate(['/Home/Media-Center/Press-Release']);
}
}
