//PARA CONECTARNOS A LA API - FRONTEND MINIMO
let url= "http://127.0.0.1:8000/sumar"; // SI QUIERO CONECTARME A OTRA SOLO PONGO LA URL DE LA API QUE QUIER

let myAPI= url + "?a=5&b=45"; // TAMBIÉN LE CAMBIO LOS PARAMETROS PARA CONECTARME A ESA API EN ESPECIFICO 

async function name(params) crearPeticion(){
//PARA CONECTARSE REMOTANMENTE SE USA FETCH 
    let response =await fetch(myAPI) //await sirve para que ejecute pero espere la respuesta
    let datos = response.json(); // DE ESTA MANERA CONVIERTO LA RESPUESTA A JSON
}

