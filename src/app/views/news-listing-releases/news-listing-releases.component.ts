import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SharingDataService } from '../../_services';
import * as newaapi from './../../_files/newsapi.json';

@Component({
  selector: 'app-news-listing-releases',
  templateUrl: './news-listing-releases.component.html',
  styleUrls: ['./news-listing-releases.component.scss']
})
export class NewsListingReleasesComponent implements OnInit {
  articles: any[];
  categories: { id: number; name: string; }[];
  myGroup = new FormGroup({
    title: new FormControl(''),
    category: new FormControl('')
 });
  articlesClone: any[];
  isExistedMore: boolean;
  constructor() { }

  ngOnInit() {
    this.categories = newaapi.sourceCategory;
    this.articles = newaapi.articles.
    sort((item: any, item2: any) =>  {
      const c: any = new Date(item.publishedAt);
      const d: any = new Date(item2.publishedAt);
      return d - c;
    });
    this.articlesClone = this.articles.slice();
    this.articles = this.articles.slice(0, 8);
    this.isExistedMoreItems();
  }
  getFilterData() {
    console.log('getFilterData',  this.myGroup);
    if (this.myGroup.value.category != '' && this.myGroup.value.title != '') {
    this.articles = this.articlesClone.filter((item) => item.sourceID == this.myGroup.value.category
    && item.title.includes(this.myGroup.value.title));
    return this.articles;
    } else if (this.myGroup.value.title != '') {
      this.articles = this.articlesClone.filter((item) => item.title.includes(this.myGroup.value.title));
    return this.articles;
    } else if (this.myGroup.value.category != '' ) {
      this.articles = this.articlesClone.filter((item) => item.sourceID == this.myGroup.value.category);
    return this.articles;
    } else {
     return this.articles = this.articlesClone.slice(0, 8);
    }
  }
  getNextData() {
    this.articles = this.articlesClone.slice(0, this.articles.length + 4);
    this.isExistedMoreItems();
  }
  isExistedMoreItems() {
    this.isExistedMore = true;
     if (this.articlesClone.length == this.articles.length) {
       this.isExistedMore = false;
     }
  }
}
