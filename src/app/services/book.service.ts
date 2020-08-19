import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../model/book-local.model'

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  bookUrl = "https://5d716862d3448a001411b7c9.mockapi.io/api/v1/book";
  bookUrlGoogle ="https://www.googleapis.com/books/v1/volumes?q="
  keyBook = "AIzaSyA4U5M-55MTsKD5FNr0cpr1e3-JYGX4N0Q"

  findAll(): Observable<Book[]>{
    return this.http.get<Book[]>(this.bookUrl);
  }

  findById(id: String): Observable<Book>{
    return this.http.get<Book>(`${this.bookUrl}/${id}`);
  }

  addBook(book: Book): Observable<Book>{
    return this.http.post<Book>(this.bookUrl, book);
  }
  removeBook(id: String): Observable<Book>{
    return this.http.delete<Book>(`${this.bookUrl}/${id}`);
  }

  editBook(book: Book, id: String): Observable<Book>{
    return this.http.put<Book>(`${this.bookUrl}/${id}`, book);
  }

  searchGoogleByName(title: String): Observable<any>{
    return this.http.get<any>(this.bookUrlGoogle + title + "&key=" + this.keyBook);
  }

}
