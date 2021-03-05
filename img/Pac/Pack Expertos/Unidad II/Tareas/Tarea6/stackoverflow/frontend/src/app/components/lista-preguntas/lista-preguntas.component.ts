import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PreguntasService } from 'src/app/services/preguntas.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-lista-preguntas',
  templateUrl: './lista-preguntas.component.html',
  styleUrls: ['./lista-preguntas.component.css']
})
export class ListaPreguntasComponent implements OnInit {
  @Output() onVerDetallePregunta = new EventEmitter();
  idUsuario: any;
  preguntas: any = [];
  formularioPregunta = new FormGroup({
    titulo: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required]),
    hashtags: new FormControl('', [Validators.required])
  });

  constructor(
    private modalService: NgbModal,
    private preguntasService: PreguntasService,
    private usuariosService: UsuariosService
  ) { }

  ngOnInit(): void {
    this.cargarPreguntas();
  }
  // Renderizar preguntas
  cargarPreguntas() {
    this.preguntasService.obtenerPreguntas()
      .subscribe(
        res => {
          this.preguntas = res;
          // console.log(this.preguntas);
        },
        error => console.log(error)
      )
  }

  verDetallePregunta(pregunta){
    this.onVerDetallePregunta.emit(pregunta);
  }

  // Metodos GET
  get titulo() {
    return this.formularioPregunta.get('titulo');
  }
  get descripcion() {
    return this.formularioPregunta.get('descripcion');
  }
  get hashtags() {
    return this.formularioPregunta.get('hashtags');
  }

  modalPregunta(modal) {
    this.formularioPregunta.reset();
    this.modalService.open(
      modal,
      {
        centered: false
      }
    );
  }

  publicarPregunta() {
    let array_hashtags = (this.hashtags.value).split(' ');
    if (this.idUsuario != null) {
      const dataPreguntas = {
        titulo: this.titulo.value,
        descripcion: this.descripcion.value,
        hashtags: array_hashtags,
        idUsuario: this.idUsuario
      };
      let dataUsuario = {
        idPregunta: '',
        titulo: this.titulo.value
      }
      this.preguntasService.guardarPregunta(dataPreguntas)
        .subscribe(
          res => {
            // console.log(res);
            dataUsuario.idPregunta = res._id;
            this.usuariosService.modificarPreguntasDeUsuario(dataUsuario, this.idUsuario)
              .subscribe(
                res => {
                  this.cargarPreguntas();
                  this.modalService.dismissAll();
                },
                error => console.log(error)
              )
          },
          error => console.log(error)
        );
    }
  }

}
