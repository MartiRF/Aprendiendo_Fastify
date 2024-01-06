import { UserModel } from "../Models/UserModel.js";

class UserController{
  constructor(){

  }
  //create
  async create(request,reply) {
    try {
      const user = await UserModel.create(request.body);
      if(user){
        return reply.status(200).send({user})
      }
    } catch (error) {
        reply.status(500).send({error})
    }
  }
  //Read
  async read(request,reply){
    try {
      const user = await UserModel.findAll({
        attributes: ['fullname','password','id']
      });
      if(user){
        return reply.status(200).send({user})
      }
    } catch (error) {
      reply.status(500).send({error})
    }
  }
    //ReadOne
  async readOne(request, reply){
    try {
      const {id} = request.params;
      const user = await UserModel.findByPk(id);
      if(user === null){
        return reply.status(404).send("Usuario no encontrado")
      }else{
        return reply.status(200).send(user)
      }
    } catch (error) {
      console.log(error)
      return reply.send('error readOne')
    }
  }
  //Update
  async update(request,reply){
    try {
      const {id} = request.params;
      
      const userModel = await UserModel.update(request.body,{
        where: {id}
      });
      if (userModel[0]===1) {
        return reply.status(201).send(`Registro ${id} actualizado`)
      }else if(userModel[0]=== 0){
        return reply.status(404).send('Registro ${id} no encotrado')
      }
    } catch (error) {
      reply.status(500).send({error})
    }
  }

  //Delete
  async delet(request,reply){
    try {
      const id = request.body.id;
      const deleted = await UserModel.destroy({
        where:{
          id:[id]
        }
      })
      if(deleted){
        return reply.status(200).send({done:'Registro eliminado'})
      }
      if(deleted === 0){
        return reply.send('Registro ya eliminado')
      }
    } catch (error) {
      reply.status(500).send({error})
    }
  }
}
export default new UserController();