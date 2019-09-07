import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { LibraryService } from "../library.service";

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private library: LibraryService) { }

  book = {};

  ngOnInit() {
  }

  addBook(){
    console.log(this.book);
    this.library.addNewBook(this.book).subscribe();
    this.router.navigateByUrl("/main/books");
  }
}
