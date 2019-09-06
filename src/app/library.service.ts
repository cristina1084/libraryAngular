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
    return this.http.get("http://localhost:8080/books/"+bid);
  }
}
