import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-revelation-tea',
    templateUrl: 'revelation-tea.component.html',
    styleUrls: ['revelation-tea.component.scss']
})
export class RevelationTeaComponent implements OnInit{
    msg1 = "Meyry e Dan estão esperando";
    msg2 = "";// = "Mas ainda não sabemos se é um menino ou uma menina.";
    msg3 = "";
    msg4 = "";

    showButtons = false;

    ngOnInit(): void {
        setTimeout(() => {
            this.msg2 = " um bebê! Mas ainda não";
        }, 3500);

        setTimeout(() => {
            this.msg3 = " sabemos se é um menino";
        }, 7000);

        setTimeout(() => {
            this.msg4 = " ou uma menina! O que acha?";
        }, 10500);

        setTimeout(() => {
            this.showButtons = true;
        }, 14000);
    }
}