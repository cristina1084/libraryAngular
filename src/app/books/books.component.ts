import { Component, OnInit } from '@angular/core';
import { LibraryService } from "../library.service";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private library: LibraryService) { }

  books:any;

  ngOnInit() {
    this.library.getBooks().subscribe(data=>{
      console.log(data);
      this.books = data;
    })
  }

}
