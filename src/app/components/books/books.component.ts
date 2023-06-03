import { Component, OnInit } from '@angular/core';
import { SpinnerOverlayService } from 'src/app/Shared/Services/spinner-overlay.service';
import { Book } from 'src/app/models/book.interface';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  books: Book[] = [];
  displayMode: string;

  constructor(
    private booksService: BooksService,
    private spinnerService: SpinnerOverlayService
  ) {
    this.displayMode = 'list';
  }

  ngOnInit(): void {
    this.spinnerService.show();
    this.booksService.getAllBooks().subscribe((data) => {
      console.debug(data);
      this.books = data.docs;
      console.debug(this.books);
      this.spinnerService.hide();
    });
  }

  changeDisplay(mode: string): void {
    console.debug(`changeDisplay ${mode}`);
    this.displayMode = mode;
  }
}
