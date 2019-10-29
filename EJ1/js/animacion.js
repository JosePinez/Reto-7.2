// RETO 7.2 - JOSE MANUEL PIÑEZ

//function that shows the content of the element when the mouse passes over it.
function mostrar(indice){
    var ul = document.getElementById("ul");
    var list = ul.getElementsByTagName("li");
    var element = document.getElementsByTagName("div");
    element[indice].style.opacity = "1";
    element[indice].style.transitionDuration = "3s";
    list[indice].style.marginLeft = "20px";
    list[indice].style.transitionDuration = "3s";
}
//function that hides the content of the element when the mouse moves the focus away from the element
function ocultar(indice){
    var ul = document.getElementById("ul");
    var list = ul.getElementsByTagName("li");
    var element = document.getElementsByTagName("div");
    element[indice].style.opacity = "0";
    element[indice].style.transitionDuration = "2s";
    list[indice].style.marginLeft = "0px";
    list[indice].style.transitionDuration = "2s";
}