let botonEncriptar = document.querySelector('.btn-encriptar');
let botonDesencriptar = document.querySelector('.btn-desencriptar');

function encriptar() {
    let texto = document.querySelector('.texto').value;
    let offset = document.querySelector('.offset').value;
    let resultado = cipher.encode(offset, texto);
    document.querySelector('.resultado').value = resultado;
}