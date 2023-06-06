//Funciones asíncronas
async function sumar(val1,val2){
  //El retorno consturye y asume resolve para la promesa IMPLÍCITA
  return val1 + val2;

}

//El resultado será una promesa con el valor 15
//el estado pendiente no se muestra ya que se ejecuta INMEDIATAMENTA
console.log(sumar(5,10))


function calcular(){
  //setTimeout(callback,tiempoEspera, resultado)
  return new Promise((resolve,reject)=>{
    setTimeout(resolve, 1000, 20);
  })
}

console.log(calcular())

//¿Cómo vemos el valor que nos trae la promesa en la función calcular()?
calcular()
  .then((res)=>{
    console.log(res)
  })