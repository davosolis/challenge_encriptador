var textToEncript = document.querySelector("#textToEncript");
var botonEncriptar = document.querySelector("#botonEncriptar");
var botonDesencriptar = document.querySelector("#botonDesencriptar");
var rectanguloConTexto = document.querySelector("#rectangulo-con-texto");
var rectanguloSinTexto = document.querySelector("#rectangulo-sin-texto");
var textToDisplay = document.querySelector("#textToDisplay");
var titulo = rectanguloConTexto.querySelector("h2");
var btnCopy = document.querySelector("#btnCopy");

var regEx = [/e/gi, /i/gi, /a/gi, /o/gi, /u/gi];
var regEx2 =[/enter/gi, /imes/gi, /ai/gi, /ober/gi, /ufat/gi];
var llavesEncriptacion = ["enter", "imes", "ai", "ober", "ufat"]; 
var llavesDesencriptacion = ["e", "i", "a", "o", "u"];

function encriptarDesencriptar(toMatch, texto, keyEncript){
    var string = texto;
    for (let i = 0; i < toMatch.length; i++) {
        const regEx = toMatch[i];
        string = string.replace(regEx, keyEncript[i]);    
    }
    console.log(string);
    return string;
    /*
    string = string.replace(/aimes/gi, "ai"); //<-------filtro
    console.log(string);
    */

    
    
}//<------------fin de encriptar();

function validarCadena(cadena) {
    var noPermitido = /[^a-z ]/g;
   return !noPermitido.test(cadena);    
}


botonEncriptar.addEventListener("click",function(event){   //<------------función Anónima
    event.preventDefault();
    
    
    if (textToEncript.value == "") {
        rectanguloSinTexto.style.display = "flex";
        rectanguloConTexto.style.display = "none";
    }else{
        if (validarCadena(textToEncript.value)) {
            rectanguloSinTexto.style.display = "none";
            rectanguloConTexto.style.display = "flex";
            titulo.textContent = "Texto Encriptado:";
            textToDisplay.value ="";
            textToDisplay.value = encriptarDesencriptar(regEx, textToEncript.value, llavesEncriptacion);
            console.log(textToDisplay);
            console.log(textToDisplay.value);
        } else {
            alert("El texto que introdujo no contiene solo minúsculas sin acentos");
            rectanguloSinTexto.style.display = "flex";
            rectanguloConTexto.style.display = "none";
        }
                
    }
    
    
});

botonDesencriptar.addEventListener("click",function(event){
    event.preventDefault();
    textToDisplay.value ="";
  
    if (textToEncript.value == "") {
        rectanguloSinTexto.style.display = "flex";
        rectanguloConTexto.style.display = "none";
    
    }else{
        rectanguloSinTexto.style.display = "none";
        rectanguloConTexto.style.display = "flex";
        titulo.textContent = "Texto Desencriptado:";
        textToDisplay.value = encriptarDesencriptar(regEx2, textToEncript.value, llavesDesencriptacion);
    
    }
        
    
});

btnCopy.addEventListener("click", function(event){
    event.preventDefault();   

    var selectedText = document.getSelection();
   
    if (selectedText != "") {
        document.execCommand('copy');
        console.log("se copió:" + selectedText);
    } else {
        textToDisplay.focus();
        textToDisplay.select();
        document.execCommand('copy');  
        textToDisplay.blur();
        console.log("se copió todo!!!");
    }
           

});

//botonEncriptar.onclick = imprimir(textToEncript);

    /*var regex1 = /a/gi;
    var regex2 = /e/gi;
    var regex3 = /i/gi;
    var regex4 = /o/gi;
    var regex5 = /u/gi;*/

