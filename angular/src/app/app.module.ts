import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { VideoJuegoComponent } from './video_juego/videoJuego.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [ //declaraciones se cargan los comoponentes
    AppComponent,
    VideoJuegoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
