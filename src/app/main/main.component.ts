import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  mainNavs = [
    {link:"/main/home", title:"Home"}, 
    {link:"/main/books", title:"Books"}, 
    {link:"/main/authors", title:"Authors"},
    {link:"/main/addbook", title:"Add Books"},
    {link:"/main/updatebook", title:"Edit/Delete Books"},
    {link:"", title:"Logout"}
  ]
  
  ngOnInit() {
  }

}
