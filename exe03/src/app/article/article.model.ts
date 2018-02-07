export class Article {
  title: string;
  votes: number;
  link: string;

  constructor(title: string, link: string, votes?: number) {
    this.title = title;
    this.link = link;
    this.votes = votes || 0;
  }
  voteUp() {
    this.votes++;
  }
  voteDown() {
    this.votes--;
  }
  domain(): string {
    try {
      //split veut dire ne compte pas '//'
      const domainPath: string = this.link.split('//')[1];
      return domainPath.split('/')[0];
    } catch (err) {
      return null;
    }
  }
}
