import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fade-animation';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss'],
  animations: [fadeAnimation]
})
export class ThankYouComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
