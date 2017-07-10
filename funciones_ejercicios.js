//Ingreso datos a las funciones a travez de la consola

//EJERCICIO 1
function numeroCapicua(numero){
    var arreglo = numero.toString().split("");
    var arrReverso = [];
    for (var i=arreglo.length-1; i>=0; i-- ){
        arrReverso.push(arreglo[i]);    
    }
    for (var i=0; i<arreglo.length; i++){
        if (arrReverso[i] == arreglo[i]){
            return("El número ingresado es Capicua");
        }
        else{
            return("El número ingresado no es Capicua");
        }
    }

}


//EJERCICIO 2
function potencia(num, potencia){
    var resultado=1;
    for(var i=0; i<potencia; i++){
        resultado *= num;
    }
    return resultado;
}

//EJERCICIO 3
function repiteCaracter(arreglo,caracter){

    //var arreglo = ["Murcielago", "Pato", "Caballo", "Zebra"];
    var numCaracter =0;
    for (var i=0; i<arreglo.length; i++){
        for (var j=0; j<arreglo[i].length; j++){
            if (caracter == arreglo[i].charAt(j)){
                 numCaracter ++;
            }
        }
        
    }
    return numCaracter;
}

//EJERCICIO 4
function contarPalabras(palabra){
    var arregloPalabras = palabra.split(" ");
    var numPalabras = arregloPalabras.length;
    return ("El texto ingresado tiene: " + numPalabras + " Palabras");
}

//EJERCICIO 5
function palabraLarga (arreglo){
    var mayor=0;
    for(var i =0; i< arreglo.length; i++){
        var longitud =arreglo[i].length;
        if(longitud > mayor){
            mayor = longitud;
        }

    }
    return mayor;
}

//EJERCICIO 6
function contarVocales(arreglo){
    var vocal=0;
    for(var i=0; i<arreglo.length; i++){
        for(var j=0; j<arreglo[i].length; j++){
            switch (arreglo[i].toLowerCase().charAt(j)){
                case "a":
                case "e":
                case "i":
                case "o":
                case "u":
                    vocal ++;
                    //console.log(vocal);
                    break;
                default:
                    //console.log("No hay vocales");
                    break;
            }
        }
    }
    return ("El arreglo ingresado tiene: " +  vocal + " vocales");
}

//EJERCICIO 7
function sumaImpares(num1, num2){
    var suma=0;
    for(var i=num1; i<=num2; i++){
        if(i%2 != 0){
            suma +=i;
        }   
    }
    return ("La suma de los numeros impares es: "+ suma);

}

//EJERCICIO 8
function palabraMasLarga(arreglo){
    var mayor = 0;
    var arrLong = [];
    for(var i =0; i< arreglo.length; i++){
        var longitud =arreglo[i].length;
        if(longitud > mayor){
            mayor = longitud;
            arrLong = arreglo[i];
        }

    }
    return arrLong;

}

//EJERCICIO 9
function invertirPalabra(palabra){
  var palabraReverso = palabra.split("");
  return palabraReverso.reverse().join("");
}

//EJERCICIO 10
function dibujar(num){
    var dibujo = "";
    for (var i=num; i > 0; i--){
       dibujo += dibujarLineas("  "+i);
    }
     return (dibujo);
}

function dibujarLineas(num) {
  var s = "";
  for (var i = 0; i < num; i++){
      s += "_";
  }
  return s;
}
