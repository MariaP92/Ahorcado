

var palabra = obtenerPalabraSecreta();
//var arrCadenaFormada=function(){
//Creo el array de la palabra para adivinar
var arr = [];
  
for (var i=0; i<palabra.length; i++){
    arr.push("*");
}

pedirCaracteres();

function pedirCaracteres(){
    var intentos =1;
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
            //alert("Sigue intentando");
            intentos++;
        }
       
        
    }
    alert("La palabra era: " + palabra.join(""));
    if(flag == false)
    {
        dibujoAhorcado();
    }
    //for(var i=0; i<)

}



function compararPalabra(carac){
     var arregloCaracterNuevo=arr;
   //  ahorcado=dibujoAhorcado();
    for (var i=0; i< palabra.length; i++){
        if(carac == palabra[i]){
            arregloCaracterNuevo[i] = carac;
            console.log(arregloCaracterNuevo);
            if(arregloCaracterNuevo[i] == palabra[i]){
                alert(":) Acertaste, continua " + arregloCaracterNuevo);
                
            } 
            
        }
           // console.log(ahorcado[i]);    
    }
    
    /*if(carac != palabra[i]){
        for (var i=0; i<palabra.length; i++){
             console.log(ahorcado[i]);
        }
    }*/
    
    
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
    //break;
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
    //array dle dibujo de ahorcado
    var hombre =  ["___\n",
                        "   |\n",
                        "   O\n",
                            "  /|\\\n",
                        "  / \\\n",
                        "___"];

    //var palabra = obtenerPalabraSecreta ();
    //console.log(palabra);
    imprimirMatriz(hombre);
  //return hombre;
 
}



