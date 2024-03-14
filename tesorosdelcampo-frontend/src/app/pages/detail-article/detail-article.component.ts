import { Component } from '@angular/core';
import { ArticleComponent } from '../../article/article.component';
import { AsideComponent } from '../../aside/aside.component';

@Component({
  selector: 'app-detail-article',
  standalone: true,
  imports: [ArticleComponent, AsideComponent],
  templateUrl: './detail-article.component.html',
  styleUrl: './detail-article.component.css'
})
export class DetailArticleComponent {

}
