import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkResponse } from 'src/app/models/book.interface';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  book!: WorkResponse | null;

  constructor(
    private booksService: BooksService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const bookId = this.activatedRoute.snapshot.paramMap.get('id');
    console.debug(`Book Id: ${bookId}`);

    this.booksService.getBookById(bookId).subscribe((book) => {
      if (!book) {
        return this.router.navigateByUrl('/');
      }

      this.book = book;
      console.debug(this.book);
      return;
    });
  }

  goList(): void {
    this.router.navigateByUrl('/books');
  }
}
