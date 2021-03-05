import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: any = [];
  constructor(
    private usuariosService: UsuariosService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.renderUsuarios()
  }
  renderUsuarios() {
    this.usuarios = [];
    this.usuariosService.obtenerUsuarios()
      .subscribe(
        res => {
          // console.log(res);
          if(!this.authService.loggedIn()){
            this.usuarios = res;
          } else {
            const idUsuario = this.authService.getIDUsuario();
            for (let i = 0; i < res.length; i++) {
              //for (let j = 0; j < res[i].siguiendo.length; j++) {}
                if(res[i]._id != idUsuario){
                  this.usuarios.push(res[i]);
                }
            }
          }
        },
        error => console.log(error)
      )

  }
}
