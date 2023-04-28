let entrada = document.querySelector("input")
let palabra = prompt("Escriba la palabra que desea encriptar o desencriptar");
let palabraa = palabra;
const letras = ["a","e","i","o","u"];
const numKey = ["0","1","2","3","4"]
const encript = ["ai","enter","imes","ober","ufat"]


function encriptar(){
    for (letra in letras){
        if (palabra.includes(letras[letra])){
            
            let encriptao = palabra.replace(letras[letra],numKey[letra]); 
            palabra = encriptao 
            
        }
    }
    let encriptao = palabra.replace("0","ai").replace("1","enter").replace("2","imes").replace("3","ober").replace("4","ufat")
    let mostrar = document.getElementById("mensaje");
    mostrar.innerHTML = `la palabra ${palabraa} fue encriptada a ${encriptao}<br><br>`;
}

function desencriptar(){
    for (letra in letras){
        if (palabra.includes(letras[letra])){
            
            let desencriptao = palabra.replace(encript[letra],numKey[letra]); 
            palabra = desencriptao 

        }
    }
    let desencriptao = palabra.replace("0","a").replace("1","e").replace("2","i").replace("3","o").replace("4","u")
    let mostrar = document.getElementById("mensaje");
    mostrar.innerHTML = `la palabra ${palabraa} fue encriptada a ${desencriptao}<br><br>`;
}











