//Funciones tradicionales
function saludar(nombre){
  return `Bienvenido ${nombre}`
}

function mostrarAmigos(){
  return['Juan','Luis','Pedro']
}

let resultado1 = saludar('Diego')
//console.log(resultado1)       //forma1
//console.log(mostrarAmigos())  //forma2


//funcion flecha
const perfil = {
  'apellidos'   : 'Felipa Avalos',
  'nombres'     : 'Diego Enrique',
  'edad'        : 23,
  'estaCasado'  : false,
  'amigos'      : ['Geraldine','Piero', 'Luis'],
  'contacto'    : {
    'telefonos' : ['930499506','943252228','958369370'],
    'ciudad'    : 'Chincha',
    'casaPropia': false
    },
  'skill'       : function(){
    //console.log("¡Yo se programar!")
    return "Yo se programar"
  }
}

console.log(perfil.skill())