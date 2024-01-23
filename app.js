let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

//console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDelUsuario = parseInt(document.getElementById('valorUsuario').value);

    console.log('Intentos ' + intentos)
    if (numeroDelUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número  en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'} `);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDelUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';    
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*10)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
        //listaNumerosSorteados = [];
    } else {
        //verificar si el numero esta incluido en la lista
        //include recorre la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            //recursividad - llamar funcion asi misma
            return generarNumeroSecreto();
        } else {
            //push - agrega el numero a la lista
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar  caja
    limpiarCaja();
    //indicar mensa de intervalo
    //generar el numero aleatorio
    //Inicializar el numero
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled',true);
    
}

//Funciones en USO
condicionesIniciales();

