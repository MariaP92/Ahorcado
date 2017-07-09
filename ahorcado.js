
var temp =0;
var palabra = obtenerPalabraSecreta();
var intentos =0;
var arr = [];
var ahorcadoArr = [];
  
for (var i=0; i<palabra.length; i++){
    arr.push("*");
}

pedirCaracteres();

function pedirCaracteres(){
    
     var flag ;
     alert("La palabra tiene: " + arr.join(" ") + "caracteres");

    //Pedir solo 10 intentos
    while(intentos <= 10)  
    {
        var carac = prompt("Ingresa un Caracter");  
        flag=compararPalabra(carac.toLowerCase());
        if(flag==true){
            intentos = 11;
            ganador();
        }
        else{
            intentos++;
            
        }
 
    }
    alert("La palabra era: " + palabra.join(""));
  //  document.write("La palabra era: " + palabra.join(""));
}

function compararPalabra(carac){
 var arregloCaracterNuevo=arr;
 var divHTML = document.getElementById('resultado');

   if(palabra.indexOf(carac) != -1){   
       for (var i=0; i< palabra.length; i++){
            if(carac == palabra[i]){
                arregloCaracterNuevo[i] = carac;
                console.log(arregloCaracterNuevo);
               // document.write(arregloCaracterNuevo + "<br />");
                if(arregloCaracterNuevo[i] == palabra[i]){
                    alert(":) Acertaste, continua " + arregloCaracterNuevo);
                    
                } 
                
            } 
        }
    }
    else{
        alert("Incorrecto! Vuelve a intentarlo");
        var ahorcado=dibujoAhorcado();
  
        if (temp < ahorcado.length){
            ahorcadoArr.push(ahorcado[temp]);
            for(var i=0 ; i<ahorcadoArr.length; i++)
            {
                 console.log(ahorcadoArr[i]);
                // document.write(ahorcadoArr[i] + "<br />");
            }
            temp++;
        }
        else{
            perdedor();
        }
        
    }   
    
    if(arregloCaracterNuevo.join("") == palabra.join("")){
         return true;
    }
    else
    {
         return false;
    }
}

function ganador(){
    alert("YOU WON :) !!!! FELICIDADES");
    console.log("YOU WON :) !!!! FELICIDADES");
}

function perdedor(){
    alert("YOU LOSE :( !!!! LO SIENTO");
    console.log("YOU LOSE :( !!!! LO SIENTO")
    intentos = 11;
}

function imprimirMatriz (M) {
  var n = M.length;
  for (var i = 0; i < n; i++) {
        console.log(M[i]) ; 
  }  
} 

//random de palabras para el juego
function obtenerPalabraSecreta() {
  
  var libreriaPalabras = ["m u l t i m e d i a", "i n t e r n a u t a", "s e r v i d o r", "p r o t o c o l o", "c o r t a f u e g o s",
  "n a v e g a d o r", "n o d o", "m a r c o", "p a g i n a", "t e l a r a ñ a","d e s c a r g a r", "v i r t u a l", "m e m o r i a", "d i s c o", "l o c a l",
  "c o n e c t a r", "d e s c o n e c t a r", "e n c a m i n a d o r", "i n t e r n e t", "d o m i n i o",
  "d i n a m i c o", "h i p e r v i n c u l o", "e n l a c e", "m a r c a d o r", "o r d e n a d o r", "l a p i z", "o f i m a t i c a", "i n f o r m e" ];

   var indice = Math.round ( Math.random() * 27 )
   var cadena = new String( libreriaPalabras[indice] )
   var palabra = cadena.split(" ")
  return palabra;

}

function dibujoAhorcado(){
    var hombre =  ["___\n",
                        "   |\n",
                        "   O\n",
                            "  /|\\\n",
                        "  / \\\n",
                        "___"];
  return hombre;
}



