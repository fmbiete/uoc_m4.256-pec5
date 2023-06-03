import { Component, Input } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
} from '@angular/animations';
import { Book } from 'src/app/models/book.interface';

const slideAnimation = trigger('slideAnimation', [
  transition('* <=> *', [
    query(
      ':enter',
      [
        style({ transform: 'translateX(100%)' }),
        animate('800ms ease-in', style({ transform: 'translateX(0%)' })),
      ],
      { optional: true }
    ),
    query(':leave', animate('200ms', style({ opacity: 0 })), {
      optional: true,
    }),
  ]),
]);

@Component({
  selector: 'app-book-list-grid',
  templateUrl: './book-list-grid.component.html',
  styleUrls: ['./book-list-grid.component.scss'],
  animations: [slideAnimation],
})
export class BookListGridComponent {
  @Input() books: Book[] = [];
  displayedColumns: string[] = [
    'title',
    'author_name',
    'first_publish_year',
    'publisher',
    'language',
  ];
}
