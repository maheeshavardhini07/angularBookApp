import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class BookService {
  private url = 'http://localhost:8080/book/';
  constructor(private httpClient: HttpClient) {}
  public getAllBookService() {
    return this.httpClient.get(this.url);
  }
  public getBookService(id) {
    return this.httpClient.get('http://localhost:8080/book/' + id);
  }
  public deleteBookService(id) {
    return this.httpClient.delete('http://localhost:8080/book/' + id);
  }
  public createBookService(book) {
    const headers = { 'content-type': 'application/json' };
    return this.httpClient.post(this.url, JSON.stringify(book), {
      headers: headers,
    });
  }
  public updateBookService(id, book) {
    const headers = { 'content-type': 'application/json' };
    return this.httpClient.put(
      'http://localhost:8080/book/' + id,
      JSON.stringify(book),
      {
        headers: headers,
      }
    );
  }
}
