db.usuarios.insertMany([
   {
         "nombre":"Pedro",
         "apellido":"Martinez",
         "ordenes":[
            {
               "nombreProducto":"Producto 1",
               "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
               "cantidad":2,
               "precio":466669.99
            },
            {
               "nombreProducto":"Producto 2",
               "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
               "cantidad":2,
               "precio":49.99
            }
         ]
   },
   {
         "nombre":"Juan",
         "apellido":"Perez",
         "ordenes":[
            {
               "nombreProducto":"Producto 3",
               "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
               "cantidad":2,
               "precio":49.99
            },
            {
               "nombreProducto":"Producto 4",
               "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
               "cantidad":2,
               "precio":49.99
            },
            {
               "nombreProducto":"Producto 5",
               "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
               "cantidad":3,
               "precio":79.99
            }
         ]
   },
   {
         "nombre":"Maria",
         "apellido":"Rodriguez",
         "ordenes":[
            {
               "nombreProducto":"Producto 5",
               "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
               "cantidad":2,
               "precio":49.99
            },
            {
               "nombreProducto":"Producto 6",
               "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
               "cantidad":2,
               "precio":49.99
            },{
               "nombreProducto":"Producto 7",
               "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
               "cantidad":2,
               "precio":49.99
            }
         ]
   }
]);

