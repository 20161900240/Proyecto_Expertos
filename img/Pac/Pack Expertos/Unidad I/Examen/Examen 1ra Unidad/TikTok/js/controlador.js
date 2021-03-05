var usuarios = [/*{
        usuario: 'goku',
        password: 'asd.456',
        nombre: 'Son Goku',
        imagenPerfil: 'profile-pics/goku.jpg',
        seguidores: ['krilin', 'bulma', 'vegeta'],
        siguiendo: ['dende', 'gohan', 'goten']
    },
    {
        usuario: 'vegeta',
        password: 'asd.456',
        nombre: 'Vegeta',
        imagenPerfil: 'profile-pics/vegeta.jpg',
        seguidores: ['krilin', 'bulma'],
        siguiendo: ['goku', 'bulma', 'krilin']
    },
    {
        usuario: 'bulma',
        password: 'asd.456',
        nombre: 'Bulma',
        imagenPerfil: 'profile-pics/bulma.jpg',
        seguidores: ['krilin', 'vegeta', 'gohan', 'dende'],
        siguiendo: ['vegeta', 'goku', 'krilin', 'gohan']
    },
    {
        usuario: 'krilin',
        password: 'asd.456',
        nombre: 'Krilin',
        imagenPerfil: 'profile-pics/krilin.jpg',
        seguidores: ['gohan', 'bulma', 'vegeta'],
        siguiendo: ['goku', 'bulma', 'vegeta', 'gohan']
    },
    {
        usuario: 'gohan',
        password: 'asd.456',
        nombre: 'Son Gohan',
        imagenPerfil: 'profile-pics/gohan.jpg',
        seguidores: ['goku', 'bulma', 'krilin', 'dende', 'goten'],
        siguiendo: ['bulma', 'krilin', 'dende', 'goten']
    },
    {
        usuario: 'dende',
        password: 'asd.456',
        nombre: 'Dende',
        imagenPerfil: 'profile-pics/dende.jpg',
        seguidores: ['goku', 'gohan', 'goten'],
        siguiendo: ['goten', 'bulma', 'gohan']
    },
    {
        usuario: 'goten',
        password: 'asd.456',
        nombre: 'Goten',
        imagenPerfil: 'profile-pics/goten.png',
        seguidores: ['goku', 'dende', 'gohan'],
        siguiendo: ['dende', 'gohan']
    }*/
]

var tiktoks = [/*{
        usuario: 'goku',
        titulo: "¡Ya basta freezer!",
        fecha: "12/12/2012",
        video: "videos/1.mp4",
        tituloCancion: "Cha la head cha la!",
        likes: 10,
        shares: 15,
        comentarios: [{
                usuario: "krilin",
                comentario: "Gokuuuuuuuuu!!!!!"
            },
            {
                usuario: "vegeta",
                comentario: "Insecto!!!!!"
            },
        ],
        hashtags: ["Dogs", "Freezer", "DragonBall"]
    },
    {
        usuario: 'gohan',
        titulo: "No se si pasare",
        fecha: "12/12/2012",
        video: "videos/3.mp4",
        tituloCancion: "Cha la head cha la!",
        likes: 10,
        shares: 15,
        comentarios: [],
        hashtags: ["DragonBall"]
    }*/
]
var hashtags = [/*{
        hashtag: 'Dogs',
        videos: 1000000000
    },
    {
        hashtag: 'Freezer',
        videos: 1000000000
    },
    {
        hashtag: 'DragonBall',
        videos: 1100000
    }*/
]

//Variables para gestionar la sesion del usuario
var indice_usuarioAutenticado = null;
var usuarioAutenticado = ''
// Variable para la imagen seleccionada al crear nuevo usuario
var imagenPerfilSeleccionada = '';
// Mantener el indice del tiktok para publicar comentario
var indice_tiktok = null;
//LocalStorage
var localStorage = window.localStorage;

//Guardar usuarios en LocalStorage
if (localStorage.getItem('usuarios') == null) {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
} else {
    usuarios = JSON.parse(localStorage.getItem('usuarios'));
}

//Guardar tiktoks en LocalStorage
if (localStorage.getItem('tiktoks') == null) {
    localStorage.setItem('tiktoks', JSON.stringify(tiktoks));
} else {
    tiktoks = JSON.parse(localStorage.getItem('tiktoks'));
}

