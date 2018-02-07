import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  articles: Article[];
  constructor() {
    this.articles = [
      new Article('angular', 'https://angular.io', 40),
      new Article('vuejs', 'https://vuejs.io', 50),
      new Article('ember', 'https://ember.io', 10)
    ];
  }
  addArticle(title: HTMLInputElement, link: HTMLInputElement) {
    this.articles.push(new Article(title.value, link.value, Math.floor(Math.random() * 40)));
    //console.log(title.value, link.value);
    title.value = '';
    link.value = '';
    return false;
  }

  sortArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
