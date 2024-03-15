import { Injectable } from '@nestjs/common';
import { Article } from './article.entity';

@Injectable()
export class ArticlesService {
  private articles: Article[] = [
    {
      id: '1',
      title: 'Abuela vs. Ciberdelincuentes: una batalla épica en la campiña',
      photo: '../images/abuelaCiber.png',
      description:
        'En un pequeño pueblo de la campiña española, una abuela octogenaria se ha convertido en la inesperada heroína en la lucha contra el cibercrimen. Doña Carmen, conocida por sus habilidades culinarias y su sabiduría popular, se ha convertido en la némesis de un grupo de ciberdelincuentes que operaban desde la comodidad de sus hogares.',
    },
    {
        id: '2',
        title: 'Un ovni abduce a un tractor en plena siembra',
        photo: '../images/ovni.png',
        description:
          'Un insólito suceso ha conmocionado a la comunidad rural de Mieres, en Asturias. Un tractor que se encontraba en plena faena de siembra fue misteriosamente elevado por un objeto volador no identificado (OVNI) y transportado a un lugar desconocido.',
      },
      {
        id: '3',
        title: 'El granjero Paco descubre que su vaca es una cantante de ópera',
        photo: '../images/granjero.png',
        description:
          'Todo comenzó una mañana soleada, mientras Paco ordeñaba a sus vacas. De pronto, una de ellas, Margarita, comenzó a emitir unos sonidos extraños. Al principio, Paco pensó que se trataba de un simple mugido, pero al prestar más atención, se dio cuenta de que Margarita estaba cantando.',
      }
  ];

  getAllArticles() {
    return this.articles;
  }
  createArticle() {}
  updateArticle() {}
  deleteArticle() {}
}
