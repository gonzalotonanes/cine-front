const url = "http://localhost:8080/api/tickets";
/*
const postTicket = (callback) =>{
    
    fetch(url)
    .then( (httpResponse) => {
        if(httpResponse.ok)
        return httpResponse.json();
    })
    .then( body =>{
        
        callback(body);
    })

}*/
const data ={
    funcionid: 3,
    usuario: "gonzalo",
    cantidad: 3
}



const postTicket = (idFuncion,usuario,cant) => {
    console.log("Estoy en el post")
    fetch(url, {
      method: 'POST',
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({ funcionId: idFuncion, usuario: usuario, cantidad: cant})
  })
  .then((httpresponse)=>{
    if(httpresponse.ok){
      return httpresponse.json();
    }
  });
  
}
export default postTicket;