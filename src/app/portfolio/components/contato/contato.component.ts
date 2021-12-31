import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-contato',
    templateUrl: 'contato.component.html',
    styleUrls: ['contato.component.scss']
})
export class ContatoComponent implements OnInit {
    ngOnInit(): void {
    }

    msgMe(app: string) {
        switch(app) {
            case 'whatsapp':
                window.open('https://api.whatsapp.com/send?phone=5527997909923', "_blank");
                break;
            case 'instagram':
                window.open('https://www.instagram.com/umr.daniel/', "_blank");
                break;
            case 'linkedin':
                window.open('https://www.linkedin.com/in/daniel-castagna-vieira-aa738319b/', "_blank");
                break;
        }
    }
}