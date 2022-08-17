const url = "http://localhost:8080/api/funcion";


export const getFunction = (pelicula, callback) => {

  fetch(url + "?pelicula=" + pelicula)
    .then((httpResponse) => {
      if (httpResponse.ok)
        return httpResponse.json();
    })
    .then(body => {
      callback(body);
    })
}

export async function GetFunctionsByMovie(pelicula) {
  var elemento = [];

  await fetch(url + "?pelicula=" + pelicula)
    .then((response) => response.json())
    .then((data) => {
      elemento = data.map((element) => element);
    });
  return elemento;
}


export async function BuscarPorAmbos(pelicula, fecha) {
  var elemento = [];

  await fetch(url + "?fecha=" + fecha + "&pelicula=" + pelicula)
    .then((response) => response.json())
    .then((data) => {
      elemento = data.map((element) => element);
    });
  return elemento;
}


export async function BuscarFecha(fecha) {
  var elemento = [];

  await fetch(url + "?fecha=" + fecha)
    .then((response) => response.json())
    .then((data) => {
      elemento = data.map((element) => element);
    });

  return elemento;
}

//PROBANDO ESTE Y LE AGREGO UN CALLBACK

export async function FechaDefault(callback) {

  fetch(url)
        .then( (httpResponse) =>{
            if(httpResponse.ok)
            return httpResponse.json();
        })
        .then(body =>{
            callback(body);
        }); 
}







export async function ObtenerFuncionPorIdPelicula(idPelicula, callback) {

  await fetch(url + "/pelicula/" + idPelicula)
    .then((httpResponse) => {
      if (httpResponse.ok)
        return httpResponse.json()
    })
    .then((body) => {
      callback(body);
    }).catch(error => console.error('Error:', error));

}

export async function GetFuncionById(idPelicula, callback) {

  await fetch(url + "/" + idPelicula)
    .then((httpResponse) => {
      if (httpResponse.ok)
        return httpResponse.json()
    })
    .then((body) => {
      callback(body);
    }).catch(error => console.error('Error:', error));

}




export async function GetMoviesByMovie(id) {
  var elemento = [];

  await fetch(url + "?pelicula=" + id)
    .then((response) => response.json())
    .then((data) => {
      elemento = data.map((element) => element);
    });
  return elemento;
}

