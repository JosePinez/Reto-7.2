//RETO 7.2 - JOSE MANUEL PIÑEZ

//function that shows the child element by passing the mouse over the parent element.
function mostrar(indice){
    var personaje = document.getElementsByTagName("table");
    var nameClass = personaje[indice].className;
    if(nameClass == "tablas"){
        personaje[indice].classList.remove("tablas");
        personaje[indice].classList.add("tablasMostradas");
    }else{
        personaje[indice].classList.remove("tablasMostradas");
        personaje[indice].classList.add("tablas");
    }
}
