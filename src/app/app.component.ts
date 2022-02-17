import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'superHeroesApp';
  constructor(@Inject(DOCUMENT) private document: Document) {

  }

  onScroll() {
    const yOffet = window.pageXOffset;
    const scrollTop = this.document.documentElement.scrollTop;
    console.log(yOffet || scrollTop > 500);
  }
}
