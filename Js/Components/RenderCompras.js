import {GetFuncionById} from '../Services/FetchFuntions.js'


const generarInfo = (json) =>{


    $("#datos").append(
        `
        

        <label class="label-cantidad" for="" >Cantidad</label>
        <input class="input-cantidad" type="number" id="cantidad">
        <div>
        <button id="boton-comprar">Comprar!</button>
        </div>
        
        
        `
    );

}


const RenderCompra = (id) =>{

    console.log("id",id);
    GetFuncionById(id,generarInfo);    
}

export default RenderCompra;