//Guardar hashtags en LocalStorage
if (localStorage.getItem('hashtags') == null) {
    localStorage.setItem('hashtags', JSON.stringify(hashtags));
} else {
    hashtags = JSON.parse(localStorage.getItem('hashtags'));
}

function Login() {
    validarCampoVacio('usuarioLogin');
    validarCampoVacio('passwordLogin');
    for (let i = 0; i < usuarios.length; i++) {
        if (validarCampoVacio('usuarioLogin') && validarCampoVacio('passwordLogin') &&
            usuarios[i].usuario == document.getElementById('usuarioLogin').value &&
            usuarios[i].password == document.getElementById('passwordLogin').value) {
            document.getElementById('login-error').style.display = 'none';
            indice_usuarioAutenticado = i;
            usuarioAutenticado = usuarios[i].usuario;
            habilitarOpciones();
            generarTikToks('');
            generarUsuariosSugeridos();
            console.log('Usuario en sesión:', usuarioAutenticado);
            $('#modalLogin').modal('hide');
            break;
        } else {
            document.getElementById('login-error').style.display = 'block';
        }
    }
}

function generarTikToks(hashtag) {
    document.getElementById('generarTikToks').innerHTML = ``;
    for (let i = 0; i < tiktoks.length; i++) {
        let mostrar_tiktok = true;
        let indice_usuario_tiktok = 0;
        let html_hashtags = '';
        for (let j = 0; j < tiktoks[i].hashtags.length; j++) {
            html_hashtags += `#${tiktoks[i].hashtags[j]} `;
        }
        for (let k = 0; k < usuarios.length; k++) {
            if (tiktoks[i].usuario == usuarios[k].usuario) {
                indice_usuario_tiktok = k;
            }
        }

        //Verificar usuario logueado
        if (indice_usuarioAutenticado != null && hashtag == '') {
            //Verificar si tiene usuarios que sigue
            if(usuarios[indice_usuarioAutenticado].siguiendo.length == 0){
                mostrar_tiktok = false;
            }
            // Mostrar tiktoks solamente de los usuarios a los que sigue
            for (let l = 0; l < usuarios[indice_usuarioAutenticado].siguiendo.length; l++) {
                if (tiktoks[i].usuario == usuarios[indice_usuarioAutenticado].siguiendo[l]) {
                    mostrar_tiktok = true;
                    break;
                } else {
                    mostrar_tiktok = false;
                }
            }
            if (tiktoks[i].usuario == usuarios[indice_usuarioAutenticado].usuario) {
                mostrar_tiktok = false;
            }
        }

        //Filtro de hashtag
        if (hashtag != '') {
            mostrar_tiktok = false;
            // Mostrar tiktoks del hashtag seleccionado
            for (let n = 0; n < tiktoks[i].hashtags.length; n++) {
                if (hashtag == tiktoks[i].hashtags[n]) {
                    mostrar_tiktok = true;
                    break;
                }
            }
        }

        if (mostrar_tiktok) {
            document.getElementById('generarTikToks').innerHTML += `
            <div class="float-right py-2">
                <button class="btn btn-outline-red py-0" type="button" onclick="follow(${indice_usuario_tiktok})"><b>Follow</b></button>
            </div>
            <div class="section-video mx-auto mx-md-0">
                <ul>
                    <li>
                        <img class="img-profile rounded-circle float-left" src="${usuarios[indice_usuario_tiktok].imagenPerfil}">
                        <ul class="section-profile">
                            <li class="gray mb-1"><span class="font-bold black mr-2">@${tiktoks[i].usuario}</span>
                                ${usuarios[indice_usuario_tiktok].nombre}
                            </li>
                            <li class="gray mb-1"><span class="font-weight-bold bold-gray mr-2">${html_hashtags}</span>
                                ${tiktoks[i].titulo}
                            </li>
                            <li class="bold-gray mb-3"><i class="fas fa-music black mr-2"></i>
                                <span class="font-weight-bold">${tiktoks[i].tituloCancion}</span>
                            </li>
                        </ul>
                    </li>
                    <li class="li-video">
                        <video class="video" controls>
                            <source src="${tiktoks[i].video}" type="video/mp4">
                        </video>
                        <ul class="ul-video-options">
                            <li class="mb-2"><i class="fas fa-heart"></i></li>
                            <li class="mb-2" onclick="mostrarComentarios(${i})"><i
                                                class="fas fa-comment-dots"></i></li>
                            <li class="mb-2"><i class="fas fa-share"></i></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <hr>
            `;
        }
    }
}

