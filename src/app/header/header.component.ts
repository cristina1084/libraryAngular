import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  pageTitle = "Library";

  navs = [
    {link:"/signup", title:"Sign Up"},
    {link:"", title:"Login"}
  ];

  mainNavs = [
    {link:"/main/books", title:"Books"}, 
    {link:"/main/authors", title:"Authors"},
    {link:"/main/addbook", title:"Add Books"},
    {link:"/main/updatebook", title:"Edit/Delete Books"},
    {link:"", title:"Logout"}
  ]
  constructor() { }

  ngOnInit() {
  }

}
