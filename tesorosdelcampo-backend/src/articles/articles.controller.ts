import { Controller, Get } from '@nestjs/common';
import { ArticlesService } from './articles.service';

@Controller('articles')
export class ArticlesController {

    constructor(private articleService:ArticlesService){}

    @Get()
    getAllArticles() {
        return this.articleService.getAllArticles()
    }
}
