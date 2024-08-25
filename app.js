let vocales = ['a', 'e', 'i', 'o', 'u'];
let vocalEncriptada = ['ai', 'enter', 'imes', 'ober', 'ufat'];


function asignarTexto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function autoResize(textarea) {
    textarea.style.height = 'auto'; // Restablecer la altura para recálculo
    textarea.style.height = textarea.scrollHeight + 'px'; // Establecer la altura al scrollHeight
}

// Función para encriptar el texto con el botón
function btnEncriptarTexto() {

    let inputText = document.getElementById('encriptarTexto').value;
    let validRegex = /^[a-zñ\s]+$/; // Creamos la expresion regular que se va a hacer evaluada

    if (!validRegex.test(inputText)){
        asignarTexto('.advertencia__texto', 'El texto solo puede contener letras minúsculas y sin acentos.')
        document.getElementById("advertencia__texto").style.color = "tomato";
        return;
    }

    let vocalMap = {
        'a' : 'ai',
        'e' : 'enter',
        'i' : 'imes',
        'o' : 'ober',
        'u' : 'ufat'
    }


    // Crear una expresión regular que coincida con todas las vocales
    let vocalRegex = /[aeiou]/g;
    
    // Usar la función replace con la expresión regular y el objeto de mapeo
    let outputText = inputText.replace(vocalRegex, match => vocalMap[match]);

    let textDesencriptar = document.getElementById('desencriptarTexto').value;
    textDesencriptar.value = outputText;

    document.getElementById('desencriptarTexto').value = outputText;
    document.getElementById('desencriptarTexto').style.display = '';
    document.getElementById('miImagen').style.display = 'none';
    document.getElementById('anuncioMensaje').style.display = 'none';
    document.getElementById('anuncioTexto').style.display = 'none';
    document.getElementById('encriptarTexto').value = "";
    asignarTexto('.advertencia__texto', '¡Texto encriptado con ÉXITO!')
    document.getElementById("advertencia__texto").style.color = "#B3E2A7";
    autoResize(textDesencriptar);
}


// Función para desencriptar el texto con el botón
function btnDesencriptarTexto() {
    let inputText = document.getElementById('encriptarTexto').value;
    let outputText = inputText;

    // Recorre array de las vocales encriptadas para reemplazarla
    for ( let i = 0; i < vocalEncriptada.length; i++ ) {
        outputText = outputText.split(vocalEncriptada[i]).join(vocales[i]);
    }

    document.getElementById('desencriptarTexto').value = outputText;
    document.getElementById('encriptarTexto').value = "";
    document.getElementById('miImagen').style.display = 'none';
    document.getElementById('anuncioMensaje').style.display = 'none';
    document.getElementById('anuncioTexto').style.display = 'none';
    asignarTexto('.advertencia__texto', '¡Texto desencriptado con ÉXITO!')
}

// Función para copiar el texto con el botón

function copiarTexto() {
    // Obtener el texto del textarea
    let textArea = document.getElementById('desencriptarTexto');
    let texto = textArea.value;
    
    // Seleccionar el contenido del textarea
    textArea.select();
    // Copiar el texto al portapapeles
    navigator.clipboard.writeText(texto)
   
}

function condicionesIniciales() {
    asignarTexto('#titulo', "¡Bienvenido al Encriptador de Texto!");
    asignarTexto(".anuncio__mensaje", "Ningún mensaje fue encontrado");
    asignarTexto(".anuncio__texto", "Ingresa el texto que desees encriptar o desencriptar.");
    asignarTexto('.advertencia__texto', '¡Solo letras minúsculas y sin acento!')
    document.getElementById('desencriptarTexto').style.display = 'none'
    document.getElementById('encriptarTexto').focus();
}
condicionesIniciales();