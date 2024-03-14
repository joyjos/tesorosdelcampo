import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailArticleComponent } from './pages/detail-article/detail-article.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'article', component: DetailArticleComponent },
    { path: 'login', component: LoginComponent }
];
