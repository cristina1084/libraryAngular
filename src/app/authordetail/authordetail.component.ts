import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { LibraryService } from "../library.service";

@Component({
  selector: 'app-authordetail',
  templateUrl: './authordetail.component.html',
  styleUrls: ['./authordetail.component.css']
})
export class AuthordetailComponent implements OnInit {

  authorid;
  author;
  constructor(private router: ActivatedRoute, private library: LibraryService) { }

  ngOnInit() {
    this.authorid = this.router.snapshot.paramMap.get('aid');
    console.log(this.authorid);
    
    this.library.getAuthorsById(this.authorid).subscribe(data=>{
      this.author = data[0];
    })
  }

}
