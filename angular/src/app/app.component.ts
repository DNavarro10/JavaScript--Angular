import { Component } from '@angular/core';

//decorador
@Component({
  selector: 'app-root', //carga el componente en etiqueta html
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angular';
}
