 //5 Suma de elementos de un arreglo
 function sumar(arreglonumeros){
    return arreglonumeros.reduce((suma, valor)=> suma+valor, 0);
 }
 let numerosSuma = [1,2,3,4,5,6,7,8];
 console.log("La suma de los numeros es: ", sumar(numerosSuma));