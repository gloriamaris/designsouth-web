import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fade-animation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss'],
  animations: [fadeAnimation]
})
export class ThankYouComponent implements OnInit {
  public isHomeUrl: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
    this.isHomeUrl = (this.router.url === '/');
  }

}
