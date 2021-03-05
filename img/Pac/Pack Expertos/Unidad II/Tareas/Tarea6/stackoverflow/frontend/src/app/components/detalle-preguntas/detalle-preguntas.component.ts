import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PreguntasService } from 'src/app/services/preguntas.service';

@Component({
  selector: 'app-detalle-preguntas',
  templateUrl: './detalle-preguntas.component.html',
  styleUrls: ['./detalle-preguntas.component.css']
})
export class DetallePreguntasComponent implements OnInit {
  @Output() onVerPreguntas = new EventEmitter();
  detallePregunta: any;
  array_respuestas: any = [];
  constructor(private preguntasService:PreguntasService) { }

  ngOnInit(): void {
  }

  cargarRespuestas(){
    if(this.detallePregunta != null){
      this.preguntasService.obtenerRespuestas(this.detallePregunta._id)
      .subscribe(
        res => {
          let usuario = res.usuario
          this.array_respuestas = res.respuestas;
          for (let i = 0; i < this.array_respuestas.length; i++) {
            for (let j = 0; j < usuario.length; j++) {
              if(usuario[j]._id == this.array_respuestas[i].idUsuario ){
                this.array_respuestas[i].usuario = usuario[j];
              }
            }
          }
          // console.log(this.array_respuestas);
        },
        error => console.log(error)
      )
    }
  }

  verPreguntas() {
    this.onVerPreguntas.emit('listaPreguntas');
  }



}
