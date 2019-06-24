import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'video_juego',
    templateUrl: './videoJuegocomponente.component.html',
    styleUrls: ['./name.component.scss']
})
export class VideoJuegoComponent implements OnInit {
    constructor() {
        console.log('cargado el componente');
     }

    ngOnInit(): void { }
}
