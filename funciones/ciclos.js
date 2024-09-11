//switch
let expr = "lulo"
switch(expr){
    case "naranjas":
        console.log("Orange")
        break;
    case "manzanas":
        console.log("Apple")
    case "lulo":
        console.log("Sebas")
}

//while
let counter = 0;
while(counter<10){
    console.log(counter)
    contador++;
}

//do-while
let counter1 = 0;
do{
    console.log(counter)
    contador++;
}while(counter1<10)
//for
let frutas=['Naranja','Manzana','Melocoton']
for(let i = 0; i<frutas.length;i++){
    console.log(frutas[i])
}
// for-in
const lista = {
    yuca: 5,
    arracacha: 23,
    papa: 34,
    arroza: 43
}
for (let lista1 in lista){
    console.log(`${lista1}:${listaDeCompras[lista1]}`)

}
//for-of
for (let lista1 of frutas){
    console.log(lista1)

}