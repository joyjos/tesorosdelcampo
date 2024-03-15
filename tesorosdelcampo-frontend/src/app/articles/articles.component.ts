import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

import { CommonModule } from '@angular/common';
import { ArticlesService } from './articles.service';
import { Articles } from './articles.interface';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent implements OnInit {

  articlesList: Articles[] = [];

  constructor(private articlesService:ArticlesService) {
    }

  ngOnInit(): void {
      this.getArticles();
  }

  getArticles() {
    this.articlesService.getArticles().subscribe({
      next: (result) => {
        this.articlesList = result;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
