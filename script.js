
const letras = ["a","e","i","o","u"];
const numKey = ["0","1","2","3","4"];
const encript = ["ai","enter","imes","ober","ufat"]
const botonEncript = document.getElementById("encriptar");
const botonDesencript = document.getElementById("desencriptar");
const aviso = document.getElementById("aviso");
const copiado = document.getElementById("confirmacionCopiado");
const fondo = document.getElementById("body");
const botonC = document.getElementById("cambio");
const menuBoton = document.getElementById("menu");
const menu = document.getElementById("vertical");

function mostrar(){
    document.getElementById("mensaje").style.display = "block";
    document.getElementById("copiar").style.display = "block";
    
    document.getElementById("fachada").style.display = "none";
};

function mostrarnt(){
    document.getElementById("mensaje").style.display = "none";
    document.getElementById("copiar").style.display = "none";
    document.getElementById("confirmacionCopiado").style.display = "none";
    document.getElementById("fachada").style.display = "flex";
};

function removeenc() {
    botonEncript.classList.remove("error");
};

function removedes() {
    botonDesencript.classList.remove("error");
};

function removerr() {
    aviso.classList.remove("error");
}

function removeVisible(){
    botonC.classList.remove("vuelta");
}

function removeCopiado(){
    copiado.classList.remove("copiado");
}

function encriptar(){
    mostrar();
    let entrada = document.getElementById("Texto").value;
        if(/^[a-zA-ZñÑ ]+$/.test(entrada)){
            entrada = entrada.toLowerCase();
            
            for (letra in letras){ 
            if (entrada.includes(letras[letra])){
            
            let encriptao = entrada.replaceAll(letras[letra],numKey[letra]); 
            entrada = encriptao 
            
        }
    }
        let encriptao = entrada.replaceAll("0","ai").replaceAll("1","enter").replaceAll("2","imes").replaceAll("3","ober").replaceAll("4","ufat");
        let mostrar = document.getElementById("mensaje");
        mostrar.innerHTML = `${encriptao}`;
        aviso.classList.remove("error");
        copiado.style.display = "none";
        }
        else{
            botonEncript.classList.add("error");
            aviso.classList.add("error");
            mostrarnt();
            botonEncript.addEventListener("animationend", removeenc);
            aviso.addEventListener("animationend",removerr);
        }
};

function desencriptar(){
    mostrar();
    let entrada = document.getElementById("Texto").value;
    if(/^[a-zA-ZñÑ ]+$/.test(entrada)){
        entrada = entrada.toLowerCase();
        
        for (letra in letras){
        if (entrada.includes(letras[letra])){
            
            let desencriptao = entrada.replaceAll(encript[letra],numKey[letra]); 
            entrada = desencriptao;

        }
    }
    let desencriptao = entrada.replaceAll("0","a").replaceAll("1","e").replaceAll("2","i").replaceAll("3","o").replaceAll("4","u")
    let mostrar = document.getElementById("mensaje");
    mostrar.innerHTML = `${desencriptao}`;
    aviso.classList.remove("error");
    copiado.style.display = "none";
    }
    else {
        botonDesencript.classList.add("error");
        aviso.classList.add("error");
        mostrarnt();
        botonDesencript.addEventListener("animationend", removedes);
        aviso.addEventListener("animationend",removerr);
    }
}

function copy() {
    let copyText = document.querySelector("#mensaje");
    copyText.select();
    document.execCommand("copy");
    copiado.style.display = "block";
    copiado.classList.add("copiado");
    copiado.addEventListener("animationend",removeCopiado);
}
  
  document.querySelector("#copiar").addEventListener("click", copy);

let fondito = false;
let fondito2 = false;

function cambioFondo(){
    botonC.classList.add("vuelta");
    if (fondito == false && fondito2 == false){
        fondo.classList.replace("cero","uno");
        fondito = true
    }
    else if (fondito == true && fondito2 == false) {
        fondo.classList.replace("uno","dos");
        fondito2 = true
    }
    else if(fondito == true && fondito2 == true) {
        fondo.classList.replace("dos","tres");
        fondito = false
    }
    else if (fondito == false && fondito2 == true){
        fondo.classList.replace("tres","cero");
        fondito2 = false
    }
    botonC.addEventListener("animationend", removeVisible);
}

var desplegado = false;

function menubar(){
    if (desplegado == false){
        menu.classList.add("visible");
        menuBoton.classList.add("visible");
        desplegado = true;
    }
    else {
        menu.classList.remove("visible");
        menuBoton.classList.remove("visible");
        desplegado = false;
    }
}

var miTextarea = document.getElementById("Texto");
		miTextarea.addEventListener("focus", function(){
			this.placeholder = "";
		});
		miTextarea.addEventListener("blur", function(){
			this.placeholder = "Ingrese su texto aqui ;)";
		});

botonEncript.addEventListener("click",encriptar);
botonDesencript.addEventListener("click",desencriptar);
botonC.addEventListener("click",cambioFondo);
menuBoton.addEventListener("click",menubar);










