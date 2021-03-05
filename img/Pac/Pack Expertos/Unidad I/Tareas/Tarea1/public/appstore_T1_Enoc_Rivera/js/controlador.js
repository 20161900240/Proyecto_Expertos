//Codigo para generar información de categorias y almacenarlas en un arreglo.
var categorias = [];
//Variable para mantener el indice de la categoria seleccionada, inicialmente en categoria 0
var indiceCategoria = 0;
//Variable para mantener el codigo de la ultima aplicacion ingresada
var ultimo_codigo = 0;
// Uso de LocalStorage
var localStorage = window.localStorage;
(() => {
    //Este arreglo es para generar textos de prueba
    let textosDePrueba = [
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
        "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
        "Quaerat quod qui molestiae sequi, sint aliquam omnis quos voluptas?",
        "Non impedit illum eligendi voluptas. Delectus nisi neque aspernatur asperiores.",
        "Ducimus, repellendus voluptate quo veritatis tempora recusandae dolorem optio illum."
    ]

    //Genera dinamicamente los JSON de prueba para esta evaluacion,
    //Primer ciclo para las categorias y segundo ciclo para las apps de cada categoria


    let contador = 1;
    for (let i = 0; i < 5; i++) { //Generar 5 categorias
        let categoria = {
            nombreCategoria: "Categoria " + i,
            descripcion: textosDePrueba[Math.floor(Math.random() * (5 - 1))],
            aplicaciones: []
        };
        for (let j = 0; j < 10; j++) { //Generar 10 apps por categoria
            let aplicacion = {
                codigo: contador,
                nombre: "App " + contador,
                precio: "$" + (Math.random() * 2).toFixed(2),
                descripcion: textosDePrueba[Math.floor(Math.random() * (5 - 1))],
                icono: `img/app-icons/${contador}.webp`,
                instalada: contador % 3 == 0 ? true : false,
                app: "app/demo.apk",
                calificacion: Math.floor(Math.random() * (5 - 1)) + 1,
                descargas: 1000,
                desarrollador: `Desarrollador ${(i+1)*(j+1)}`,
                imagenes: ["img/app-screenshots/1.webp", "img/app-screenshots/2.webp", "img/app-screenshots/3.webp"],
                comentarios: [{
                        comentario: textosDePrueba[Math.floor(Math.random() * (5 - 1))],
                        calificacion: Math.floor(Math.random() * (5 - 1)) + 1,
                        fecha: "12/12/2012",
                        usuario: "Juan"
                    },
                    {
                        comentario: textosDePrueba[Math.floor(Math.random() * (5 - 1))],
                        calificacion: Math.floor(Math.random() * (5 - 1)) + 1,
                        fecha: "12/12/2012",
                        usuario: "Pedro"
                    },
                    {
                        comentario: textosDePrueba[Math.floor(Math.random() * (5 - 1))],
                        calificacion: Math.floor(Math.random() * (5 - 1)) + 1,
                        fecha: "12/12/2012",
                        usuario: "Maria"
                    },
                ]
            };
            contador++;
            ultimo_codigo++;
            categoria.aplicaciones.push(aplicacion);
        }
        categorias.push(categoria);
    }
    //Guardar categorias en LocalStorage al cargar pagina la primera vez
    if (localStorage.getItem('categorias') == null) {
        localStorage.setItem('categorias', JSON.stringify(categorias)); // de JSON a cadena
    } else {
        categorias = JSON.parse(localStorage.getItem('categorias')); // de cadena a JSON
    }
    //console.log(categorias);
    //Generar el select de categorias
    for (let i = 0; i < categorias.length; i++) {
        document.getElementById('categoria').innerHTML += `
            <option value="${categorias[i].nombreCategoria}">${categorias[i].nombreCategoria}</option>
        `;
    }
    //Generar aplicaciones iniciales
    generarAplicaciones(categorias[indiceCategoria].nombreCategoria)
})();
//Validar campo vacio al agregar nueva app
function validarCampoVacio(id) {
    let campo = document.getElementById(id);
    if (campo.value == "") {
        campo.classList.add('input-error');
        return false;
    } else {
        campo.classList.remove('input-error');
    }
    return true;
}
//Funcion para generar aplicaciones de acuerdo a la categoria
function generarAplicaciones(nombreCategoria) {
    indiceCategoria = parseInt(nombreCategoria.substring(10));
    document.getElementById('categoria-app').innerHTML = categorias[indiceCategoria].nombreCategoria;
    let estrellas_vacias = 0;
    let estrellas_llenas = 0;
    //Limpiamos contenido al inicio
    document.getElementById('aplicaciones').innerHTML = '';
    for (let i = 0; i < categorias[indiceCategoria].aplicaciones.length; i++) {
        let html_estrellas = '';
        let precio = parseFloat(categorias[indiceCategoria].aplicaciones[i].precio.substring(1));
        estrellas_vacias = 5 - categorias[indiceCategoria].aplicaciones[i].calificacion;
        estrellas_llenas = 5 - estrellas_vacias;
        //Generar estrellas en base a la calificacion
        for (let j = 0; j < parseInt(estrellas_llenas); j++) {
            html_estrellas += `<i class="fas fa-star"></i>`;
        }
        for (let k = 0; k < parseInt(estrellas_vacias); k++) {
            html_estrellas += `<i class="far fa-star"></i>`;
        }
        //El precio en caso de ser menor a 0.5 mostrar el texto FREE
        if (precio < 0.5) {
            precio = 'FREE';
        } else {
            precio = categorias[indiceCategoria].aplicaciones[i].precio;
        }
        document.getElementById('aplicaciones').innerHTML += `
        <div class="col-sm-6 col-md-3 col-xl-2 d-flex mb-3">
            <div class="card flex-fill" onclick="mostrarModalApp(${i})">
                <img class="card-img-top" src="${categorias[indiceCategoria].aplicaciones[i].icono}">
                <div class="card-body">
                    <h5 class="card-title">${categorias[indiceCategoria].aplicaciones[i].nombre}</h5>
                    <p class="card-text">${categorias[indiceCategoria].aplicaciones[i].desarrollador}</p>
                    ${html_estrellas}
                    <p class="card-price">${precio}</p>
                </div>
            </div>
        </div>
        `;
    }
}

