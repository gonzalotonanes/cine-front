const url = "http://localhost:8080/api/funcion";


const getFunctionsToDay = (callback) =>{
    
    fetch(url)
    .then( (httpResponse) => {
        if(httpResponse.ok)
        return httpResponse.json();
    })
    .then( body =>{
        
        callback(body);
    })

}

export default getFunctionsToDay;