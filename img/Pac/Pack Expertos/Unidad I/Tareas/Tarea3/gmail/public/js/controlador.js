 //  Recibidos
var recibidos = [];

//  Enviados
var enviados = [];

//  Papelera
var papelera = [];
 
 //Informacion para LocalStorage
 /*enviados = [{"emisor":"Juan Perez","correoEmisor":"jperez@gmail.com","asunto":"Tarea primer parcial","mensaje":"Lorem ipsum dolor sit amet, consectetur adipisicing.","hora":"10:00am","leido":true,"destacado":true,"spam":false},
{"emisor":"Juan Perez","correoEmisor":"jperez@gmail.com","asunto":"Tarea primer parcial","mensaje":"Lorem ipsum dolor sit amet, consectetur adipisicing.","hora":"10:00am","leido":true,"destacado":true,"spam":false},
{"emisor":"Juan Perez","correoEmisor":"jperez@gmail.com","asunto":"Tarea primer parcial","mensaje":"Lorem ipsum dolor sit amet, consectetur adipisicing.","hora":"10:00am","leido":false,"destacado":false,"spam":false},
{"emisor":"Ana Perez","correoEmisor":"anaperez@gmail.com","asunto":"Tarea primer parcial","mensaje":"Lorem ipsum dolor sit amet, consectetur adipisicing.","hora":"10:00pm","leido":false,"destacado":false,"spam":false},
{"emisor":"Raul Lopez","correoEmisor":"rlopez@gmail.com","asunto":"Tarea primer parcial","mensaje":"Lorem ipsum dolor sit amet, consectetur adipisicing.","hora":"12:30pm","leido":false,"destacado":false,"spam":false}]

recibidos = [{"receptor":"Pedro Martinez","emailReceptor":"pmartinez@gmail.com","asunto":"Saludos desde Intibucá","mensaje":"Lorem ipsum dolor sit amet, consectetur adipisicing.","hora":"11:00am"},
{"receptor":"Laura Martinez","emailReceptor":"lmartinez@gmail.com","asunto":"Saludos desde FM","mensaje":"Lorem ipsum dolor sit amet, consectetur adipisicing.","hora":"11:00pm"},
{"receptor":"Laura Martinez","emailReceptor":"lmartinez@gmail.com","asunto":"Saludos desde FM","mensaje":"Lorem ipsum dolor sit amet, consectetur adipisicing.","hora":"11:00pm"}]
*/



//LocalStorage
var localStorage = window.localStorage;

//Guardar recibidos en LocalStorage
if (localStorage.getItem('recibidos') == null) {
    localStorage.setItem('recibidos', JSON.stringify(recibidos)); //JSON a Cadena
} else {
    recibidos = JSON.parse(localStorage.getItem('recibidos')); //Cadena a JSON
}

//Guardar enviados en LocalStorage
if (localStorage.getItem('enviados') == null) {
    localStorage.setItem('enviados', JSON.stringify(enviados)); //JSON a Cadena
} else {
    enviados = JSON.parse(localStorage.getItem('enviados')); //Cadena a JSON
}

