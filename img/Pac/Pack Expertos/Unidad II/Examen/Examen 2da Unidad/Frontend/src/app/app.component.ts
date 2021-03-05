import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HashtagsComponent } from './components/hashtags/hashtags.component';
import { TiktoksComponent } from './components/tiktoks/tiktoks.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { AuthService } from './services/auth.service';
import { TiktoksService } from './services/tiktoks.service';
import { UsuariosService } from './services/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend';
  @ViewChild('listaTiktoks') tiktoksComponent: TiktoksComponent;
  @ViewChild('listaUsuarios') usuariosComponent: UsuariosComponent;
  @ViewChild('listaHashtags') hashtagsComponent: HashtagsComponent;

  isMenuCollapsed: boolean = true;
  // Modal Cuenta
  formularioCuenta = new FormGroup({
    usuario: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required])
  });
  urlImagen1 = "images/profile-pics/picoro.jpg";
  urlImagen2 = "images/profile-pics/androide_18.jpg";
  urlImagen3 = "images/profile-pics/baby.jpg";
  urlImagen4 = "images/profile-pics/chaozu.jpg";
  urlImagen5 = "images/profile-pics/patricio.jpg";
  imagenPerfilSeleccionada: any = null;
  isImagen: boolean = true;
  isEqualPassword: boolean = true;

  // Modal Login
  formularioLogin = new FormGroup({
    usuario: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });
  datosValidos: boolean = true;

  // Modal Tiktok
  formularioTiktok = new FormGroup({
    video: new FormControl('', [Validators.required]),
    hashtags: new FormControl('', [Validators.required]),
    mensaje: new FormControl('', [Validators.required]),
    tituloCancion: new FormControl('', [Validators.required])
  });

  constructor(
    private modalService: NgbModal,
    private tiktoksService: TiktoksService,
    private usuariosService: UsuariosService,
    private authService: AuthService
  ) { }

  ngOnInit(): void { }

  // Metodos GET
  get usuario() {
    return this.formularioCuenta.get('usuario');
  }

  get password() {
    return this.formularioCuenta.get('password');
  }

  get confirmPassword() {
    return this.formularioCuenta.get('confirmPassword');
  }

  get usuarioLogin() {
    return this.formularioLogin.get('usuario');
  }

  get passwordLogin() {
    return this.formularioLogin.get('password');
  }

  get video() {
    return this.formularioTiktok.get('video');
  }
  get hashtags() {
    return this.formularioTiktok.get('hashtags');
  }
  get mensaje() {
    return this.formularioTiktok.get('mensaje');
  }
  get tituloCancion() {
    return this.formularioTiktok.get('tituloCancion');
  }

  modalCrearCuenta(modal) {
    this.formularioCuenta.reset();
    this.modalService.open(
      modal,
      {
        centered: false
      }
    );
  }

  toggleActive(imagen) {
    this.imagenPerfilSeleccionada = imagen;
  }

  crearUsuario() {
    this.isEqualPassword = true;
    this.isImagen = true;
    if (this.password.value != this.confirmPassword.value) {
      this.isEqualPassword = false;
      return;
    }
    if (this.imagenPerfilSeleccionada == null) {
      this.isImagen = false;
      return;
    }
    let campoUsuario = (this.usuario.value).toLowerCase();
    let nombreUsuario = campoUsuario.charAt(0).toUpperCase() + campoUsuario.slice(1)
    const data = {
      usuario: campoUsuario,
      password: this.password.value,
      nombre: nombreUsuario,
      urlImagen: this.imagenPerfilSeleccionada
    }
    this.usuariosService.guardarUsuario(data)
      .subscribe(
        res => {
          // console.log(res);
          this.modalService.dismissAll();
        },
        error => console.log(error)
      );
  }

  modalLogin(modal) {
    this.formularioLogin.reset();
    this.modalService.open(
      modal,
      {
        centered: false
      }
    );
  }

  loginUsuario() {
    this.datosValidos = true;
    this.authService.loginUsuario(this.formularioLogin.value)
      .subscribe(
        res => {
          // console.log(res);
          if (res.mensaje == 'OK') {
            localStorage.setItem('idUsuario', res.data.idUsuario);
            localStorage.setItem('token', res.data.accessToken);
            this.modalService.dismissAll();
          }
        },
        error => {
          console.log(error);
          if (error.error.mensaje == 'No-Autorizado: Datos incorrectos') {
            this.datosValidos = false;
          }
        }
      )
  }

  modalUpload(modal) {
    this.formularioTiktok.reset();
    this.modalService.open(
      modal,
      {
        centered: false
      }
    );
  }

  publicarTiktok() {
    if (this.video.value != "0") {
      let array_hashtags = (this.hashtags.value).split(' ');
      const idUsuario = this.authService.getIDUsuario();
      const data = {
        idUsuario: idUsuario,
        video: this.video.value,
        hashtags: array_hashtags,
        mensaje: this.mensaje.value,
        tituloCancion: this.tituloCancion.value
      };
      this.tiktoksService.guardarTiktok(data)
      .subscribe(
        res => {
          console.log(res);
          // Renderizar tiktoks
          this.tiktoksComponent.cargarTiktoks();
          // Verificar nuevo hashtag
          //this.hashtagsComponent.verificarNuevoHashtag(res.hashtags)
          
        },
        error => console.log(error)
      )
    }
  }

  getAuthService() {
    return this.authService;
  }
}
