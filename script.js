
let btn = document.getElementById('btn');
let texto = document.getElementById('texto');
let repeticiones = document.getElementById('repeticiones');

btn.addEventListener('click', function(){
    repeatString(texto.value, repeticiones.value);
});

function repeatString(texto, repeticiones){
    for (let i = 0; i < repeticiones; i++){
        console.log(texto);
    }
}