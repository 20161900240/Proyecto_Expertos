import { Component, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DetallePreguntasComponent } from './components/detalle-preguntas/detalle-preguntas.component';
import { ListaPreguntasComponent } from './components/lista-preguntas/lista-preguntas.component';
import { UsuariosService } from './services/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  @ViewChild('listaPreguntas') listaPreguntasComponent: ListaPreguntasComponent;
  @ViewChild('detallePreguntas') detallePreguntasComponent: DetallePreguntasComponent;
  regionVisible: string = 'listaPreguntas';
  isMenuCollapsed: boolean = true;
  imagenUsuarioActual: string = 'img/profile-pics/user.webp';
  idUsuarioActual: any;
  usuarios: any = [];

  constructor(private modalService: NgbModal, private usuariosService: UsuariosService) { }

  // Ventana modal de usuarios
  modalUsuario(modal) {
    this.usuariosService.obtenerUsuarios()
      .subscribe(
        res => {
          this.usuarios = res;
          console.log(this.usuarios);
        },
        error => console.log(error)
      )
    this.modalService.open(
      modal,
      {
        centered: false
      }
    );
  }

  verDetallePregunta(pregunta) {
    this.detallePreguntasComponent.detallePregunta = pregunta;
    this.detallePreguntasComponent.cargarRespuestas();
    this.regionVisible = 'detallePregunta';
  }

  seleccionarUsuario(usuario) {
    this.idUsuarioActual = usuario._id;
    this.listaPreguntasComponent.idUsuario = usuario._id;
    this.imagenUsuarioActual = usuario.urlImagen;
    this.modalService.dismissAll();
  }
}
