


import { Component, OnInit, ViewChild } from '@angular/core';
// import { NgxCarousel } from 'ngx-carousel';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  public itemList: object[] = [];
  // public Config: NgxCarousel;

  public carouselTile: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    slide: 1,
    speed: 250,
    point: {
      visible: true
    },
    load: 2,
    velocity: 0,
    touch: true,
    easing: 'cubic-bezier(0, 0, 0.2, 1)'
  };

  carouselItems = [
    {
      title: 'Save you shelf space with WiseReads book rentals ',
      url: '../../assets/images/slider3.jpg'
    },
    {
      title: 'Immersing yourself in the book world',
      url: '../../assets/images/slider4.jpg'
    },
    {
      title: 'Give your childrens a gift of imagination',
      url: '../../assets/images/slider5.jpg'
    }];

  constructor() {}


  ngOnInit() {
  }
}
