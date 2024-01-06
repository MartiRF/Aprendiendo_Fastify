import StoreController from "./controller/StoreController.js"
import UserController from "./controller/UserController.js"

export const rutas = [

/* Ruta de usuarios */
  //Obtener registros
  {
    method:"GET",
    url:"/user",
    handler: UserController.read
  },
    //Obtener one registro
  {
    method:'GET',
    url:'/user/:id',
    handler: UserController.readOne
  },
  //Crear registros
  {
    method:'POST',
    url:'/user',
    handler: UserController.create
  },
  //Actualizar registros
  {
    method:'PUT',
    url:'/user/:id',
    handler:UserController.update
  },
  //Eliminar
  {
    method:'DELETE',
    url:'/user',
    handler:UserController.delet
  },

/* STORE */
  {
    method:'GET',
    url:'/store',
    handler:StoreController.create
  }
]