export interface ObjectKey {
  key: string;
}

export interface SearchResponse {
  num_found: number;
  docs: Book[];
}

export interface AuthorResponse {
  name: string;
  bio: Object;
  wikipedia: string;
  source_records: Object[] | null;
}

export interface AuthorObject {
  author: ObjectKey;
  type: ObjectKey;
}

export interface WorkResponse {
  title: string;
  description: string;
  authors: AuthorObject[];
  first_publish_date: string;
  latest_revision: number;
  subjects: string[];
  covers: number[] | null;
  AuthorsDetails: AuthorResponse[];
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