db.categorias.insertMany(
   [
      {
         "nombreCategoria":"Farmacias",
         "descripcion":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
         "color":"#9CD0FA",
         "icono":"../assets/images/test.png",
         "empresas":[
            {
               "_id":ObjectId(),
               "nombreEmpresa": "Empresa 1",
               "imagen":"img/banner.jpg",
               "productos":[
                     {
                        "_id":ObjectId(),
                        "nombreProducto": "Producto Farmancia 1",
                        "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        "precio": 999949.99
                     },
                     {
                        "_id":ObjectId(),
                        "nombreProducto": "Producto Farmancia 2",
                        "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        "precio": 49.99
                     },
                     {
                        "_id":ObjectId(),
                        "nombreProducto": "Producto Farmancia 3",
                        "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        "precio": 49.99
                     },
                     {
                        "_id":ObjectId(),
                        "nombreProducto": "Producto Farmancia 4",
                        "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        "precio": 49.99
                     }
               ]
            },
            {
               "_id":ObjectId(),
               "nombreEmpresa": "Empresa 2",
               "imagen":"img/banner.jpg",
               "productos":[
                     {
                        "_id":ObjectId(),
                        "nombreProducto": "Producto 1",
                        "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        "precio": 49.99
                     },
                     {
                        "_id":ObjectId(),
                        "nombreProducto": "Producto 2",
                        "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        "precio": 49.99
                     },
                     {
                        "_id":ObjectId(),
                        "nombreProducto": "Producto 3",
                        "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        "precio": 49.99
                     },
                     {
                        "_id":ObjectId(),
                        "nombreProducto": "Producto 4",
                        "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        "precio": 49.99
                     }
               ]
            },
            {
               "_id":ObjectId(),
               "nombreEmpresa": "Empresa 3",
               "imagen":"img/banner.jpg",
               "productos":[
                     {
                        "_id":ObjectId(),
                        "nombreProducto": "Producto 1",
                        "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        "precio": 49.99
                     },
                     {
                        "_id":ObjectId(),
                        "nombreProducto": "Producto 2",
                        "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        "precio": 49.99
                     },
                     {
                        "_id":ObjectId(),
                        "nombreProducto": "Producto 3",
                        "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        "precio": 49.99
                     },
                     {
                        "_id":ObjectId(),
                        "nombreProducto": "Producto 4",
                        "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        "precio": 49.99
                     }
               ]
            }
         ]
   },
   {
         "nombreCategoria":"Restaurantes",
         "descripcion":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
         "color":"#FFA8AA",
         "icono":"../assets/images/test.png",
         "empresas":[
            {
               "_id":ObjectId(),
               "nombreEmpresa": "Empresa 1",
               "imagen":"img/banner.jpg",
               "productos":[
                     {
                        "_id":ObjectId(),
                        "nombreProducto": "Producto 1",
                        "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        "precio": 49.99
                     },
                     {
                        "_id":ObjectId(),
                        "nombreProducto": "Producto 2",
                        "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        "precio": 49.99
                     },
                     {
                        "_id":ObjectId(),
                        "nombreProducto": "Producto 3",
                        "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        "precio": 49.99
                     },
                     {
                        "_id":ObjectId(),
                        "nombreProducto": "Producto 4",
                        "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        "precio": 49.99
                     }
               ]
            },
            {
               "_id":ObjectId(),
               "nombreEmpresa": "Empresa 2",
               "imagen":"img/banner.jpg",
               "productos":[
                     {
                        "_id":ObjectId(),
                        "nombreProducto": "Producto 1",
                        "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        "precio": 49.99
                     },
                     {
                        "_id":ObjectId(),
                        "nombreProducto": "Producto 2",
                        "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        "precio": 49.99
                     },
                     {
                        "_id":ObjectId(),
                        "nombreProducto": "Producto 3",
                        "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        "precio": 49.99
                     },
                     {
                        "_id":ObjectId(),
                        "nombreProducto": "Producto 4",
                        "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        "precio": 49.99
                     }
               ]
            },
            {
               "_id":ObjectId(),
               "nombreEmpresa": "Empresa 3",
               "imagen":"img/banner.jpg",
               "productos":[
                     {
                        "_id":ObjectId(),
                        "nombreProducto": "Producto 1",
                        "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        "precio": 49.99
                     },
                     {
                        "_id":ObjectId(),
                        "nombreProducto": "Producto 2",
                        "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        "precio": 49.99
                     },
                     {
                        "_id":ObjectId(),
                        "nombreProducto": "Producto 3",
                        "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        "precio": 49.99
                     },
                     {
                        "_id":ObjectId(),
                        "nombreProducto": "Producto 4",
                        "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        "precio": 49.99
                     }
               ]
            }
         ]
   },
   {
         "nombreCategoria":"Salud",
         "descripcion":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
         "color":"#D3B7F3",
         "icono":"../assets/images/test.png",
         "empresas":[
            {
               "_id":ObjectId(),
               "nombreEmpresa": "Empresa 1",
               "imagen":"img/banner.jpg",
               "productos":[
                     {
                        "_id":ObjectId(),
                        "nombreProducto": "Producto 1",
                        "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        "precio": 49.99
                     },
                     {
                        "_id":ObjectId(),
                        "nombreProducto": "Producto 2",
                        "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        "precio": 49.99
                     },
                     {
                        "_id":ObjectId(),
                        "nombreProducto": "Producto 3",
                        "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        "precio": 49.99
                     },
                     {
                        "_id":ObjectId(),
                        "nombreProducto": "Producto 4",
                        "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        "precio": 49.99
                     }
               ]
            },
            {
               "_id":ObjectId(),
               "nombreEmpresa": "Empresa 2",
               "imagen":"img/banner.jpg",
               "productos":[
                     {
                        "_id":ObjectId(),
                        "nombreProducto": "Producto 1",
                        "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        "precio": 49.99
                     },
                     {
                        "_id":ObjectId(),
                        "nombreProducto": "Producto 2",
                        "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        "precio": 49.99
                     },
                     {
                        "_id":ObjectId(),
                        "nombreProducto": "Producto 3",
                        "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        "precio": 49.99
                     },
                     {
                        "_id":ObjectId(),
                        "nombreProducto": "Producto 4",
                        "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        "precio": 49.99
                     }
               ]
            },
            {
               "_id":ObjectId(),
               "nombreEmpresa": "Empresa 3",
               "imagen":"img/banner.jpg",
               "productos":[
                     {
                        "_id":ObjectId(),
                        "nombreProducto": "Producto 1",
                        "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        "precio": 49.99
                     },
                     {
                        "_id":ObjectId(),
                        "nombreProducto": "Producto 2",
                        "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        "precio": 49.99
                     },
                     {
                        "_id":ObjectId(),
                        "nombreProducto": "Producto 3",
                        "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        "precio": 49.99
                     },
                     {
                        "_id":ObjectId(),
                        "nombreProducto": "Producto 4",
                        "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        "precio": 49.99
                     }
               ]
            }
         ]
   },
   {
         "nombreCategoria":"Café",
         "descripcion":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
         "color":"#0AD1AE",
         "icono":"../assets/images/test.png",
         "empresas":[
            {
               "_id":ObjectId(),
               "nombreEmpresa": "Empresa 1",
               "imagen":"img/banner.jpg",
               "productos":[
                     {
                        "_id":ObjectId(),
                        "nombreProducto": "Producto 1",
                        "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        "precio": 49.99
                     },
                     {
                        "_id":ObjectId(),
                        "nombreProducto": "Producto 2",
                        "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        "precio": 49.99
                     },
                     {
                        "_id":ObjectId(),
                        "nombreProducto": "Producto 3",
                        "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        "precio": 49.99
                     },
                     {
                        "_id":ObjectId(),
                        "nombreProducto": "Producto 4",
                        "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        "precio": 49.99
                     }
               ]
            },
            {
               "_id":ObjectId(),
               "nombreEmpresa": "Empresa 2",
               "imagen":"img/banner.jpg",
               "productos":[
                     {
                        "_id":ObjectId(),
                        "nombreProducto": "Producto 1",
                        "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        "precio": 49.99
                     },
                     {
                        "_id":ObjectId(),
                        "nombreProducto": "Producto 2",
                        "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        "precio": 49.99
                     },
                     {
                        "_id":ObjectId(),
                        "nombreProducto": "Producto 3",
                        "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        "precio": 49.99
                     },
                     {
                        "_id":ObjectId(),
                        "nombreProducto": "Producto 4",
                        "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        "precio": 49.99
                     }
               ]
            },
            {
               "_id":ObjectId(),
               "nombreEmpresa": "Empresa 3",
               "imagen":"img/banner.jpg",
               "productos":[
                     {
                        "_id":ObjectId(),
                        "nombreProducto": "Producto 1",
                        "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        "precio": 49.99
                     },
                     {
                        "_id":ObjectId(),
                        "nombreProducto": "Producto 2",
                        "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        "precio": 49.99
                     },
                     {
                        "_id":ObjectId(),
                        "nombreProducto": "Producto 3",
                        "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        "precio": 49.99
                     },
                     {
                        "_id":ObjectId(),
                        "nombreProducto": "Producto 4",
                        "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        "precio": 49.99
                     }
               ]
            }
         ]
   },
   {
         "nombreCategoria":"Bebidas",
         "descripcion":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
         "color":"#F4845E",
         "icono":"../assets/images/test.png",
         "empresas":[
            {
               "_id":ObjectId(),
               "nombreEmpresa": "Empresa 1",
               "imagen":"img/banner.jpg",
               "productos":[
                     {
                        "_id":ObjectId(),
                        "nombreProducto": "Producto 1",
                        "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        "precio": 49.99
                     },
                     {
                        "_id":ObjectId(),
                        "nombreProducto": "Producto 2",
                        "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        "precio": 49.99
                     },
                     {
                        "_id":ObjectId(),
                        "nombreProducto": "Producto 3",
                        "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        "precio": 49.99
                     },
                     {
                        "_id":ObjectId(),
                        "nombreProducto": "Producto 4",
                        "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        "precio": 49.99
                     }
               ]
            },
            {
               "_id":ObjectId(),
               "nombreEmpresa": "Empresa 2",
               "imagen":"img/banner.jpg",
               "productos":[
                     {
                        "_id":ObjectId(),
                        "nombreProducto": "Producto 1",
                        "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        "precio": 49.99
                     },
                     {
                        "_id":ObjectId(),
                        "nombreProducto": "Producto 2",
                        "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        "precio": 49.99
                     },
                     {
                        "_id":ObjectId(),
                        "nombreProducto": "Producto 3",
                        "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        "precio": 49.99
                     },
                     {
                        "_id":ObjectId(),
                        "nombreProducto": "Producto 4",
                        "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        "precio": 49.99
                     }
               ]
            },
            {
               "_id":ObjectId(),
               "nombreEmpresa": "Empresa 3",
               "imagen":"img/banner.jpg",
               "productos":[
                     {
                        "_id":ObjectId(),
                        "nombreProducto": "Producto 1",
                        "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        "precio": 49.99
                     },
                     {
                        "_id":ObjectId(),
                        "nombreProducto": "Producto 2",
                        "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        "precio": 49.99
                     },
                     {
                        "_id":ObjectId(),
                        "nombreProducto": "Producto 3",
                        "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        "precio": 49.99
                     },
                     {
                        "_id":ObjectId(),
                        "nombreProducto": "Producto 4",
                        "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        "precio": 49.99
                     }
               ]
            }
         ]
   }
  ]
);