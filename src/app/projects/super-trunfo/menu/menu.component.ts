import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { MenuItem } from "../../models/super-trunfo.model";
import { SuperTrunfoService } from "../../services/super-trunfo.service";

@Component({
    selector: 'app-super-trunfo-menu',
    templateUrl: 'menu.component.html',
    styleUrls: ['menu.component.scss']
})
export class MenuComponent implements OnInit {
    @Output() selectItemEvent = new EventEmitter<MenuItem>();
    MenuItem = MenuItem;
    
    constructor(
        private service: SuperTrunfoService
    ){}

    ngOnInit(): void {}

    selectMenuItem(clickedMenu) {
        this.selectItemEvent.emit(clickedMenu);
    }
}