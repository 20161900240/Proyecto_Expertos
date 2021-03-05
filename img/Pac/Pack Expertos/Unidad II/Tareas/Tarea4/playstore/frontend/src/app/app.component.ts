import { Component, ViewChild } from '@angular/core';
import { ApplicationsComponent } from './components/applications/applications.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('header') headerComponent: HeaderComponent;
  @ViewChild('applications') applicationComponent: ApplicationsComponent;
  title = 'frontend';

  verCategoria(idCategoria) {
    this.headerComponent.idCategoriaActual = idCategoria;
  }

  recargarAplicaciones(idCategoria){
    this.applicationComponent.obtenerAplicaciones(idCategoria);
  }
}
