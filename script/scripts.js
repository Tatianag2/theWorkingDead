import { data } from '../data/data.js';

let fragment = document.createDocumentFragment();
const slider = document.getElementById("slider");
let itemsPeliculas = document.getElementById("itemsPeliculas");
//para renderizar los elementos del slider
data.forEach(pelicula => {
    let div = document.createElement("div");
    div.innerHTML = `<img src="${pelicula.img}"><a class="enlaceInfo" id="${pelicula.posicion}"></a><input class="valorPosicion" value="" type="dissable">`;
    div.className = "sliderItem";
    fragment.appendChild(div);
    slider.appendChild(fragment);
})

//para identificar los botones del slider
const siguiente = document.getElementById("right");
const anterior = document.getElementById("left");
const sliderItem = document.getElementsByClassName("sliderItem");
//desplazamiento del slider hacia la derecha
function mostrarS(){
    let sliderFirst = sliderItem[0];
    slider.style.marginLeft = "-100%";
    function cambio(){
        slider.insertAdjacentElement('beforeend', sliderFirst);
        slider.style.marginLeft = "0%";
    }
    cambio();
}
//desplazamiento del slider hacia la izquierda
function mostrarA(){
    let sliderLast = sliderItem[sliderItem.length - 1];
    slider.style.marginLeft = "100%";
    function cambio(){
        slider.insertAdjacentElement('afterbegin', sliderLast);
        slider.style.marginLeft = "0%";
    }
    cambio();
}
//se agregaron las funciones al evento click de los botones para que se mueva el slider
siguiente.addEventListener('click', function(){
    mostrarS();
    //Para que cada que se de click en el boton desaparezca la tarjeta con la informacion de la pelicula
    [...document.querySelectorAll('.valorPosicion')].forEach(function(item){
        let infoPeliItem = document.getElementById("infoPeliItem");
        item.setAttribute("value", "");
        infoPeliItem.remove();
        
    })
});

anterior.addEventListener('click', function(){
    mostrarA();

    [...document.querySelectorAll('.valorPosicion')].forEach(function(item){
        let infoPeliItem = document.getElementById("infoPeliItem");
        item.setAttribute("value", "");
        infoPeliItem.remove();
        
    })
});