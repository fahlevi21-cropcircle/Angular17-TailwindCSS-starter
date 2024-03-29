import { Component, OnDestroy, OnInit } from '@angular/core';
import Typed from 'typed.js';
import { AboutComponent } from '../about/about.component';
import { ServiceComponent } from '../service/service.component';
import { ContactComponent } from '../contact/contact.component';
import { ProjectsComponent } from '../projects/projects.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [
    AboutComponent,
    ServiceComponent,
    ContactComponent,
    ProjectsComponent,
  ],
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
