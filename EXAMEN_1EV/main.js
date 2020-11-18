document.addEventListener('DOMContentLoaded', () => {
    const texto = document.querySelector('text-container');
    let letra = document.querySelector('input-container');

    let index = texto.indexOf(letra);

    if(index >=0){
        console.log("hola");
    } else {
        console.log("no hola")
    }

});