generarTikToks('');

function follow(indice) {
    let usuario_seguir = usuarios[indice].usuario;
    let siguiendo = false;
    if (indice_usuarioAutenticado == indice) {
        return;
    }
    if (indice_usuarioAutenticado != null) {
        for (let i = 0; i < usuarios[indice_usuarioAutenticado].siguiendo.length; i++) {
            if (usuario_seguir == usuarios[indice_usuarioAutenticado].siguiendo[i]) {
                siguiendo = true;
                break;
            }
        }
        if (!siguiendo) {
            usuarios[indice_usuarioAutenticado].siguiendo.push(usuario_seguir);
            usuarios[indice].seguidores.push(usuarioAutenticado);
            localStorage.setItem('usuarios', JSON.stringify(usuarios));
            generarUsuariosSugeridos();
            generarTikToks('');
        } else {
            alert("Ya sigue a este usuario");
        }
    } else {
        borrarDatos('Login');
        $('#modalLogin').modal('show');
    }

}

function generarUsuariosSugeridos() {
    document.getElementById('generarUsuariosSugeridos').innerHTML = ``;
    for (let i = 0; i < usuarios.length; i++) {
        let mostrar_usuario = true;
        if (indice_usuarioAutenticado != null) {
            //Mostrar solo usuarios a los que no sigue el usuario autenticado
            for (let j = 0; j < usuarios[indice_usuarioAutenticado].siguiendo.length; j++) {
                if (usuarios[i].usuario == usuarios[indice_usuarioAutenticado].siguiendo[j]) {
                    mostrar_usuario = false;
                    break;
                }
            }
            if (usuarios[i].usuario == usuarios[indice_usuarioAutenticado].usuario) {
                mostrar_usuario = false;
            }
        }
        if (mostrar_usuario) {
            document.getElementById('generarUsuariosSugeridos').innerHTML += `
            <div class="row position-relative mb-3">
                <img class="img-profile rounded-circle mr-2" src="${usuarios[i].imagenPerfil}">
                <ul class="pr-5">
                    <li class="font-bold black">${usuarios[i].nombre}</li>
                    <li class="gray">@${usuarios[i].usuario}</li>
                </ul>
                <div class="div-button-position pl-3 py-2">
                    <button class="btn btn-outline-red py-0" type="button" onclick="follow(${i})"><b>Follow</b></button>
                </div>
            </div>
            `;
        }

    }
}
generarUsuariosSugeridos();

function generarHashtags() {
    document.getElementById('generarHashtags').innerHTML = ``;
    for (let i = 0; i < hashtags.length; i++) {
        let number_hashtags = null;
        let html_hashtags = '';
        if (hashtags[i].videos >= 1000000000) {
            number_hashtags = hashtags[i].videos / 1000000000;
            if (Number.isInteger(number_hashtags)) {
                html_hashtags = `${number_hashtags}B of`;
            } else {
                html_hashtags = `${(number_hashtags).toFixed(1)}B of`;
            }
        } else if (hashtags[i].videos >= 1000000) {
            number_hashtags = hashtags[i].videos / 1000000;
            if (Number.isInteger(number_hashtags)) {
                html_hashtags = `${number_hashtags}M of`;
            } else {
                html_hashtags = `${(number_hashtags).toFixed(1)}M of`;
            }
        } else if (hashtags[i].videos >= 1000) {
            number_hashtags = hashtags[i].videos / 1000;
            if (Number.isInteger(number_hashtags)) {
                html_hashtags = `${number_hashtags}K of`;
            } else {
                html_hashtags = `${(number_hashtags).toFixed(1)}K of`;
            }
        } else {
            html_hashtags = `${hashtags[i].videos}`;
        }
        document.getElementById('generarHashtags').innerHTML += `
            <div class="row discover position-relative" onclick="generarTikToks('${hashtags[i].hashtag}')">
                <ul>
                    <li class="font-bold black">#${hashtags[i].hashtag}</li>
                    <li class="gray">${html_hashtags} videos</li>
                </ul>
                <div class="div-icon-arrow py-3">
                    <i class="fas fa-chevron-right"></i>
                </div>
            </div>
        `;
    }
}
generarHashtags();

