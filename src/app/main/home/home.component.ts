import { Component, OnDestroy, OnInit } from '@angular/core';
import Typed from 'typed.js';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [AboutComponent],
})
export class HomeComponent implements OnInit, OnDestroy {
  typed: Typed;
  constructor() {}

  ngOnDestroy(): void {
    this.typed.destroy();
  }

  ngOnInit() {
    this.typed = new Typed('#text', {
      strings: [
        'Developer',
        'Programmer',
        'Engineer',
        'Scientist',
        'Photographer',
      ],
      typeSpeed: 80,
      loop: true,
    });

    // typed.start();
  }
}
