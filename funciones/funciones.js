function funcion(x,y){
    const valorConDescuento=(x * y)/100;
    const valorTotal = x - valorConDescuento
    return valorTotal
}

const valorPrenda = 1000
const valorDescuento = 15

const valorFinal = funcion(valorPrenda,valorDescuento)
console.log("El precio es: " + valorFinal)