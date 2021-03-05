import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/auth.service';
import { TiktoksService } from 'src/app/services/tiktoks.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-tiktoks',
  templateUrl: './tiktoks.component.html',
  styleUrls: ['./tiktoks.component.css']
})
export class TiktoksComponent implements OnInit {
  tiktoks: any = [];
  // Modal comentarios

  comentarios: any = [];
  idTiktokComentario: any;
  formularioComentario = new FormGroup({
    textComentario: new FormControl('', [Validators.required])
  });
  constructor(
    private modalService: NgbModal,
    private tiktoksService: TiktoksService,
    private usuariosService: UsuariosService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.cargarTiktoks();
  }

  // Metodos GET
  get textComentario() {
    return this.formularioComentario.get('textComentario');
  }

  cargarTiktoks() {
    this.tiktoksService.obtenerTiktoks()
      .subscribe(
        res => {
          // console.log(res);
          this.tiktoks = res;

        },
        error => console.log(error)
      );
  }

  cargarComentarios(idTiktok){
    this.tiktoksService.obtenerComentariosTiktok(idTiktok)
    .subscribe(
      res => {
        // console.log(res);
        let usuarios = res.usuario;
        this.comentarios = res.comentarios;
        for (let i = 0; i < this.comentarios.length; i++) {
          for (let j = 0; j < usuarios.length; j++) {
            if(usuarios[j].usuario == this.comentarios[i].usuario ){
              this.comentarios[i].urlImagen = usuarios[j].urlImagen;
            }
          }
        }
      },
      error => console.log(error)
    );
  }

  modalComentario(modal, idTiktok){
    this.idTiktokComentario = idTiktok;
    this.formularioComentario.reset();
    this.tiktoksService.obtenerComentariosTiktok(idTiktok)
    .subscribe(
      res => {
        // console.log(res);
        let usuarios = res.usuario;
        this.comentarios = res.comentarios;
        for (let i = 0; i < this.comentarios.length; i++) {
          for (let j = 0; j < usuarios.length; j++) {
            if(usuarios[j].usuario == this.comentarios[i].usuario ){
              this.comentarios[i].urlImagen = usuarios[j].urlImagen;
            }
          }
        }
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

  addComment(){
    const idUsuario = this.authService.getIDUsuario();
    this.usuariosService.obtenerUsuarioLogueado(idUsuario)
    .subscribe(
      user => {
        // console.log(user);
        const data = {
          usuario: user.usuario,
          comentario: this.textComentario.value
        };
        this.tiktoksService.guardarComentarioTiktok(this.idTiktokComentario, data)
        .subscribe(
          res => {
            // console.log(res);
            this.formularioComentario.reset();
            this.cargarComentarios(this.idTiktokComentario);
          },
          error => console.log(error)
        )
      },
      error => console.log(error)
    )
  }

  getAuthService() {
    return this.authService;
  }

}
