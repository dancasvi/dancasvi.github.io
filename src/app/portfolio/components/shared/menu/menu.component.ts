import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-menu',
    templateUrl: 'menu.component.html',
    styleUrls: ['menu.component.scss']
})
export class MenuComponent {
    exibirMenu = false;
    @Output() eventoNavegar = new EventEmitter<string>();

    toggleMenu() {
        this.exibirMenu = !this.exibirMenu;
    }

    navegar(menuClicado: string) {
        this.exibirMenu = false;
        this.eventoNavegar.emit(menuClicado);
    }
}