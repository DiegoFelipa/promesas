async function showGitHubPersonal(){
  //fetch devuelve una promesa
  let response = await fetch('https://api.github.com/users/DiegoFelipa/repos')
  //json() retorna una promesa
  let listaRepos = await response.json();
  console.log(listaRepos);
}

//showGitHubPersonal();

function getRepos(){
  fetch('https://api.github.com/users/DiegoFelipa/repos')
    .then(respuesta => respuesta.json())
    .then(datos => {
      console.log(datos)
    })
}

getRepos();