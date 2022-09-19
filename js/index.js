
// Navbar sticky
$(document).ready(function () {
    var navBarPos = $("nav").offset().top;


    $(window).scroll(function () {
        var scrollP = $(this).scrollTop();
        if (scrollP >= navBarPos) {
            $("nav").addClass("sticky");
            $("nav").css('opacity', '0.9');
        } else {
            $("nav").removeClass("sticky");
            $("nav").css('opacity', '1');
        }
    });
});
// Navbar sticky

//Loading
$(window).on("load", function () {
    $(".loader-container").fadeOut(1000);
});
//Loading

// Calculadora de Precios
let costoMaritimo = 16;
let costoAereo = 4;

function limpiarMaritimo() {
    document.querySelector('#maritimo').reset();
    document.getElementById('resultado-maritimo').innerHTML = "";
}

function limpiarAereo() {
    document.querySelector('#aereo').reset();
    document.getElementById('resultado-aereo').innerHTML = "";
}

function maritimo() {
    let formulaMaritimo = document.querySelector('.valorMaritimoUno').value * document.querySelector('.valorMaritimoDos').value * document.querySelector('.valorMaritimoTres').value / 1728;
    let resolver = Math.round(formulaMaritimo)
    
    if(formulaMaritimo == ""){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Debe ingresar los datos en las 3 casillas'
          })
    } else {
        document.getElementById('resultado-maritimo').innerHTML = (resolver * costoMaritimo) + ("$");
    }
}

function aereo() {
    let formulaAereo = document.querySelector('.valorAereoUno').value * document.querySelector('.valorAereoDos').value * document.querySelector('.valorAereoTres').value / 166;
    let PesoCalcular = Math.round(formulaAereo);
    let valorPeso = document.querySelector('.valorAereoPeso').value;

    if(formulaAereo == ""){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Debe ingresar los datos en las 4 casillas'
          })
    } else {
        if (valorPeso < formulaAereo) {
            document.getElementById('resultado-aereo').innerHTML = (PesoCalcular * costoAereo) + ("$");
        } else if(valorPeso > 7.5){
            document.getElementById('resultado-aereo').innerHTML = (valorPeso * costoAereo) + ("$");
        }
    }
}
// Calculadora de Precios