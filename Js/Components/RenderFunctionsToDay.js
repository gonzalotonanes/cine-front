import getFunctionsToDay from "../Services/FetchFuncionToDay.js";
import {getMovie}  from "../Services/FetchMovie.js";

const generatedFunctionToDay = (json) =>{

  json.forEach(element => {
  
    $("#funcionesDia").append(
        `
        <div class="wrapper-card">
        <div class="card">
          <figure id="${element.id}">
          </figure>
          <div class="contenido-card">
            <h3>${element.hour}</h3>
          </div>
        </div>
      </div>
        `
    )

    load(element.idMovie);
    getMovie(element.idMovie,obtenerPeliculaDeFuncion, element.id);

    
});
}
//pasar el json de pelicula funciona

const obtenerPeliculaDeFuncion = (json, id) =>{
let query =  "#" +id;
          $(query).append(
            `
            <img src="${json.poster}" alt="alt">
            `
          )

}
//FUNCIONES DE PRUEBA


function addRedirect(id) {
  var t2 = document.getElementById("id");
  window.location.href = "infoMovie.html?id=" + this.id;
}

function load(id) {
  console.log("Ejecutando aca")
  var el = document.getElementById(id);
  el.addEventListener("click", addRedirect, false);
}


 const RenderFunctions = () =>{
    getFunctionsToDay(generatedFunctionToDay);
    
    //getMovie(generateMovies);
    //fechaDefault(generatedFunctionToDay);
 }


export default RenderFunctions;