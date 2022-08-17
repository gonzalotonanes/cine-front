import {} from '../Services/FetchNewTicket.js';
import { getMovie } from '../Services/FetchMovie.js'
import { ObtenerFuncionPorIdPelicula } from '../Services/FetchFuntions.js';
let funcion_elegida;

const generarDivs = (json) => {

    console.log(json.id);

    $("#titulo").append(
        `<h2 class="title">${json.title}</h2>`
    )

    //ACA AGREGO EL MODAL


    $("#main-div").append(`
        <div class="modal" tabindex="-1" id="modall">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Compras</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" id="btn-cerrar" ></button>
            </div>
            <div class="modal-body">
            <p>Ingrese cantidad de entradas</p>
            <input type="number" id="cantidad" name="cantidad" min="0" max="5">
            <p>Ingrese usuario</p>
            <input type="text" id="usuario" name="usuario" min="0" max="5">
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="btn-cerrar" >Close</button>
              <button type="button" class="btn btn-primary" id="btn-comprar" >Comprar</button>
            </div>
          </div>
        </div>
      </div>
        `)
    $("#main-div").append(
        `
            <div class="row">
                <div class="col-12 col-md-6" id="infoFunciones">      
            </div>
            <div class="col-12 col-md-6 ">
                <div class="row">
                    <div class="container trailer">
                    <iframe width="100%" height="315" src="${json.trailer}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <div class="row mt-3">
                <div class="col-4">
                        <div>
                            <figure>
                            <img src="${json.poster}" class="img-mini" >
                            </figure>
                        </p>
                        </div>
                    </div>
                    <div class="col-8">
                        <div>
                            <h4 class="sinopsis-titulo" >Sinopsis</h4>
                            <p class="sinopsis">${json.synopsis}
                        </p>
                        </div>
                    </div>
                </div>
            </div>
            `
    );
}

const generarInfoFunciones = (json) => {
    if (json == undefined) {
        $("#infoFunciones").append(
            `
            <h2 class="funciones-disp" >No hay funciones disponibles</h2>
            `
        )
        return;
    }

    $("#infoFunciones").append(
        `<h2 class="funciones-disp" >funciones disponibles</h2>`
    )
    json.forEach(element => {
        $("#infoFunciones").append(
            `
            <label class="boton-horario" id="${element.id}"> ${element.date} <br>${element.hour} </label>
            
            `
        );
        AgregarEvento(element.id);
    });
    agregarBotonCerrar();
}

function agregarBotonCerrar() {
    $("#btn-cerrar").click(function () {
        $("#modall").css("display", "none");
    });

    const data ={}
    const url = "http://localhost:8080/api/tickets";
    let r;
    
    $("#btn-comprar").click(function () {
        data.funcionid = funcion_elegida;
        data.cantidad =  $("#cantidad").val();
        data.usuario = $("#usuario").val();
        console.log(data);
        console.log("------------------")
        fetch(url,{
            method : 'POST',
            body : JSON.stringify(data),
            headers : {
                "Content-type" : "application/json"
            }
        }).then(respuesta => 
            respuesta.json( r =respuesta.status )
        )
        .then(json=>console.log(json));

       //AGREGAR UN TIMEOUT
       setTimeout(() => {
        comprobar(r);
            }, 3000)

    });

   
}

function comprobar(r){
    if (r==201){
        alert("Venta realizada con exito")
    }
    if(r==404){
        alert("No hay suficientes entradas")
    }
    else{
        alert("No se pudo realizar la venta")
    }
    $("#modall").css("display", "none");
    $("#cantidad").attr("value",0);
}

function AgregarEvento(id) {
    let ide = "#" + id;
    let modal = $("#modall");
    funcion_elegida = id;
    $(ide).bind("click", () => {
        console.log(funcion_elegida)
        modal.show();
    });
}

const RenderMovie = async (id) => {
    getMovie(id, generarDivs);
    setTimeout(() => {
        ObtenerFuncionPorIdPelicula(id, generarInfoFunciones);
    }, 1000)
}
export default RenderMovie;