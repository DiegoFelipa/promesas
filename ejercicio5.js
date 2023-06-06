const { reject } = require("bluebird");

//Encadenar promesas
function primeraPromesa(){
  return new Promise((resolve, reject)=>{
    setTimeout(resolve, 1000, "Promesa 1")
  })
}

function segundaPromesa(valorEntrada){
  console.log(valorEntrada)
  return new Promise((resolve, reject)=>{
    setTimeout(resolve, 500, "Promesa 2")
  })
}


//¿Cómo la promesa 1, pasa un valora a la promesa 2?
//1. Lapromes 2, debe recibir parametros de entrada
primeraPromesa()
  .then(segundaPromesa)
  .then((respuesta)=>{
    console.log(respuesta)
  })


//VERSIÓN INICIAL
/*
primeraPromesa()
  .then(segundaPromesa)
  .then((respuesta)=>{
    console.log(respuesta)
  })
*/