// Select de videos de TikTok
document.getElementById('videoUpload').innerHTML = `<option value="">Seleccionar Video</option>`;
for (let i = 1; i <= 8; i++) {
    document.getElementById('videoUpload').innerHTML += `
        <option value="videos/${i}.mp4">Video ${i}</option>
    `;
}

// Imagen perfil seleccionada al crear cuenta
function imagenPerfil(id, number) {
    imagenPerfilSeleccionada = id;
    for (let i = 1; i <= 5; i++) {
        if (number == i) {
            document.getElementById(`img-${number}`).style.filter = "saturate(250%)";
        } else {
            document.getElementById(`img-${i}`).style.filter = "none";
        }
    }
}
// Crear cuenta
function nuevoUsuario() {
    const nuevoUsuario = {
        usuario: document.getElementById('usuarioRegistro').value,
        password: document.getElementById('passwordRegistro').value,
        nombre: document.getElementById('nombreRegistro').value,
        imagenPerfil: imagenPerfilSeleccionada,
        seguidores: [],
        siguiendo: []
    }
    let errorUsuario = false;
    let errorPassword = false;
    validarCampoVacio('usuarioRegistro');
    validarCampoVacio('nombreRegistro');
    validarCampoVacio('passwordRegistro');
    validarCampoVacio('passwordConfirmar');
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].usuario == document.getElementById('usuarioRegistro').value) {
            errorUsuario = true;
            break;
        }
    }
    if (document.getElementById('passwordRegistro').value != document.getElementById('passwordConfirmar').value) {
        errorPassword = true;
    }
    if (errorUsuario) {
        document.getElementById('registro-error').innerHTML = '<b class="text-danger">El usuario ya existe</b>';
        document.getElementById('registro-error').style.display = 'block';
        return;
    }
    if (errorPassword) {
        document.getElementById('registro-error').innerHTML = '<b class="text-danger">Las contraseñas no coinciden</b>';
        document.getElementById('registro-error').style.display = 'block';
        return;
    }
    if (imagenPerfilSeleccionada != '' && validarCampoVacio('usuarioRegistro') &&
        validarCampoVacio('nombreRegistro') && validarCampoVacio('passwordRegistro') &&
        validarCampoVacio('passwordConfirmar')) {
        document.getElementById('registro-error').innerHTML = '';
        document.getElementById('registro-error').style.display = 'none';
        usuarios.push(nuevoUsuario);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        generarUsuariosSugeridos();
        $('#modalCuenta').modal('hide');
    } else {
        document.getElementById('registro-error').innerHTML = '<b class="text-danger">Faltan datos requeridos</b>';
        document.getElementById('registro-error').style.display = 'block';
    }
}

function publicarTikTok() {
    let array_hashtags = [];
    array_hashtags = (document.getElementById('HashtagsModal').value).split(' ');
    const nuevoTikTok = {
        usuario: usuarioAutenticado,
        titulo: document.getElementById('mensajeModal').value,
        fecha: "12/12/2012",
        video: document.getElementById('videoUpload').value,
        tituloCancion: "Cha la head cha la!",
        likes: 0,
        shares: 0,
        comentarios: [],
        hashtags: array_hashtags,
    };
    validarCampoVacio('mensajeModal');
    validarCampoVacio('videoUpload');
    validarCampoVacio('HashtagsModal');
    if (validarCampoVacio('mensajeModal') && validarCampoVacio('videoUpload') && validarCampoVacio('HashtagsModal') 
    && usuarioAutenticado != '') {
        tiktoks.push(nuevoTikTok);
        for (let i = 0; i < array_hashtags.length; i++) {
            let existe_hashtag = false;
            for (let j = 0; j < hashtags.length; j++) {
                if (array_hashtags[i] == hashtags[j].hashtag) {
                    existe_hashtag = true;
                    hashtags[j].videos++;
                }
            }
            if (!existe_hashtag) {
                let nuevoHashtag = {
                    hashtag: array_hashtags[i],
                    videos: 0
                };
                hashtags.push(nuevoHashtag);
            }
        }
        localStorage.setItem('hashtags', JSON.stringify(hashtags));
        localStorage.setItem('tiktoks', JSON.stringify(tiktoks));
        generarTikToks('');
        generarHashtags();
        $('#modalTikTok').modal('hide');
    }
}

