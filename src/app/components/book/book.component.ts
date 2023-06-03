import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpinnerOverlayService } from 'src/app/Shared/Services/spinner-overlay.service';
import { AuthorResponse, WorkResponse } from 'src/app/models/book.interface';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  book!: WorkResponse | null;
  visibleDetails: boolean = false;
  coverUrl: string = '';

  constructor(
    private booksService: BooksService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private spinnerService: SpinnerOverlayService
  ) {}

  ngOnInit(): void {
    const bookId = this.activatedRoute.snapshot.paramMap.get('id');
    console.debug(`Book Id: ${bookId}`);

    this.spinnerService.show();

    this.booksService.getBookById(bookId).subscribe((book) => {
      this.spinnerService.hide();
      if (!book) {
        return this.router.navigateByUrl('/');
      }

      this.book = book;
      if (book.covers && book.covers.length >= 1) {
        this.coverUrl = `https://covers.openlibrary.org/b/id/${book.covers[0]}-M.jpg`;
      } else {
        this.coverUrl =
          'https://img.freepik.com/free-psd/book-hardcover-mockup_125540-225.jpg?w=1800&t=st=1685799516~exp=1685800116~hmac=77c57cb7e41e13d2ec8e9df589731cb12432add0674ea220aefea09bfbbba37f';
      }
      this.coverUrl;
      console.debug(this.book);
      return;
    });
  }

  goList(): void {
    this.router.navigateByUrl('/books');
  }

  showDetails(): void {
    if (!this.book) {
      return;
    }

    this.spinnerService.show();
    this.visibleDetails = true;
    this.book.AuthorsDetails = new Array<AuthorResponse>();

    // Search author information
    this.book.authors.forEach((el) => {
      const authorKey = el.author.key.split('/')[2];
      console.log(`Searching Author ${authorKey}`);
      this.booksService.getAuthor(authorKey).subscribe((author) => {
        console.debug(author);
        this.book?.AuthorsDetails.push(author);
        this.spinnerService.hide();
      });
    });
  }
}
