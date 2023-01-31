import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeaTableDBService } from '../../seatable-database/services/seatable-db.service';

@Component({
    selector: 'app-main-page',
    templateUrl: 'main-page.component.html',
    styleUrls: ['main-page.component.scss']
})
export class MainPageComponent implements OnInit {
    title = 'portfolio-definitivo';  

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.navegar('inicio');
  }

  navegar(menuClicado: string) {
    this.document.getElementById(menuClicado)?.scrollIntoView({behavior: "smooth"});
  }

  goToPage() {
    this.router.navigate(['projects/responsivity-app']);
  }
}