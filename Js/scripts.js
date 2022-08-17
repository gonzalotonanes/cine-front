//import getFunctions from "./Services/FetchFuntions.js";
import {GetFunctionsByMovie, BuscarPorAmbos, BuscarFecha} from "./Services/FetchFuntions.js";
import {generarPeliculas} from "./Components/RenderPeliculasBuscadas.js"
import {getMovieById} from "./Services/FetchMovie.js"

let funcionesMovie;
let movies;

const probar = ()  =>{

    $("#boton-buscar").click(  async ()=>{  
      
      let pelicula = document.getElementById("select-movie").value;
      let fecha = document.getElementById("fecha").value;
      console.log("PELICULA:",pelicula);
      console.log("FECHA:",fecha);
      if(pelicula=="" && fecha==""){
        return;
      }

      if(pelicula !="" && fecha !=""){
        funcionesMovie= await BuscarPorAmbos(pelicula, fecha);
        console.log("Funciones", funcionesMovie);
      }

      if(pelicula==""){
        funcionesMovie= await BuscarFecha(fecha);
        console.log("Funciones 3", funcionesMovie)
      }


      //BUSCAR POR PELÍCULA
      if(fecha==""){
        
        funcionesMovie= await GetFunctionsByMovie(pelicula);
        console.log("Funciones 2", funcionesMovie)    
        let ids= obtenerIds(funcionesMovie);

        let movies= await getMovieById(ids[0]);
        console.log("movies ids", movies);
          generarPeliculas(funcionesMovie,movies);

        }     
    });

    
}

function borrarDatos(){
  
  document.getElementById("muestra-pelis").innerHTML="";
}

function obtenerIds(funcionesMovie){
  let ids = [];
      ids= funcionesMovie.map(x =>x.idMovie);
  return ids;
}

export default probar;