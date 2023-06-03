import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BooksComponent } from './components/books/books.component';
import { BookComponent } from './components/book/book.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookListCardComponent } from './components/book-list-card/book-list-card.component';
import { BookListGridComponent } from './components/book-list-grid/book-list-grid.component';
import { SpinnerOverlayComponent } from './Shared/Components/spinner-overlay/spinner-overlay.component';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookComponent,
    BookListCardComponent,
    BookListGridComponent,
    SpinnerOverlayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatButtonToggleModule,
    MatListModule,
    MatDividerModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatTabsModule,
    MatExpansionModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
