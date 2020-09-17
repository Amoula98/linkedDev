import { Component, OnInit } from '@angular/core';
import * as newaapi from './../../_files/newsapi.json';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {
  article: any;
  attachments = ['ay 7ga', 'aaa', 'kk', 'sdddddddddd', 'sddds' , 'saad'];
  interestedItems: any[];
  constructor() { }

  ngOnInit() {
  this.article =   JSON.parse(sessionStorage.getItem('article'));
  this.interestedItems = newaapi.articles.slice(0, 3);
  console.log('this.interestedItems', this.interestedItems);

  }

}
