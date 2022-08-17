const url = 'http://localhost:8080/api/pelicula/';

const getMovie = async (id, callback, idFuncion) => {
   await fetch(url + id)
        .then((httpResponse) => {
            if (httpResponse.ok)
                return httpResponse.json();
        })
        .then(body => {
            callback(body, idFuncion);
        })


};

//PELI CON 1 SOLO PARAMETRO
const getMovieById = async (id) => { 
    var pelicula;
    await fetch(url + id)
    .then((response)=>response.json())
    .then((data)=>{
     pelicula = data;
    });
    return pelicula
}

const getMovieById2 = async (id) => { 
    var pelicula;
    await fetch(url + id)
    .then((response)=>response.json())
    .then((data)=>{
     pelicula = data;
    });
    return pelicula
}

export  {getMovie, getMovieById} ;
//export default   getMovieById ;