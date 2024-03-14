import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles.component';

export const routes: Routes = [
    { path: 'home', component: AppComponent },
    { path: 'articles', component: ArticlesComponent }
];
