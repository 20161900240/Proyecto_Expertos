db.usuarios.insertMany([{
    "_id": ObjectId("5fd02233cfb6613ed891013b"),
    "nombre": "Goku",
    "urlImagen": "img/profile-pics/goku.jpg",
    "preguntas": [{
      "_id": ObjectId("5fd02a1919cc19b9d5eb9b4b"),
      "titulo": "¿Dónde está el dinero?"
    }]
  },
  {
    "_id": ObjectId("5fd022e8465b74b894239048"),
    "nombre": "Vegeta",
    "urlImagen": "img/profile-pics/vegeta.jpg",
    "preguntas": [{
      "_id": ObjectId("5fd02a43ce88252910cbffde"),
      "titulo": "How to use/import http module?"
    }]
  },
  {
    "_id": ObjectId("5fd022f89f775c176329f59e"),
    "nombre": "Krillin",
    "urlImagen": "img/profile-pics/krilin.jpg",
    "preguntas": [{
      "_id": ObjectId("5fd02a507fadc8b5ddd65a82"),
      "titulo": "How to interpolate discretly a smooth curve from an array of points in 2D"
    }]
  },
  {
    "_id": ObjectId("5fd0233545dd627eda1a5a71"),
    "nombre": "Patricio",
    "urlImagen": "img/profile-pics/patricio.jpg",
    "preguntas": [{
      "_id": ObjectId("5fd02a5d82be51d7e2abd657"),
      "titulo": "Create Object in Azure Analysis Service using REST API call"
    }]
  },
  {
    "_id": ObjectId("5fd02350223905fd2e5a3f82"),
    "nombre": "Yamcha",
    "urlImagen": "img/profile-pics/yamcha.jpg",
    "preguntas": [{
      "_id": ObjectId("5fd02a707031a7a1fc831b32"),
      "titulo": "Why am I getting a Parsing Error when running a React App with Node.js?"
    }]
  }
])

db.preguntas.insertMany([{
    "_id": ObjectId("5fd02a1919cc19b9d5eb9b4b"),
    "titulo": "¿Dónde está el dinero?",
    "descripcion": "Lorem ipsum dolor sit.",
    "fecha": "12/12/2012",
    "votos": 5,
    "vistas": 10,
    "hashtags": ["off-topic", "pn", "joh"],
    "idUsuario": ObjectId("5fd02233cfb6613ed891013b"),
    "respuestas": [{
      "_id": ObjectId(),
      "descripcion": "Se lo robaron",
      "fecha": "12/12/2012",
      "votos": "56326",
      "idUsuario": ObjectId("5fd022e8465b74b894239048")
    }]
  },
  {
    "_id": ObjectId("5fd02a43ce88252910cbffde"),
    "titulo": "How to use/import http module?",
    "descripcion": "Lorem ipsum dolor sit.",
    "fecha": "12/12/2012",
    "votos": 10,
    "vistas": 30,
    "hashtags": ["httpModule", "amazon-web-services"],
    "idUsuario": ObjectId("5fd022e8465b74b894239048"),
    "respuestas": [{
        "_id": ObjectId(),
        "descripcion": `In version 37 you need to do this:
      <pre>///< reference path="typings/angular2/http.d.ts"/ ><br>import {Http} from "angular2/http";<br>And run this tsd command:<br>tsd install angular2/http</pre>`,
        "fecha": "12/12/2012",
        "votos": "56326",
        "idUsuario": ObjectId("5fd0233545dd627eda1a5a71")
      },
      {
        "_id": ObjectId(),
        "descripcion": `In version 37 you need to do this:
      <pre>import {Http} from "angular2/http";</pre>`,
        "fecha": "12/12/2012",
        "votos": "5023",
        "idUsuario": ObjectId("5fd022f89f775c176329f59e")
      }
    ]
  },
  {
    "_id": ObjectId("5fd02a507fadc8b5ddd65a82"),
    "titulo": "How to interpolate discretly a smooth curve from an array of points in 2D",
    "descripcion": "Lorem ipsum dolor sit.",
    "fecha": "12/12/2012",
    "votos": 10,
    "vistas": 20,
    "hashtags": ["curve", "spline", "smoothing"],
    "idUsuario": ObjectId("5fd022f89f775c176329f59e"),
    "respuestas": [{
      "_id": ObjectId(),
      "descripcion": `In version 37 you need to do this:
      <pre>///< reference path="typings/angular2/http.d.ts"/ ><br>import {Http} from "angular2/http";<br>And run this tsd command:<br>tsd install angular2/http</pre>`,
      "fecha": "12/12/2012",
      "votos": "56326",
      "idUsuario": ObjectId("5fd0233545dd627eda1a5a71")
    }]
  },
  {
    "_id": ObjectId("5fd02a5d82be51d7e2abd657"),
    "titulo": "Create Object in Azure Analysis Service using REST API call",
    "descripcion": "Lorem ipsum dolor sit.",
    "fecha": "12/12/2012",
    "votos": 10,
    "vistas": 20,
    "hashtags": ["amazon-web-services", "saas"],
    "idUsuario": ObjectId("5fd0233545dd627eda1a5a71"),
    "respuestas": [{
      "_id": ObjectId(),
      "descripcion": `In version 37 you need to do this:
      <pre>///< reference path="typings/angular2/http.d.ts"/ ><br>import {Http} from "angular2/http";<br>And run this tsd command:<br>tsd install angular2/http</pre>`,
      "fecha": "12/12/2012",
      "votos": "76326",
      "idUsuario": ObjectId("5fd022e8465b74b894239048")
    }]
  },
  {
    "_id": ObjectId("5fd02a707031a7a1fc831b32"),
    "titulo": "Why am I getting a Parsing Error when running a React App with Node.js?",
    "descripcion": "Lorem ipsum dolor sit.",
    "fecha": "12/12/2012",
    "votos": 10,
    "vistas": 20,
    "hashtags": ["nodejs", "reactjs", "frontend"],
    "idUsuario": ObjectId("5fd02350223905fd2e5a3f82"),
    "respuestas": [{
      "_id": ObjectId(),
      "descripcion": `In version 37 you need to do this:
      <pre>///< reference path="typings/angular2/http.d.ts"/ ><br>import {Http} from "angular2/http";<br>And run this tsd command:<br>tsd install angular2/http</pre>`,
      "fecha": "12/12/2012",
      "votos": "56326",
      "idUsuario": ObjectId("5fd0233545dd627eda1a5a71")
    }]
  }
])