import getMovies from '../Services/FetchMovies.js'

import {FechaDefault} from '../Services/FetchFuntions.js';
const RenderMovies = (json) => {

    json.forEach(element => {
        $("#padre").append(
            `
            <div class="wrapper-card">
            <div class="card">
              <figure>
                <img id="${element.id}" src="${element.poster}" alt="">
              </figure>
              <div class="contenido-card">
                <h3>${element.title}</h3>
              </div>
            </div>
          </div>
            `
        )

        //CAMBIO ID POR TITULO
        $("#select-movie").append(
          `
          <option value="${element.title}"> ${element.title}</option>
          `
        )
        load(element.id);
    });
}


function addRedirect(id) {
  var t2 = document.getElementById("id");
  window.location.href = "infoMovie.html?id=" + this.id;
}

function load(id) {
  var el = document.getElementById(id);
  el.addEventListener("click", addRedirect, false);
}

const RenderCards = () => {

    return getMovies(RenderMovies);
    
    //return FechaDefault(RenderMovies);
}

export default RenderCards;

