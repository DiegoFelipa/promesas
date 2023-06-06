const { allSettled } = require('bluebird')
let request = require('request-promise')

//Las promesas retornar OBJETOS
let promesa = request('https://www.google.com')

//Se administran utilizando...
//fullfiled = completada con éxito
promesa.then( function(){
  console.log('URL cargada')
})

//reject = rechazado
promesa.catch(function(error){
  console.log('Falló la consulta')
  console.log(error)
})

//Se ejecuta luego de then/catch
//settled = finalizado
promesa.finally(function(){
  console.log('Promesa finalizada')
})
