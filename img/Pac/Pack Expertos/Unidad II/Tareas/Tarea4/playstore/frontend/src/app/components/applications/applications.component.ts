import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { CategoriasService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css'],
  providers: [NgbCarouselConfig]
})
export class ApplicationsComponent implements OnInit {
  @Output() onSeleccionarCategoria = new EventEmitter();
  categorias: any = [];
  aplicaciones: any = [];
  idCategoriaSeleccionada: any;
  appSeleccionada: any = {};
  idAppSeleccionada: any;

  formularioComentario = new FormGroup({
    comentario: new FormControl('', [Validators.required])
  });

  constructor(private modalService: NgbModal, private config: NgbCarouselConfig, private categoriasService: CategoriasService) {
    config.interval = 3000;
    config.keyboard = true;
    config.showNavigationArrows = true;
    config.showNavigationIndicators = false;
    config.pauseOnHover = true;
    config.pauseOnFocus = false;
  }

  ngOnInit(): void {
    this.categoriasService.obtenerCategorias()
      .subscribe(
        res => {
          this.categorias = res;
          //console.log(this.categorias);
        },
        error => console.log(error)
      );
  }
  // Metodo GET
  get comentario() {
    return this.formularioComentario.get('comentario');
  }

  seleccionarCategoria() {
    //console.log("Cambio idCategoria ", this.idCategoriaSeleccionada);
    if (this.idCategoriaSeleccionada != null && this.idCategoriaSeleccionada != 'noValue') {
      this.obtenerAplicaciones(this.idCategoriaSeleccionada);
      this.onSeleccionarCategoria.emit(this.idCategoriaSeleccionada);
    } else {
      this.aplicaciones = [];
    }
  }

  //Obtener aplicaciones por categoria
  obtenerAplicaciones(idCategoria) {
    this.categoriasService.obtenerAplicacionesPorCategoria(idCategoria)
      .subscribe(
        res => {
          this.aplicaciones = res;
          //console.log(this.aplicaciones);
        },
        error => console.log(error)
      );
  }

  // Generar estrellas en base a la calificacion
  generarEstrellas(calificacion) {
    let estrellas = '';
    for (let k = 0; k < calificacion; k++) {
      estrellas += `<i class="fas fa-star"></i>`;
    }
    for (let k = 0; k < 5 - calificacion; k++) {
      estrellas += `<i class="far fa-star"></i>`;
    }
    return estrellas;
  }

  // Detalle de aplicacion en la ventana modal
  detalleAplicacion(modal, idAplicacion) {
    this.idAppSeleccionada = idAplicacion;
    this.categoriasService.obtenerDetalleAplicacion(this.idCategoriaSeleccionada, idAplicacion)
      .subscribe(
        res => {
          this.appSeleccionada = res;
          //console.log(this.appSeleccionada);
          this.modalService.open(
            modal,
            {
              centered: false
            }
          );
        },
        error => console.log(error)
      );
  }

  pulsarTecla(keyEvent) {
    if (keyEvent.which === 13 && this.formularioComentario.valid) {
      this.guardarComentario(this.idAppSeleccionada);
    }
  }

  // Guardar comentario
  guardarComentario(idAplicacion) {
    const data = {
      comentario: this.comentario.value,
      calificacion: 4,
      fecha: '12/12/2012',
      usuario: 'Anónimo'
    }
    this.categoriasService.guardarComentario(this.idCategoriaSeleccionada, idAplicacion, data)
      .subscribe(
        res => {
          if (res.ok === 1) {
            this.formularioComentario.reset();
            this.categoriasService.obtenerDetalleAplicacion(this.idCategoriaSeleccionada, idAplicacion)
              .subscribe(
                res => {
                  this.appSeleccionada = res;
                },
                error => console.log(error)
              );
          }
        },
        error => console.log(error)
      )
  }
}
