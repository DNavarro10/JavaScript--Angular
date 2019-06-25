import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'video_juego',
    templateUrl: './videoJuego.component.html',
    styleUrls: ['./videoJuego.component.scss']
})
export class VideoJuegoComponent implements OnInit {
    //propiedades
    public titulo: string;
    public listado: string;
    constructor() {
        this.titulo = "Titulo exportado desde el componente";
        this.listado = "Listado ficticio";
        //se pueden imprimir polarizando {{}}
        console.log('cargado el componente');
    }

    ngOnInit(): void { }
}
