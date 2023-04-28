let palabra = "";
const letras = ["a","e","i","o","u"];
const numKey = ["0","1","2","3","4"]
const encript = ["ai","enter","imes","ober","ufat"]
const botonEncript = document.getElementById("encriptar");
const botonDesencript = document.getElementById("desencriptar");


function encriptar(){
    let entrada = document.getElementById("Texto").value;
    palabra = entrada;
    for (letra in letras){
        if (entrada.includes(letras[letra])){
            
            let encriptao = entrada.replace(letras[letra],numKey[letra]); 
            entrada = encriptao 
            
        }
    }
    let encriptao = entrada.replace("0","ai").replace("1","enter").replace("2","imes").replace("3","ober").replace("4","ufat")
    let mostrar = document.getElementById("mensaje");
    mostrar.innerHTML = `la palabra ${palabra} fue encriptada a ${encriptao}<br><br>`;
}

function desencriptar(){
    let entrada = document.getElementById("Texto").value;
    palabra = entrada;
    for (letra in letras){
        if (entrada.includes(letras[letra])){
            
            let desencriptao = entrada.replace(encript[letra],numKey[letra]); 
            entrada = desencriptao 

        }
    }
    let desencriptao = entrada.replace("0","a").replace("1","e").replace("2","i").replace("3","o").replace("4","u")
    let mostrar = document.getElementById("mensaje");
    mostrar.innerHTML = `la palabra ${palabra} fue encriptada a ${desencriptao}<br><br>`;
}


botonEncript.addEventListener("click",encriptar);
botonDesencript.addEventListener("click",desencriptar);








