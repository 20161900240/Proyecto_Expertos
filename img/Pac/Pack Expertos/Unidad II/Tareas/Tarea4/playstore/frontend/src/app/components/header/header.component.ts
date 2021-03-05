import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoriasService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() onGuardarAplicacion = new EventEmitter();
  isMenuCollapsed: boolean = true;
  idCategoriaActual: any;
  iconos: any = [];
  iconoURL: string;
  formularioAplicacion = new FormGroup({
    iconoApp: new FormControl('', [Validators.required]),
    nombreAplicacion: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required]),
    desarrollador: new FormControl('', [Validators.required]),
    precio: new FormControl('', [Validators.required]),
    descargas: new FormControl('', [Validators.required]),
    calificacion: new FormControl('', [Validators.required])
  });

  constructor(
    private modalService: NgbModal,
    private categoriasService: CategoriasService
  ) { }

  ngOnInit(): void {
    this.iconoURL = 'img/app-icons/null.png';
    for (let i = 1; i <= 50; i++) {
      this.iconos.push(`${i}.webp`);
    }
    //console.log(this.iconos);
  }

  // Metodos GET
  get iconoApp() {
    return this.formularioAplicacion.get('iconoApp');
  }

  get nombreAplicacion() {
    return this.formularioAplicacion.get('nombreAplicacion');
  }

  get descripcion() {
    return this.formularioAplicacion.get('descripcion');
  }

  get desarrollador() {
    return this.formularioAplicacion.get('desarrollador');
  }

  get precio() {
    return this.formularioAplicacion.get('precio');
  }

  get descargas() {
    return this.formularioAplicacion.get('descargas');
  }

  get calificacion() {
    return this.formularioAplicacion.get('calificacion');
  }

  visualizarImagen() {
    //console.log(this.iconoApp.value);
    if (this.iconoApp.value != '') {
      this.iconoURL = this.iconoApp.value;
    }
  }

  abrirModalNuevaApp(modal) {
    this.iconoURL = 'img/app-icons/null.png';
    this.formularioAplicacion.reset();
    this.modalService.open(
      modal,
      {
        centered: false
      }
    )
  }

  // Guardar aplicacion en la categoria seleccionada
  guardarAplicacion() {
    const data = {
      nombre: this.nombreAplicacion.value,
      descripcion: this.descripcion.value,
      icono: this.iconoApp.value,
      calificacion: this.calificacion.value,
      descargas: this.descargas.value,
      precio: this.precio.value,
      desarrollador: this.desarrollador.value
    }
    if (this.idCategoriaActual != null && this.idCategoriaActual != 'noValue') {
      this.categoriasService.guardarAplicacion(this.idCategoriaActual, data)
        .subscribe(
          res => {
            if (res.ok === 1) {
              this.onGuardarAplicacion.emit(this.idCategoriaActual);
              this.formularioAplicacion.reset();
              this.modalService.dismissAll();
            }
          },
          error => console.log(error)
        )
    }
  }

}
