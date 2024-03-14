import { Component } from '@angular/core';
import { AsideComponent } from '../../aside/aside.component';
import { ArticlesComponent } from '../../articles/articles.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsideComponent, ArticlesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
