import { UserModel } from "../Models/UserModerl";

class UserController{
  constructor(){

  }
  //create
  async create(request,reply) {
    const user = await UserModel.create(request.body);
    if(user){
      return reply.status(200).send({user:'Creado'})
    }
  }
}
export default new UserController();