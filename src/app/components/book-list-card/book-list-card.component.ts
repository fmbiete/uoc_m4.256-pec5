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

const listAnimation = trigger('listAnimation', [
  transition('* <=> *', [
    query(
      ':enter',
      [
        style({ opacity: 0 }),
        stagger('60ms', animate('600ms ease-out', style({ opacity: 1 }))),
      ],
      { optional: true }
    ),
    query(':leave', animate('200ms', style({ opacity: 0 })), {
      optional: true,
    }),
  ]),
]);

@Component({
  selector: 'app-book-list-card',
  templateUrl: './book-list-card.component.html',
  styleUrls: ['./book-list-card.component.scss'],
  animations: [listAnimation],
})
export class BookListCardComponent {
  @Input() books: Book[] = [];
}
