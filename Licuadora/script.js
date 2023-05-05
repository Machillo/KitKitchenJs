var estadoLicuadora = "apagada";
var sonudoLicuadora = document.getElementById("blender-sound");
var botonLicuadora = document.getElementById("blender-button-sound")
var licuadora = document.getElementById("blender");

function controlarLicuadora(){
    if (estadoLicuadora == "apagada"){
        estadoLicuadora = "encendida";
        hacerBrrBrr();
        licuadora.classList.add("active"); 
        /* console.log("me prendiste"); */
    } else {
        estadoLicuadora = "apagada"
        hacerBrrBrr();
        licuadora.classList.remove("active"); 
        /* console.log("me apagaste"); */
    }
}

function hacerBrrBrr() {
    if(sonudoLicuadora.paused ) {
        botonLicuadora.play();
        sonudoLicuadora.play();
    } else {
        botonLicuadora.play();
        sonudoLicuadora.pause();
        sonudoLicuadora.currentTime = 0; //Empieza de cero la reproduccion del audio
    }
}