import RenderCompras from './Components/RenderCompras.js'


window.onload = () =>{
    const params = new URLSearchParams(document.location.search);
    const id = params.get("id");
    console.log("aqui toy",document.location);

    RenderCompras(id);
}