//Guardar papelera en LocalStorage
if (localStorage.getItem('papelera') == null) {
    localStorage.setItem('papelera', JSON.stringify(papelera)); //JSON a Cadena
} else {
    papelera = JSON.parse(localStorage.getItem('papelera')); //Cadena a JSON
}
//variable categoria
var categoria_seleccionada = '';
//Generar correos
function generarCorreos(categoria) {
    categoria_seleccionada = categoria;
    let html_estrella = '';
    let html_emisor = '';
    let html_asunto = '';
    let html_mensaje = '';
    let html_hora = '';
    document.getElementById('mensajes-categoria').innerHTML = '';
    //Recibidos
    if (categoria == 'recibidos') {
        // Contador de correos sin leer
        let correos_NoLeidos = 0;
        for (let i = 0; i < recibidos.length; i++) {
            //primeros 20 caracteres del mensaje
            html_mensaje = (recibidos[i].mensaje).substring(0, 20);
            //destacado?
            if (recibidos[i].destacado) {
                html_estrella = `<i class="far fa-star destacado mr-2" onclick="cambiarEstadoDestacado(${i})"></i>`;
            } else {
                html_estrella = `<i class="far fa-star no-destacado mr-2" onclick="cambiarEstadoDestacado(${i})"></i>`;
            }
            //leido?
            if (recibidos[i].leido) {
                html_emisor = recibidos[i].emisor;
                html_asunto = `${recibidos[i].asunto} - `;
                html_hora = recibidos[i].hora;
            } else {
                html_emisor = `<b>${recibidos[i].emisor}</b>`;
                html_asunto = `<b>${recibidos[i].asunto} - </b>`;
                html_hora = `<b>${recibidos[i].hora}</b>`;
                correos_NoLeidos++;
            }
            //No spam
            if (!recibidos[i].spam) {
                document.getElementById('mensajes-categoria').innerHTML += `
                <tr>
                    <td>
                        ${html_estrella}<i class="fas fa-exclamation-triangle mr-2" onclick="cambiarEstadoSpam(${i})"></i>
                        <span onclick="cambiarLeido(${i})">${html_emisor}</span>
                    </td>
                    <td><span onclick="cambiarLeido(${i})">${html_asunto}${html_mensaje}</span></td>
                    <td><span onclick="cambiarLeido(${i})">${html_hora}</span><i class="far fa-trash-alt ml-2" onclick="moverPapelera(${i})"></i></td>
                </tr>
                `;
            }
        }
        if (correos_NoLeidos != 0) {
            document.getElementById('recibidos').innerHTML = `<span><i class="far fa-envelope mr-2"></i>Recibidos (${correos_NoLeidos})</span>`;
        } else {
            document.getElementById('recibidos').innerHTML = `<span><i class="far fa-envelope mr-2"></i>Recibidos</span>`;
        }
    }
    //Enviados
    if (categoria == 'enviados') {
        console.log(enviados);
        for (let i = 0; i < enviados.length; i++) {
            //primeros 20 caracteres del mensaje
            html_mensaje = (enviados[i].mensaje).substring(0, 20);
            document.getElementById('mensajes-categoria').innerHTML += `
            <tr>
                <td>
                    <span>${enviados[i].receptor}</span>
                </td>
                <td><span>${enviados[i].asunto} - ${enviados[i].mensaje}</span></td>
                <td><span>${enviados[i].hora}</span><i class="far fa-trash-alt ml-2" onclick="eliminarMensaje(${i})"></i></td>
            </tr>
            `;
        }
    }
    //Destacados
    if (categoria == 'destacados') {
        for (let i = 0; i < recibidos.length; i++) {
            //primeros 20 caracteres del mensaje
            html_mensaje = (recibidos[i].mensaje).substring(0, 20);
            //leido?
            if (recibidos[i].leido) {
                html_emisor = recibidos[i].emisor;
                html_asunto = `${recibidos[i].asunto} - `;
                html_hora = recibidos[i].hora;
            } else {
                html_emisor = `<b>${recibidos[i].emisor}</b>`;
                html_asunto = `<b>${recibidos[i].asunto} - </b>`;
                html_hora = `<b>${recibidos[i].hora}</b>`;
            }
            //Solo destacados
            if (recibidos[i].destacado) {
                document.getElementById('mensajes-categoria').innerHTML += `
                <tr>
                    <td>
                        <i class="far fa-star destacado mr-2" onclick="cambiarEstadoDestacado(${i})"></i><i class="fas fa-exclamation-triangle mr-2" onclick="cambiarEstadoSpam(${i})"></i>
                        <span>${html_emisor}</span>
                    </td>
                    <td><span>${html_asunto}${html_mensaje}</span></td>
                    <td><span>${html_hora}</span><i class="far fa-trash-alt ml-2" onclick="moverPapelera(${i})"></i></td>
                </tr>
                `;
            }
        }
    }
    //Spam
    if (categoria == 'spam') {
        for (let i = 0; i < recibidos.length; i++) {
            //primeros 20 caracteres del mensaje
            html_mensaje = (recibidos[i].mensaje).substring(0, 20);
            //destacado?
            if (recibidos[i].destacado) {
                html_estrella = `<i class="far fa-star destacado mr-2" onclick="cambiarEstadoDestacado(${i})"></i>`;
            } else {
                html_estrella = `<i class="far fa-star no-destacado mr-2" onclick="cambiarEstadoDestacado(${i})"></i>`;
            }
            //leido?
            if (recibidos[i].leido) {
                html_emisor = recibidos[i].emisor;
                html_asunto = `${recibidos[i].asunto} - `;
                html_hora = recibidos[i].hora;
            } else {
                html_emisor = `<b>${recibidos[i].emisor}</b>`;
                html_asunto = `<b>${recibidos[i].asunto} - </b>`;
                html_hora = `<b>${recibidos[i].hora}</b>`;
            }
            //Solo spam
            if (recibidos[i].spam) {
                document.getElementById('mensajes-categoria').innerHTML += `
                <tr>
                    <td>
                        ${html_estrella}<i class="fas fa-exclamation-triangle mr-2" onclick="cambiarEstadoSpam(${i})"></i>
                        <span>${html_emisor}</span>
                    </td>
                    <td><span>${html_asunto}${html_mensaje}</span></td>
                    <td><span>${html_hora}</span><i class="far fa-trash-alt ml-2" onclick="moverPapelera(${i})"></i></td>
                </tr>
                `;
            }
        }
    }
    //Papelera
    if (categoria == 'papelera') {
        for (let i = 0; i < papelera.length; i++) {
            //primeros 20 caracteres del mensaje
            html_mensaje = (papelera[i].mensaje).substring(0, 20);
            //leido?
            if (papelera[i].leido) {
                html_emisor = papelera[i].emisor;
                html_asunto = `${papelera[i].asunto} - `;
                html_hora = papelera[i].hora;
            } else {
                html_emisor = `<b>${papelera[i].emisor}</b>`;
                html_asunto = `<b>${papelera[i].asunto} - </b>`;
                html_hora = `<b>${papelera[i].hora}</b>`;
            }
            document.getElementById('mensajes-categoria').innerHTML += `
                <tr>
                    <td>
                        <span>${html_emisor}</span>
                    </td>
                    <td><span>${html_asunto}${html_mensaje}</span></td>
                    <td><span>${html_hora}</span></td>
                </tr>
            `;

        }
    }
    //Estilos de la categoria
    cambiarEstilosCategorias(categoria);
}
generarCorreos('recibidos');


