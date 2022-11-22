import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {
  transition,
  trigger,
  style,
  animate,
  state,
} from '@angular/animations';

const scale = trigger('scale', [
  state('scaleIn', style({ transform: 'scale(1)' })),
  state('scaleOut', style({ transform: 'scale(1.7)' })),
  transition('scaleIn <=> scaleOut', animate('2000ms linear')),
]);

@Component({
  selector: 'app-carousel-holder',
  templateUrl: './carousel-holder.component.html',
  styleUrls: ['./carousel-holder.component.css'],
  animations: [scale],
})
export class CarouselHolderComponent {
  customOptions: OwlOptions = {
    loop: true,
    center: true,
    margin: 50,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 500,
    animateOut: 'animate__animated animate__slideOutDown',
    animateIn: 'animate__animated animate__flipInX',
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
    },
    nav: true,
  };
  public scale = 'scaleIn';

  public toggleScale() {
    this.scale = this.scale === 'scaleIn' ? 'scaleOut' : 'scaleIn';
  }
}
