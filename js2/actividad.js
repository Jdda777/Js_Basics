const mayor= (a,b,c) => {
    let resultado
    let arreglo = [a,b,c]
    var maxt = 0
    if (a ==b && b == c){
        resultado = "Los tres numeros son iguales"
    } else{
    for (let i = 0; i<arreglo.length;i++){
        if(arreglo[i] > maxt){
            maxt = arreglo[i]
            resultado = "El mayor es " + maxt
        }else if(arreglo[i] === maxt){
                resultado = "Se repite 2 veces el numero " + maxt
        }  
    }}
    return resultado
}

document.write(mayor(10,15,15))