import { Injectable } from '@nestjs/common';
import { Article } from './article.entity';

@Injectable()
export class ArticlesService {

    private articles:Article [] = [
        {
            id:'1',
            title: 'Primer artículo',
            photo: 'photo.com',
            description: 'Este es el primer artículo'
        }
    ]

    getAllArticles(){
        return this.articles;
    }
    createArticle(){}
    updateArticle(){}
    deleteArticle(){}
}
