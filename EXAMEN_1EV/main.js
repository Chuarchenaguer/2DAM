document.addEventListener('DOMContentLoaded', () => {
    const cuerpo = document.querySelector('.text-container');
    //texto = cuerpo.innerHTML;
    //console.log(texto);

    cuerpo.addEventListener('mouseover', function(){
        cuerpo.style.fontWeight = 'bold';
        cuerpo.style.backgroundColor = 'silver';
    })
    cuerpo.addEventListener('mouseout', function(){
        cuerpo.style.fontWeight = 'normal';
        cuerpo.style.backgroundColor = 'white';
    })
});