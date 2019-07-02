


import { Component, OnInit } from '@angular/core';


import { trigger, transition, animate, style } from '@angular/animations'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  
  img_list = [
    'http://denverbookcase.com/wp-content/uploads/2015/02/slider2-1024x323.jpg',
    'https://worksmartlivesmart.com/wp-content/uploads/2009/12/read-books.jpg',
    'https://education.cu-portland.edu/wp-content/uploads/sites/33/2018/09/diverse-childrens-books.jpg',
  ];

  ngOnInit() {
  }
}