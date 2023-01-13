import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio-definitivo';  

  constructor(@Inject(DOCUMENT) private document: Document,
  private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('Daniel Castagna - Desenvolvedor Front End');
    this.navegar('inicio');    
  }

  navegar(menuClicado: string) {
    this.document.getElementById(menuClicado)?.scrollIntoView({behavior: "smooth"});
  }
}
