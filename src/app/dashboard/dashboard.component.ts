import { Component, OnInit, Input, HostListener } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
name: any;
show:any;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  results: Object;
  myTextVal: string;
  searchTerm$ = new Subject<string>();
      
  constructor(private breakpointObserver: BreakpointObserver, private router: Router, private searchService: SearchService ) {
    this.searchService.search(this.searchTerm$)
      .subscribe((results :any) => {
        console.log('search:',results);
        this.results = results.resultsMap.books;
      });
  }

  ngOnInit() {
   this.name = localStorage.getItem('name');
   console.log('search keyup:',this.searchTerm$);
  }

  onSelectBook(event, newValue){
    console.log(newValue.bookId);
    alert('clicked');
    this.router.navigateByUrl('/book-detail');
  }

  opened: boolean = false;
  
  clickedInside($event: Event){
    $event.preventDefault();
    $event.stopPropagation();  // <- that will stop propagation on lower layers
    // console.log("CLICKED INSIDE, MENU WON'T HIDE");
  }

  @HostListener('document:click', ['$event']) clickedOutside($event){
    // here you can hide your menu
    this.opened = !this.opened;
    // console.log("CLICKED OUTSIDE");
  }
  
  logOut() {
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigateByUrl('/home');
  }

}
