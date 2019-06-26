import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';

@Component({
    selector: 'video_juego',
    templateUrl: './videoJuego.component.html',
    styleUrls: ['./videoJuego.component.sass']
})
export class VideoJuegoComponent implements OnInit, OnChanges,OnDestroy {
    //propiedades
    public titulo: string;
    public listado: string;
    constructor() {
        this.titulo = "Titulo exportado desde el componente";
        this.listado = "Listado ficticio";
        //se pueden imprimir polarizando {{}}
        console.log('cargado el componente desde constructor');
    }

    ngOnInit(){ 
        console.log("onIni ejecutado");
    }
    ngDoCheck(): void {
        //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
        //Add 'implements DoCheck' to the class.
        
    }
    ngOnChanges(): void {
        
        
    }
    ngOnDestroy(): void {
        console.log("OnDestroy ejecutado");
    }
    //funcion
    cambiarTitulo(){
        this.titulo = ("Titulo cambiado desde funcion");
    }
    
}
