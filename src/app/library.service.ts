import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(private http: HttpClient) { }
  
  getBooks(){
    return this.http.get("http://localhost:8080/books/getbooks");
  }

  getBookById(bid){
    return this.http.get("http://localhost:8080/books/" + bid);
  }

  getAuthors(){
    return this.http.get("http://localhost:8080/authors/getauthors");
  }

  getAuthorById(aid){
    return this.http.get("http://localhost:8080/authors/" + aid);
  }

  deleteBook(dbid){
    return this.http.get("http://localhost:8080/books/delete/" + dbid);
  }

  editBook(data){
    return this.http.post("http://localhost:8080/books/edit/", data)
  }

  addNewBook(book){
    return this.http.post("http://localhost:8080/books/add/", book)
  }

  addUser(user){
    return this.http.post("http://localhost:8080/signup", user)
  }
}
