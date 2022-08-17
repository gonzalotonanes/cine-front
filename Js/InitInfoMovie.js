import RenderMovie from './Components/RenderMovie.js'

window.onload = () => {
const params = new URLSearchParams(document.location.search);
const s = params.get("id");

RenderMovie(s);
}

