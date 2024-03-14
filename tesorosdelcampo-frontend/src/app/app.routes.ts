import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailArticleComponent } from './pages/detail-article/detail-article.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'article', component: DetailArticleComponent }
];
