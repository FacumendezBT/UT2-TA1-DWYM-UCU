
const btn = document.getElementById('btn');
const texto = document.getElementById('texto');
const repeticiones = document.getElementById('repeticiones');

btn.addEventListener('click', function(){
    let textoValue = texto.value;
    let repeticionesValue = repeticiones.value;
    repeatString(textoValue, repeticionesValue);
});

/**
 * Función que imprime un texto en consola n veces
 * @param {string} texto - Texto a imprimir
 * @param {number} repeticiones - Número de veces que se imprimirá el texto
 */
function repeatString(texto, repeticiones){
    for (let i = 0; i < repeticiones; i++){
        console.log(texto);
    }
}