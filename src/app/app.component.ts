import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio-definitivo';  

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    this.navegar('inicio');
  }

  navegar(menuClicado: string) {
    this.document.getElementById(menuClicado)?.scrollIntoView({behavior: "smooth"});
  }
}
