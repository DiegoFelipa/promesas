let request = require("request")

request ('https://www.senati.edu.pe', function(){
  console.log("URL cargada correctamente")
})

// Este metodo log se ejecuta antes, ya que todo el codigo se interpreta en paralelo
console.log('esto debe suceder despues')