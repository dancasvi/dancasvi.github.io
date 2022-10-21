import { Component, Input, OnInit } from '@angular/core';
import { MarvelAppService } from '../../services/marvel-app.service';

@Component({
    selector: 'marvel-app-modal',
    templateUrl: 'marvel-app-modal.component.html',
    styleUrls: ['marvel-app-modal.component.scss']
})
export class MarvelAppModalComponent implements OnInit {

    @Input() selected = 
    {
        id: '',
        entity: ''
    };
    
    element = 
    {
        title: '',
        imgUrl: '',
        description: ''
    }

    showModal = false;

    constructor(
        private marvelAppService: MarvelAppService
    ){}

    ngOnInit(): void {
    }

    toggleModal() {
        this.showModal = !this.showModal;
    }

    resetModal() {
        this.element = 
        {
            title: '',
            imgUrl: '',
            description: ''
        }
    }
}