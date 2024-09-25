let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3


function iniciarJuego(){

    //Esconde sectiones ataque y reiniciar
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'
    let sectionReiniciar = document.getElementById('section-reiniciar')
    sectionReiniciar.style.display = 'none'

    //Crea los botones de ataque
    let botonPersonaje = document.getElementById('boton-personaje')
    botonPersonaje.addEventListener('click',seleccionarPersonajeJugador)

    let botonPiedra = document.getElementById('boton_piedra')
    botonPieda.addEventListener('click',ataquePiedra)
    let botonPapel = document.getElementById('boton_papel')
    botonPepel.addEventListener('click',ataquePapel)
    let botonTijera = document.getElementById('boton_tijera')
    botonTijera.addEventListener('click',ataqueTijera)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click',reiniciarJuego)

}

function seleccionarPersonajeJugador(){

    //Muestra section seleccionar-ataque y oculta seleccionar personaje
    let sectionSeleccionarPersonaje = document.getElementById('seleccionar-personaje')
    sectionSeleccionarPersonaje.style.display = 'none'

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'flex'

    //Verifica que personaje selecciono el jugador
    let inputLuffy = document.getElementById('Luffy')
    let inputZoro = document.getElementById('Zoro')
    let inputChopper = document.getElementById('Chopper')
    let spanPersonajeJugador = document.getElementById('personaje-jugador')

    if(inputLuffy.checked){ 
        spanPersonajeJugador.innerHTML = 'Luffy'
    }else if(inputZoro.checked){
        spanPersonajeJugador.innerHTML = 'Zoro'
    }else if(inputChopper.checked){
        spanPersonajeJugador.innerHTML = 'Chopper'
    }else{
        alert('Selecciona un personaje')
    }
    seleccionarPersonajeEnemigo()
}

//Selecionar el personaje enemigo del jugador aleatoriamente
function seleccionarPersonajeEnemigo(){
    let spanPersonajeEnemigo = document.getElementById('personaje-enemigo')
    let personajeAletorio = aleatorio(1,3)
    if(personajeAletorio == 1){
        spanPersonajeEnemigo.innerHTML = 'Luffy'
    }else if(personajeAletorio ==2){
        spanPersonajeEnemigo.innerHTML = 'Zoro'
    }else{
        spanPersonajeEnemigo.innerHTML = 'Chopper'
    }
}
//Esta atento al llamado de cual ataque selecciono el jugador
function ataquePiedra(){
    ataqueJugador = 'Piedra'
    ataqueAleatorioEnemigo()

}
function ataquePapel(){
    ataqueJugador = 'Papel'
    ataqueAleatorioEnemigo()

}
function ataqueTijera(){
    ataqueJugador = 'Tijera'
    ataqueAleatorioEnemigo()
}
function ataqueAleatorioEnemigo(){
    let ataqueAletorio = aleatorio(1,3)

    if(ataqueAletorio ==1){
        ataqueEnemigo = 'Piedra'
    }else if(ataqueAletorio ==2){
        ataqueEnemigo = 'Papel'
    }else{
        ataqueEnemigo = 'Tijera'
    }
    combate()
}
function combate(){
    //Vidas jugador y enemigo
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')

    //Logica
    if(ataqueEnemigo==ataqueJugador){
        crearMensajes("EMPATE")
    }else if(ataqueJugador=='Piedra'&&ataqueEnemigo=='Tijera'){
        crearMensajes("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else if(ataqueJugador=='Papel'&&ataqueEnemigo=='Piedra'){
        crearMensajes("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else if(ataqueJugador=='Tijera'&&ataqueEnemigo=='Papel'){
        crearMensajes("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else{
        crearMensajes("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador        
    }
    revisarVidas()
}

function revisarVidas(){
    if(vidasEnemigo == 0){
        mensajesFinal("Felicidades Ganaste 😊")
    }else if(vidasJugador == 0){
        mensajesFinal("Lo siento perdiste 😔")
    }

}

function crearMensajes(resultado){
    //Se crea el mensaje en cada ataque
    //Se crea en enlace de html a js
    let sectionResultado = document.getElementById('resultado')
    let sectionAtaquesJugador = document.getElementById('ataques-jugador')
    let sectionAtaquesEnemigo = document.getElementById('ataques-enemigo')

    //Variables para decirles el formato
    //let notificacion = document.createElement('p')
    let nuevoAtaqueJugador = document.createElement('p')
    let nuevoAtaqueEnemigo = document.createElement('p')

    //A esas variables le damos el valor dado
    sectionResultado.innerHTML = resultado
    nuevoAtaqueJugador.innerHTML = ataqueJugador
    nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo

    //Guardamos para que se impriman
    //sectionResultado.appendChild(notificacion)
    sectionAtaquesJugador.appendChild(nuevoAtaqueJugador)
    sectionAtaquesEnemigo.appendChild(nuevoAtaqueEnemigo)

}
function mensajesFinal(resultadoFinal){

    let sectionMensajes = document.getElementById('resultado')

    //Se crea un nuevo parrafo
    sectionMensajes.innerHTML = resultadoFinal

    //Deshabilita los botones
    let botonPiedra = document.getElementById('boton_piedra')
    botonPieda.disabled =true
    let botonPapel = document.getElementById('boton_papel')
    botonPepel.disabled = true
    let botonTijera = document.getElementById('boton_tijera')
    botonTijera.disabled =true
    //Mostrar boton reiniciar
    let sectionReiniciar = document.getElementById('section-reiniciar')
    sectionReiniciar.style.display = 'block'

}

function reiniciarJuego(){
    location.reload()
}


function aleatorio(min,max){
    return Math.floor(Math.random()*(max - min + 1)+ min)
}

window.addEventListener('load',iniciarJuego)