//Seleccionar categoria y generar aplicaciones de acuerdo a la categoria seleccionada
function cambiarCategoria() {
    let categoriaSeleccionada = document.getElementById('categoria').value;
    generarAplicaciones(categoriaSeleccionada);
};
// Generar lista de imagenes para modal de nueva app
// Contenido de select en modal
document.getElementById('lista-imagenes').innerHTML = `<option value="">Seleccionar Imagen</option>`
for (let i = 1; i <= 50; i++) {
    document.getElementById('lista-imagenes').innerHTML += `
        <option value="img/app-icons/${i}.webp">Imagen ${i}</option>
    `;
}
//Funcion que abre la ventana modal y muestra sus respectivos datos de acuerdo a la aplicacion seleccionada
function mostrarModalApp(codigoAplicacion) {
    let precio = parseFloat(categorias[indiceCategoria].aplicaciones[codigoAplicacion].precio.substring(1));
    let estrellas_vacias = 0;
    let estrellas_llenas = 0;
    let html_estrellas = '';
    let html_comentarios = '';
    //El precio en caso de ser menor a 0.5 mostrar el texto FREE
    if (precio < 0.5) {
        precio = 'FREE';
    } else {
        precio = categorias[indiceCategoria].aplicaciones[codigoAplicacion].precio;
    }
    //Generar estrellas en base a la calificacion
    estrellas_vacias = 5 - categorias[indiceCategoria].aplicaciones[codigoAplicacion].calificacion;
    estrellas_llenas = 5 - estrellas_vacias;
    for (let j = 0; j < parseInt(estrellas_llenas); j++) {
        html_estrellas += `<i class="fas fa-star"></i>`;
    }
    for (let k = 0; k < parseInt(estrellas_vacias); k++) {
        html_estrellas += `<i class="far fa-star"></i>`;
    }
    //Comentarios de la aplicacion seleccionada
    for (let i = 0; i < categorias[indiceCategoria].aplicaciones[codigoAplicacion].comentarios.length; i++) {
        html_comentarios += `
        <hr>
        <img src="img/user.webp" class="imgUser-modal float-left mb-2">
        <div class="comentarios-modal">
            <p>${categorias[indiceCategoria].aplicaciones[codigoAplicacion].comentarios[i].usuario}</p>
            <p class="text-secondary">${categorias[indiceCategoria].aplicaciones[codigoAplicacion].comentarios[i].comentario}</p>
        </div>
        `;
    }
    //Generamos los datos de acuerdo al codigo de la aplicacion
    //Modal Carousel
    //Verificar si el arreglo imagenes de screenshot no esta vacio
    if (categorias[indiceCategoria].aplicaciones[codigoAplicacion].imagenes.length != 0) {
        document.getElementById('carouselImageControls').innerHTML = `
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src="${categorias[indiceCategoria].aplicaciones[codigoAplicacion].imagenes[0]}" class="d-block w-100" alt="screenshot-1">
            </div>
            <div class="carousel-item">
            <img src="${categorias[indiceCategoria].aplicaciones[codigoAplicacion].imagenes[1]}" class="d-block w-100" alt="screenshot-2">
            </div>
            <div class="carousel-item">
            <img src="${categorias[indiceCategoria].aplicaciones[codigoAplicacion].imagenes[2]}" class="d-block w-100" alt="screenshot-3">
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselImageControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselImageControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
        `;
    }
    //Modal App Info
    document.getElementById('modalApp-info').innerHTML = `
        <hr>
        <div>
            <img src="${categorias[indiceCategoria].aplicaciones[codigoAplicacion].icono}" class="imgApp-modal float-left mb-2">
            <div class="datosApp-modal">
                <h2 class="card-title">${categorias[indiceCategoria].aplicaciones[codigoAplicacion].nombre}</h2>
                <p class="card-text">${categorias[indiceCategoria].aplicaciones[codigoAplicacion].desarrollador}</p>
                <p>${categorias[indiceCategoria].aplicaciones[codigoAplicacion].descripcion}</p>
                <p class="card-price">${precio}</p>
            </div>
        </div>
        <hr>
        <div class="text-center">
            ${html_estrellas}
        </div>
        ${html_comentarios}
    `;
    if (categorias[indiceCategoria].aplicaciones[codigoAplicacion].instalada) {
        document.getElementById('btn-instalar').style.display = 'none';
    } else {
        document.getElementById('btn-instalar').style.display = 'block';
    }
    //console.log(categorias[indiceCategoria].aplicaciones[codigoAplicacion].instalada);
    $('#modalAplicacion').modal('show');
};
//Funcion para guardar datos de la nueva app
function guardarNuevaApp() {
    if (!(document.getElementById('calificacion-app').value >= 0 &&
            document.getElementById('calificacion-app').value <= 5)) {
        document.getElementById('calificacion-app').value = 0;
    }
    const nueva_app = {
        codigo: ultimo_codigo + 1,
        nombre: document.getElementById('nombre-app').value,
        precio: "$" + parseFloat(document.getElementById('precio-app').value).toFixed(2),
        descripcion: document.getElementById('descripcion-app').value,
        icono: document.getElementById('lista-imagenes').value,
        instalada: (ultimo_codigo + 1) % 3 == 0 ? true : false,
        app: "app/demo.apk",
        calificacion: document.getElementById('calificacion-app').value,
        descargas: 1000,
        desarrollador: document.getElementById('desarrollador-app').value,
        imagenes: [],
        comentarios: []
    };
    let campo1 = validarCampoVacio('nombre-app');
    let campo2 = validarCampoVacio('precio-app');
    let campo3 = validarCampoVacio('descripcion-app');
    let campo4 = validarCampoVacio('lista-imagenes');
    let campo5 = validarCampoVacio('calificacion-app');
    let campo6 = validarCampoVacio('desarrollador-app');
    if (campo1 && campo2 && campo3 && campo4 && campo5 && campo6) {
        categorias[indiceCategoria].aplicaciones.push(nueva_app);
        ultimo_codigo++;
        // Guardamos en LocalStorage la nueva app
        localStorage.setItem('categorias', JSON.stringify(categorias)); // de JSON a cadena
        generarAplicaciones(categorias[indiceCategoria].nombreCategoria);
        $('#modalNuevaApp').modal('hide');
        limpiarModalNuevaApp();
    }

}

