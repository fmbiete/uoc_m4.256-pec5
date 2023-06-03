import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchResponse, WorkResponse } from '../models/book.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private http: HttpClient) {}

  getAllBooks(): Observable<SearchResponse> {
    return this.http.get<SearchResponse>(
      'https://openlibrary.org/search.json?q=angular'
    );
  }

  getBookById(id: string | null): Observable<WorkResponse> {
    return this.http.get<WorkResponse>(
      `https://openlibrary.org/works/${id}.json`
    );
  }
}
