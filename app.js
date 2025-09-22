const amigoListado = document.getElementById('amigo');
const listaAmigos = [];
const ulListaAmigos = document.getElementById('listaAmigos');
const ulRestultado = document.getElementById("resultado")

function agregarAmigo() {
    if (amigoListado.value == ""){
        alert("No hay datos por ingresar");
    }
    listaAmigos.push(amigoListado.value);
    ulListaAmigos.innerHTML = ulListaAmigos.innerHTML + `<li>${amigoListado.value}</li>`;
    limpiarCaja();
    
}

function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}


function sortearAmigo(){
    const random = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[random];
    console.log(amigoSecreto)
    ulRestultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
}