function eliminarApp() {
    let categoria_temp = null;
    let aplicacion_temp = null;
    let codigoValido = false;
    let codigoApp = prompt("Por favor, ingrese codigo de la aplicacion a eliminar:");
    if(codigoApp == null || codigoApp == ""){
        return;
    }else{
        for (let i = 0; i < categorias.length; i++) { //Categorias
            for (let j = 0; j < categorias[i].aplicaciones.length; j++) { //Aplicaciones por Categoria
                if(categorias[i].aplicaciones[j].codigo == codigoApp){
                    codigoValido = true;
                    categoria_temp = i;
                    aplicacion_temp = j;
                    break;
                }
            }
        }
    }
    if (codigoValido) {
        if (confirm(`¿Seguro de que quieres eliminar la aplicacion ${categorias[categoria_temp].aplicaciones[aplicacion_temp].nombre}?`)) {
            categorias[categoria_temp].aplicaciones.splice(aplicacion_temp, 1); //Elimina la aplicacion con el indice -> splice(index, deleteCount)
            localStorage.setItem('categorias', JSON.stringify(categorias)); // de JSON a cadena
            generarAplicaciones(categorias[indiceCategoria].nombreCategoria);
        }   
    } else {
        alert("Error: No se encontro App con el codigo ingresado");
    }
}

function limpiarModalNuevaApp() {
    document.getElementById('nombre-app').value = '';
    document.getElementById('precio-app').value = '';
    document.getElementById('descripcion-app').value = '';
    document.getElementById('lista-imagenes').value = '';
    document.getElementById('calificacion-app').value = '';
    document.getElementById('desarrollador-app').value = '';
    document.getElementById('nombre-app').classList.remove('input-error');
    document.getElementById('precio-app').classList.remove('input-error');
    document.getElementById('descripcion-app').classList.remove('input-error');
    document.getElementById('lista-imagenes').classList.remove('input-error');
    document.getElementById('calificacion-app').classList.remove('input-error');
    document.getElementById('desarrollador-app').classList.remove('input-error');
}