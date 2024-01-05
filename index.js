import Fastify from "fastify"
import cors from "@fastify/cors"
import { rutas } from "./rutas.js"
import db from './db.js';


const fastify = Fastify({logger:true})
await fastify.register(cors,{

})

//Ruta inicial 
fastify.get("/",async function handler(req, res){
  return{hello:"world"};
});

//Rutas de rutes.js
rutas.forEach(ruta => {
  fastify.route(ruta)
})
//Conexion a la base de datos
async function dateBase(){
  try {
    await db.sync();
    console.log("Conectadoa  Base DE DATOS...")
  } catch (error) {
    console.log(error)
  }
}
//Ejecucion de aplicacion
try {
  await fastify.listen({port:3001});
  await dateBase();
} catch (error) {
  fastify.log.error(error);
  process.exit(1);
}