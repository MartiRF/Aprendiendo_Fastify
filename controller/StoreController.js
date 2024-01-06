import { StoreModel } from "../Models/StoreModel.js"

class StoreController{
  constructor(){

  }
  async create(request,reply){
    try {
      const store = await StoreModel.create(request.body)
      if (store) {
        return reply.status(200).send({store})
      }
    } catch (error) {
      reply.status(500).send({error})
    }
  }
}
export default new StoreController();