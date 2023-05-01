let palabra = "";
const letras = ["a","e","i","o","u"];
const numKey = ["0","1","2","3","4"]
const encript = ["ai","enter","imes","ober","ufat"]
const botonEncript = document.getElementById("encriptar");
const botonDesencript = document.getElementById("desencriptar");


function encriptar(){
    let entrada = document.getElementById("Texto").value;
        if(/^[a-zA-ZñÑ ]+$/.test(entrada)){
            entrada = entrada.toLowerCase()
            palabra = entrada;
            for (letra in letras){
            if (entrada.includes(letras[letra])){
            
            let encriptao = entrada.replaceAll(letras[letra],numKey[letra]); 
            entrada = encriptao 
            
        }
    }
    let encriptao = entrada.replaceAll("0","ai").replaceAll("1","enter").replaceAll("2","imes").replaceAll("3","ober").replaceAll("4","ufat")
    let mostrar = document.getElementById("mensaje");
    mostrar.innerHTML = `${encriptao}`;
        }
        else{
            alert("escriba")
        }
}

function desencriptar(){
    let entrada = document.getElementById("Texto").value;
    if(/^[a-zA-ZñÑ ]+$/.test(entrada)){
        entrada = entrada.toLowerCase()
        palabra = entrada;
        for (letra in letras){
        if (entrada.includes(letras[letra])){
            
            let desencriptao = entrada.replaceAll(encript[letra],numKey[letra]); 
            entrada = desencriptao 

        }
    }
    let desencriptao = entrada.replaceAll("0","a").replaceAll("1","e").replaceAll("2","i").replaceAll("3","o").replaceAll("4","u")
    let mostrar = document.getElementById("mensaje");
    mostrar.innerHTML = `${desencriptao}`;
    }
    else {
        alert("escriba")
    }
}


botonEncript.addEventListener("click",encriptar);
botonDesencript.addEventListener("click",desencriptar);








