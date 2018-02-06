import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;
  constructor() {
    this.article = new Article ('angular is the best', 'http://angular.io', 30);
  }
  voteUp() {
    this.article.votes++;
    return false;
  }
  voteDown() {
    this.article.votes--;
    return false;
  }
  ngOnInit() {
  }

}
