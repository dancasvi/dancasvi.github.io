import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
    selector: 'app-main-page',
    templateUrl: 'main-page.component.html',
    styleUrls: ['main-page.component.scss']
})
export class MainPageComponent implements OnInit {
    title = 'portfolio-definitivo';  

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    this.navegar('inicio');
  }

  navegar(menuClicado: string) {
    this.document.getElementById(menuClicado)?.scrollIntoView({behavior: "smooth"});
  }
}