import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../services/books.service';
import { AddBooks } from '../models/add-books';
@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.scss']
})
export class SingleBookComponent implements OnInit {

  id: any;
  private sub: any;
  books:any[] = [];
  booklist: AddBooks[] = [];
  constructor(private route: ActivatedRoute, private booksservice: BooksService) {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id)
  }

  product:any;
  getbooks() {
    this.booksservice.getbooksdetails(this.id).subscribe((data: any) => {
      // console.log('book id',data.resultsMap.books);
      this.booklist = data.resultsMap.books;
      // console.log('dfhsdjfds',this.books);
    });
  }

  ngOnInit() {
    this.booksservice.getProduct(this.route.snapshot.params['id']).subscribe((data: any) => {
      console.log(data);
      this.product = data.resultsMap.book;
    });
    this.getbooks();
  } 

}
