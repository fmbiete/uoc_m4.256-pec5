import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './components/books/books.component';
import { BookComponent } from './components/book/book.component';

const routes: Routes = [
  { path: '', component: BooksComponent },
  { path: 'book/:id', component: BookComponent },
  { path: '**', component: BooksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