function mostrarComentarios(indice) {
    indice_tiktok = indice;
    document.getElementById('generarComentarios').innerHTML = ``;
    document.getElementById('comentarioUsuarioSesion').innerHTML = ``;
    for (let i = 0; i < tiktoks[indice].comentarios.length; i++) {
        let indice_usuario = 0;
        for (let j = 0; j < usuarios.length; j++) {
            if (tiktoks[indice].comentarios[i].usuario == usuarios[j].usuario) {
                indice_usuario = j;
            }
        }
        document.getElementById('generarComentarios').innerHTML += `
        <div class="px-1 px-sm-4 py-2">
            <img class="img-profile rounded-circle float-left" src="${usuarios[indice_usuario].imagenPerfil}">
            <div class="datosComentarios">
                <ul>
                    <li class="font-bold black">${usuarios[indice_usuario].nombre}</li>
                    <li class="gray">@${tiktoks[indice].comentarios[i].usuario}</li>
                </ul>
                <p class="card-text text-justify">
                    ${tiktoks[indice].comentarios[i].comentario}
                </p>
            </div>
        </div>
        <hr>
        `;
    }
    habilitarOpciones();
    $('#modalComentarios').modal('show');

}

function publicarComentario() {
    if (usuarioAutenticado != '') {
        if (validarCampoVacio('nuevoComentario')) {
            const comentario = {
                usuario: usuarioAutenticado,
                comentario: document.getElementById('nuevoComentario').value
            }
            tiktoks[indice_tiktok].comentarios.push(comentario);
            localStorage.setItem('tiktoks', JSON.stringify(tiktoks));
            mostrarComentarios(indice_tiktok);
        }
    }
}
//Opciones habilitadas si hay un usuario en sesion
function habilitarOpciones() {
    if (usuarioAutenticado == '') {
        //Comentarios
        document.getElementById('comentarioUsuarioSesion').innerHTML = `
        <div class="text-center"><b class="text-danger">Inicia Sesion para Comentar</b></div>
        `;
        document.getElementById('btn-publicarComentario').disabled = true;
        //Upload TikToks
        document.getElementById('upload-error').innerHTML = `
        <b class="text-danger">Inicia Sesion para publicar tiktoks</b>
        `;
        document.getElementById('btn-publicarTikTok').disabled = true;
    } else {
        //Comentarios
        document.getElementById('comentarioUsuarioSesion').innerHTML = `
            <img class="img-profile rounded-circle float-left mb-3" 
            src="${usuarios[indice_usuarioAutenticado].imagenPerfil}">
            <textarea id="nuevoComentario" class="form-control mb-3" rows="5"
                placeholder="Agregar Nuevo Comentario"></textarea>
        `;
        document.getElementById('btn-publicarComentario').disabled = false;
        //Upload TikToks
        document.getElementById('upload-error').innerHTML = ``;
        document.getElementById('btn-publicarTikTok').disabled = false;
    }
}
habilitarOpciones();

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

function borrarDatos(mensaje) {
    // Login
    if (mensaje == 'Login') {
        document.getElementById('login-error').style.display = 'none';
        document.getElementById('usuarioLogin').classList.remove('input-error');
        document.getElementById('passwordLogin').classList.remove('input-error');
        document.getElementById('usuarioLogin').value = '';
        document.getElementById('passwordLogin').value = '';
    }
    // Registro nuevo usuario
    if (mensaje == 'Cuenta') {
        document.getElementById('registro-error').innerHTML = '';
        document.getElementById('registro-error').style.display = 'none';
        document.getElementById('usuarioRegistro').classList.remove('input-error');
        document.getElementById('nombreRegistro').classList.remove('input-error');
        document.getElementById('passwordRegistro').classList.remove('input-error');
        document.getElementById('passwordConfirmar').classList.remove('input-error');
        document.getElementById('usuarioRegistro').value = '';
        document.getElementById('nombreRegistro').value = '';
        document.getElementById('passwordRegistro').value = '';
        document.getElementById('passwordConfirmar').value = '';
        imagenPerfil('', 0);
    }
    //Subir nuevo TikTok
    if (mensaje == 'Upload') {
        document.getElementById('videoUpload').classList.remove('input-error');
        document.getElementById('HashtagsModal').classList.remove('input-error');
        document.getElementById('mensajeModal').classList.remove('input-error');
        document.getElementById('videoUpload').value = '';
        document.getElementById('HashtagsModal').value = '';
        document.getElementById('mensajeModal').value = '';
    }
}