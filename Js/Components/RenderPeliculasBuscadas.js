export const generarPeliculas = (funciones, movies) =>{

console.log(funciones)
  funciones.forEach(element => {

   
        $("#muestra-pelis").append(
            `
            <div class="wrapper-card">
            <div class="card">
              <figure>
                <img  id="${movies.id}" src="" alt="">
              </figure>
              <div class="contenido-card">
                <p>Fecha ${element.date}</p>
                <p>Hora ${element.hour}</p>
                <p></p>
              </div>
            </div>
          </div>
            `
        );
        load(movies.id);
        
    });


    function addRedirect(id) {
      var t2 = document.getElementById("id");
      window.location.href = "infoMovie.html?id=" + this.id;
    }
    
    function load(id) {
      var el = document.getElementById(id);
      el.addEventListener("click", addRedirect, false);
    }

}
