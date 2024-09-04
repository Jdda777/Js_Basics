const noVari = function(nombre){
    return `Hola, ${nombre}`
}

const nombreNoVari = (nombre)=>{
    return `Hola, ${nombre}`
}

const reparto={
    nombre1: "Tio Ben",
    mensajeFuncion: function(mensaje){
        console.log(`${this.nombre1} dice: ${mensaje}`)
    },
    mensajeFlecha:(mensaje)=>{
        console.log(`${this.nombre1} dice: ${mensaje}`)
    }
}

reparto.mensajeFuncion("*C muere*")
reparto.mensajeFlecha("*C muere*")