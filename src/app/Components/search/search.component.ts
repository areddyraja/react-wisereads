import { Component, OnInit, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  results: object;
  myTextVal: string;
  searchTerm$ = new Subject<string>();
  constructor(private breakpointObserver: BreakpointObserver, private router: Router, private searchService: SearchService ) {
    this.searchService.search(this.searchTerm$)
      .subscribe((results: any) => {
        console.log('search:', results);
        this.results = results.resultsMap.books;
      });
  }

  ngOnInit() {
  }

}
