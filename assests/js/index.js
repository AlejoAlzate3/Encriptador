const btnEncriptar = document.querySelector('.btn-encriptar');
const btnDesencriptar = document.querySelector('.btn-desencriptar');
const btnCopiar = document.querySelector('.btn-copiar');
const btnLimpiar = document.querySelector('.btn-eliminar');
const mensaje = document.querySelector('.text-area');


let si = "";
let no = "none";

function resultado(ver){
    document.getElementById("container-result").style.display = ver;
    document.getElementById("btn-copiar").style.display = ver;
    document.getElementById("resultado").style.display = ver;
}

mostrarVacio();

resultado(no);

function encriptar(){
    mostrarNone();
    let msjEncriptado = "";
    let mensaje = document.querySelector('.text-area').value;
    let mayus = /[A-Z]/g;
    let caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;

    if(mensaje == ""){
        alert("no debe estar vacio");
        mostrarVacio();
        resultado(no)
    }else if (mensaje.match(mayus) != mensaje.match(mayus)){
        alert("No puede contener mayusculas");
        mostrarVacio();
    }else if (mensaje.match(caracteres) != mensaje.match(caracteres)){
        alert("no puede contener acentos ni caracteres especiales");
        mostrarVacio();
    }else{
        for(let i = 0; i < mensaje.length; i++){
        if(mensaje[i] == "a"){
        let encriptando = mensaje[i].replace("a","ai",);
        msjEncriptado = msjEncriptado + encriptando;
        }else if(mensaje[i] == "e"){
        let encriptando = mensaje[i].replace("e","enter");
        msjEncriptado = msjEncriptado + encriptando;
        }else if(mensaje[i] == "i"){
        let encriptando = mensaje[i].replace("i","imes");
        msjEncriptado = msjEncriptado + encriptando;
        }else if(mensaje[i] == "o"){
        let encriptando = mensaje[i].replace("o","ober");
        msjEncriptado = msjEncriptado + encriptando;
        }else if(mensaje[i] == "u"){
        let encriptando = mensaje[i].replace("u","ufat");
        msjEncriptado = msjEncriptado + encriptando;
    }else{
        msjEncriptado += mensaje[i];
        }
    }
        document.getElementById("result-h2");
        document.getElementById("resultado").innerHTML=msjEncriptado;
        document.getElementById("text-area").value = "";
        resultado(si)
    }
}

function desencriptar(){
    mostrarNone();
    let msjDesencriptado = "";
    let mensaje = document.querySelector('.text-area').value;
    let mayus = /[A-Z]/g;
    let caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;

    if(mensaje == ""){
        alert("Necesita ingresar texto");
        resultado(no)
        mostrarVacio();
    }else if (mensaje.match(mayus)!= mensaje.match(mayus)){
        alert("No se admiten mayusculas")
        resultado(no)
        mostrarVacio();
    }else if (mensaje.match(caracteres) != mensaje.match(caracteres)){
        alert("No se aceptan acentos y/o caracteres especiales")
        resultado(no);
        mostrarVacio();
    }else{
    msjDesencriptado = mensaje.replace(/ai/g, "a").replace(/enter/g,"e").replace(/imes/g,"i").replace(/ober/g,"o").replace(/ufat/g,"u"); 
    document.getElementById("resultado").innerHTML=msjDesencriptado;
    document.getElementById("result-h2");

    resultado(si)
    document.getElementById("text-area").value = ""
    }
}

function copiar() {
    let copiado = document.getElementById("resultado");
    copiado.select();
    document.execCommand('copy');
}

function mostrarNone(){
    document.getElementById("container-muneco").style.display = "none";
    document.getElementById("container-h3").style.display = "none";
    document.getElementById("container-parrafo").style.display = "none";
}

function mostrarVacio(){
    document.getElementById("container-muneco").style.display = "";
    document.getElementById("container-h3").style.display = "";
    document.getElementById("container-parrafo").style.display = "";
}

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiar;