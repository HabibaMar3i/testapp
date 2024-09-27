import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news: any = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getNews().subscribe(
      (data) => {
        this.news = data.articles;
        console.log(this.news);
      },
      (error) => {
        console.error('Error fetching news:', error);
      }
    );
  }
}
