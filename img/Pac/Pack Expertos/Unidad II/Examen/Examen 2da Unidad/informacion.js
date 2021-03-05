// Usuarios
db.usuarios.insertMany([
    {
        "_id": ObjectId("5fd62ed3bdb7583eed51ae66"),
        "usuario": "goku",
        "password": "asd.456",
        "nombre": "Son Goku",
        "urlImagen": "images/profile-pics/goku.jpg",
        "seguidores": [{
                "_id": ObjectId("5fd62fc1822869b96b7d162f"),
                "usuario": "krillin"
            },
            {
                "_id": ObjectId("5fd63089ad5b3f007d19fca5"),
                "usuario": "bulma"
            },
            {
                "_id": ObjectId("5fd630c538592c4391a90a1f"),
                "usuario": "vegeta"
            }
        ],
        siguiendo: [{
                "_id": ObjectId("5fd62fc1822869b96b7d162f"),
                "usuario": "krillin"
            },
            {
                "_id": ObjectId("5fd63089ad5b3f007d19fca5"),
                "usuario": "bulma"
            },
            {
                "_id": ObjectId("5fd630c538592c4391a90a1f"),
                "usuario": "vegeta"
            }
        ],
    },
    {
        "_id": ObjectId("5fd62fc1822869b96b7d162f"),
        "usuario": "krillin",
        "password": "asd.456",
        "nombre": "Krillin",
        "urlImagen": "images/profile-pics/krilin.jpg",
        "seguidores": [{
                "_id": ObjectId("5fd62ed3bdb7583eed51ae66"),
                "usuario": "goku"
            },
            {
                "_id": ObjectId("5fd63089ad5b3f007d19fca5"),
                "usuario": "bulma"
            },
            {
                "_id": ObjectId("5fd630c538592c4391a90a1f"),
                "usuario": "vegeta"
            }
        ],
        siguiendo: [{
                "_id": ObjectId("5fd62ed3bdb7583eed51ae66"),
                "usuario": "goku"
            },
            {
                "_id": ObjectId("5fd63089ad5b3f007d19fca5"),
                "usuario": "bulma"
            },
            {
                "_id": ObjectId("5fd630c538592c4391a90a1f"),
                "usuario": "vegeta"
            }
        ],
    },
    {
        "_id": ObjectId("5fd63089ad5b3f007d19fca5"),
        "usuario": "bulma",
        "password": "asd.456",
        "nombre": "Bulma",
        "urlImagen": "images/profile-pics/bulma.jpg",
        "seguidores": [{
                "_id": ObjectId("5fd62fc1822869b96b7d162f"),
                "usuario": "krillin"
            },
            {
                "_id": ObjectId("5fd62ed3bdb7583eed51ae66"),
                "usuario": "goku"
            },
            {
                "_id": ObjectId("5fd630c538592c4391a90a1f"),
                "usuario": "vegeta"
            }
        ],
        siguiendo: [{
                "_id": ObjectId("5fd62fc1822869b96b7d162f"),
                "usuario": "krillin"
            },
            {
                "_id": ObjectId("5fd62ed3bdb7583eed51ae66"),
                "usuario": "goku"
            },
            {
                "_id": ObjectId("5fd630c538592c4391a90a1f"),
                "usuario": "vegeta"
            }
        ]
    },
    {
        "_id": ObjectId("5fd630c538592c4391a90a1f"),
        "usuario": "vegeta",
        "password": "asd.456",
        "nombre": "Vegeta",
        "urlImagen": "images/profile-pics/vegeta.jpg",
        "seguidores": [{
                "_id": ObjectId("5fd62fc1822869b96b7d162f"),
                "usuario": "krillin"
            },
            {
                "_id": ObjectId("5fd63089ad5b3f007d19fca5"),
                "usuario": "bulma"
            },
            {
                "_id": ObjectId("5fd62ed3bdb7583eed51ae66"),
                "usuario": "goku"
            }
        ],
        siguiendo: [{
                "_id": ObjectId("5fd62fc1822869b96b7d162f"),
                "usuario": "krillin"
            },
            {
                "_id": ObjectId("5fd63089ad5b3f007d19fca5"),
                "usuario": "bulma"
            },
            {
                "_id": ObjectId("5fd62ed3bdb7583eed51ae66"),
                "usuario": "goku"
            }
        ]
    }
])

// Tiktoks
db.tiktoks.insertMany([
    {
        "_id": ObjectId(),
        "titulo": "¡Ya basta freezer!",
        "fecha": "12/12/2012",
        "video": "videos/1.mp4",
        "tituloCancion": "Cha la head cha la!",
        "idUsuario": ObjectId("5fd62ed3bdb7583eed51ae66"),
        "likes": 10,
        "shares": 15,
        "comentarios": [
        { "_id": ObjectId(), "usuario": "krillin", "comentario": "Gokuuuuuuuuu!!!!!" },
        { "_id": ObjectId(), "usuario": "vegeta", "comentario": "Insecto!!!!!" }
        ],
        "hashtags": [
        { "_id": ObjectId("5fd63496134b64d58b08d6f4"), "hashtag": "Dogs" },
        { "_id": ObjectId("5fd634a21ddbfb2f997d4bd6"), "hashtag": "Freezer" },
        { "_id": ObjectId("5fd634ac55c0b953c7dec4af"), "hashtag": "DragonBall" }
        ]
    },
    {
        "_id": ObjectId(),
        "titulo": "Aprobaremos el examen?",
        "fecha": "12/12/2012",
        "video": "videos/2.mp4",
        "tituloCancion": "Cha la head cha la!",
        "idUsuario": ObjectId("5fd62fc1822869b96b7d162f"),
        "likes": 20,
        "shares": 45,
        "comentarios": [
        { "_id": ObjectId(), "usuario": "goku", "comentario": "Aun no lo sabemos XD" },
        { "_id": ObjectId(), "usuario": "vegeta", "comentario": "Ten fe, amigo :D" }
        ],
        "hashtags": [
        { "_id": ObjectId("5fd63496134b64d58b08d6f4"), "hashtag": "Dogs" },
        { "_id": ObjectId("5fd634a21ddbfb2f997d4bd6"), "hashtag": "Freezer" },
        { "_id": ObjectId("5fd634ac55c0b953c7dec4af"), "hashtag": "DragonBall" }
        ]
    }
])

// Hashtags
db.hashtags.insertMany([
    {
        "_id": ObjectId("5fd63496134b64d58b08d6f4"),
        "hashtag": 'Dogs',
        "videos": 1000000000 
    },
    {
        "_id": ObjectId("5fd634a21ddbfb2f997d4bd6"),
        "hashtag": 'Freezer',
        "videos": 1000000000
    },
    {
        "_id":  ObjectId("5fd634ac55c0b953c7dec4af"),
        "hashtag": 'DragonBall',
        "videos": 1000000000
    }
])
