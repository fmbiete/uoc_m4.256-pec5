export interface SearchResponse {
  num_found: number;
  docs: Book[];
}

export interface WorkResponse {
  title: string;
  description: string;
  subjects: Object[] | null;
  latest_revision: number;
}

export interface BookResponse {
  full_title: string;
  latest_revision: number;
  publishers: Object[] | null;
  publish_date: string;
  pagination: string;
  isbn_13: string;
}

export interface Book {
  title: string;
  author_name: Object[] | null;
  key: Object;
  first_publish_year: number;
  publisher: Object[] | null;
  language: Object[] | null;
}
