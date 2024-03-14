import { Component } from '@angular/core';
import { ArticleComponent } from '../../article/article.component';

@Component({
  selector: 'app-detail-article',
  standalone: true,
  imports: [ArticleComponent],
  templateUrl: './detail-article.component.html',
  styleUrl: './detail-article.component.css'
})
export class DetailArticleComponent {

}