function cambiarEstilosCategorias(categoria) {
    let categorias = ['enviados', 'destacados', 'spam', 'papelera'];
    if (categoria == 'recibidos') {
        document.getElementById(categoria).style.backgroundColor = '#FCE8E6';
        document.getElementById(categoria).style.color = '#DD4238';
        document.getElementById(categoria).style.fontWeight = 'bold';
    } else {
        document.getElementById('recibidos').style.backgroundColor = '#FFF';
        document.getElementById('recibidos').style.color = '#7E7E7E';
        document.getElementById('recibidos').style.fontWeight = '500';
    }
    for (let i = 0; i < categorias.length; i++) {
        if (categorias[i] == categoria) {
            document.getElementById(categoria).style.backgroundColor = '#E8EAED';
            document.getElementById(categoria).style.fontWeight = 'bold';
        } else {
            document.getElementById(categorias[i]).style.backgroundColor = '#FFF';
            document.getElementById(categorias[i]).style.fontWeight = '500';
        }
    }
}

function cambiarEstadoDestacado(indice) {
    recibidos[indice].destacado = !(recibidos[indice].destacado);
    localStorage.setItem('recibidos', JSON.stringify(recibidos));
    generarCorreos(categoria_seleccionada);
}

function cambiarEstadoSpam(indice) {
    recibidos[indice].spam = !(recibidos[indice].spam);
    localStorage.setItem('recibidos', JSON.stringify(recibidos));
    generarCorreos(categoria_seleccionada);
}

function cambiarLeido(indice) {
    recibidos[indice].leido = !(recibidos[indice].leido);
    localStorage.setItem('recibidos', JSON.stringify(recibidos));
    generarCorreos(categoria_seleccionada);
}

function moverPapelera(indice) {
    papelera.push(recibidos[indice]);
    recibidos.splice(indice, 1);
    localStorage.setItem('papelera', JSON.stringify(papelera));
    localStorage.setItem('recibidos', JSON.stringify(recibidos));
    generarCorreos(categoria_seleccionada);
}

function eliminarMensaje(indice) {
    enviados.splice(indice, 1);
    localStorage.setItem('enviados', JSON.stringify(enviados));
    generarCorreos(categoria_seleccionada);
}

function mostrarVentana() {
    document.getElementById('newMail').style.display = 'block';
}

function ocultarVentana() {
    document.getElementById('newMail').style.display = 'none';
    document.getElementById('emisor').value = '';
    document.getElementById('receptor').value = '';
    document.getElementById('asunto').value = '';
    document.getElementById('mensaje').value = '';
}

function enviarCorreo() {
    let campo1 = document.getElementById('emisor').value;
    let campo2 = document.getElementById('receptor').value;
    let campo3 = document.getElementById('asunto').value;
    let campo4 = document.getElementById('mensaje').value;
    const nuevo_Correo = {
        receptor: campo2,
        emailReceptor: 'loremipsum@gmail.com',
        asunto: campo3,
        mensaje: campo4,
        hora: '11:00am'
    };
    if (campo1 != '' && campo2 != '' && campo3 != '' && campo4 != '') {
        enviados.push(nuevo_Correo);
        localStorage.setItem('enviados', JSON.stringify(enviados));
        generarCorreos(categoria_seleccionada);
        ocultarVentana();
    }
}