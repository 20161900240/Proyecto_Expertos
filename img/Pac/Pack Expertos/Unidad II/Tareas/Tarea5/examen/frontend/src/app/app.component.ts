import { Component, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriasService } from './services/categorias.service';
import { UsuariosService } from './services/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lugo';

  @ViewChild('modalCreacionCategoria') modalCreacionCategoria;
  @ViewChild('modalPedidos') modalPedidos;
  @ViewChild('modalCategorias') modalCategorias;
  @ViewChild('modalUser') modalUser;

  isMenuCollapsed: boolean = true;
  errorPedido: boolean = false;

  usuarios: any = [];
  idUsuarioSeleccionado: any;
  usuarioActual: any;
  categorias: any = [];
  categoriaDetalle: any;
  productoDetalle: any;
  cantidadProducto;

  formularioCategoria = new FormGroup({
    nombreCategoria: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required]),
    color: new FormControl('', [Validators.required, Validators.pattern("^#([a-fA-F0-9]){3}$|[a-fA-F0-9]{6}$")]),
    icono: new FormControl('', [Validators.required])
  });

  constructor(
    private modalService: NgbModal,
    private categoriasService: CategoriasService,
    private usuariosService: UsuariosService
  ) { }

  ngOnInit(): void {
    // Listar usuarios
    this.usuariosService.obtenerUsuarios()
      .subscribe(
        res => {
          this.usuarios = res;
        },
        error => console.log(error)
      );
    // Visualizar categorias
    this.cargarCategorias();
  }

  cargarCategorias() {
    this.categoriasService.obtenerCategorias()
      .subscribe(
        res => {
          this.categorias = res;
        },
        error => console.log(error)
      );
  }

  // Metodos GET
  get nombreCategoria() {
    return this.formularioCategoria.get('nombreCategoria');
  }
  get descripcion() {
    return this.formularioCategoria.get('descripcion');
  }
  get color() {
    return this.formularioCategoria.get('color');
  }
  get icono() {
    return this.formularioCategoria.get('icono');
  }

  // Ver ordenes de usuario actual
  verOrdenes() {
    // console.log('verOrdenes');
    if (this.usuarioActual != null) {
      this.modalService.open(this.modalUser, { size: 'lg' });
    }
  }

  crearCategoria() {
    // console.log('crearCategoria');
    this.formularioCategoria.reset();
    this.modalService.open(this.modalCreacionCategoria, { size: 'lg' });
  }

  guardarCategoria() {
    // console.log('guardar Categoria');
    this.categoriasService.guardarCategoria(this.formularioCategoria.value)
      .subscribe(
        res => {
          console.log(res);
          this.cargarCategorias();
          this.modalService.dismissAll();
        },
        error => console.log(error)
      )
  }

  // Seleccionar usuario
  cambiarUsuario() {
    // console.log('cambiar usuario');
    this.obtenerUsuarioActual(this.idUsuarioSeleccionado);
  }

  // Obtener informacion de usuario actual
  obtenerUsuarioActual(idUsuario) {
    if (idUsuario != null) {
      this.usuariosService.obtenerUsuario(idUsuario)
        .subscribe(
          res => {
            this.usuarioActual = res;
            // console.log(this.usuarioActual);
          },
          error => console.log(error)
        )
    }
  }

  // Ver detalles de categoria
  infoCategorias(categoria) {
    // console.log('ver información de categoría');
    this.categoriaDetalle = categoria
    this.modalService.open(this.modalCategorias,
      {
        size: 'xl'
      });
  }

  // Modal nuevo pedido
  pedir(producto) {
    // console.log('Nuevo Pedido');
    this.cantidadProducto = null;
    this.errorPedido = false;
    this.productoDetalle = producto;
    this.modalService.open(this.modalPedidos,
      {
        size: 'lg'
      });
  }

  // Guardar nuevo pedido
  agregarPedido() {
    if (this.idUsuarioSeleccionado != null &&
      this.cantidadProducto != null &&
      Number.isInteger(parseInt(this.cantidadProducto)) &&
      this.cantidadProducto > 0) {
      console.log('Orden valida')
      this.errorPedido = false;
      const orden = {
        nombreProducto: this.productoDetalle.nombreProducto,
        descripcion: this.productoDetalle.descripcion,
        cantidad: this.cantidadProducto,
        precio: this.productoDetalle.precio
      }
      this.usuariosService.guardarOrden(this.idUsuarioSeleccionado, orden)
        .subscribe(
          res => {
            console.log(res);
            // Para recargar ordenes
            this.obtenerUsuarioActual(this.idUsuarioSeleccionado);
            this.modalService.dismissAll();
          },
          error => console.log(error)
        )

    } else {
      this.errorPedido = true;
    }
  }

}

