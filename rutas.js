export const rutas = [
  //Obtener registros
  {
    method:"GET",
    url:"/user",
    handler: function(request, reply){
      reply.status(200).send({user:"GET"})
    }
  },
  //Crear registros
  {
    method:'POST',
    url:'/user',
    handler: function(request, reply){
      reply.status(200).send({user:"POST"})
    }
  },
  //Actualizar registros
  {
    method:'PUT',
    url:'/user',
    handler:function(request,reply){
      reply.status(200).send({user:"PUT"})
    }
  },
  //Eliminar
  {
    method:'DELETE',
    url:'/user',
    handler:function(request,reply){
      reply.status(200).send({user:'DELETE'})
    }
  }
]