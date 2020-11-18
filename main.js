document.addEventListener('DOMContentLoaded', () => {
    const step1Container = document.getElementById('step-1');
    const step2Container = document.getElementById('step-2');
    const step3Container = document.getElementById('step-3');
    const step4Container = document.getElementById('step-4');
    
    
    step1Container.style.display = '';
    step2Container.style.display = 'none';
    step3Container.style.display = 'none';
    step4Container.style.display = 'none';
    

    var h1 = document.createElement("h1");
    var parrafo = document.createElement("p");
    var textoH1 = document.createTextNode ('Explicación Formulario');
    var textoParrafo = document.createTextNode ('Esta aplicación consiste en rellenar un formulario. Simplemente, si pulsas en continuar, te va a aparecer el formulario para rellenar. Una vez rellenado, pulsa continuar para seguir, si esta todo correcto te aparece otra pantalla de confirmación de datos, si los confirmas aparecerá una nueva pantalla con un boton para terminar, en caso contrario puedes volver atrás para cambiar cualquier cosa.');
    h1.appendChild(textoH1);
    parrafo.appendChild(textoParrafo);
    step1Container.appendChild(h1);
    step1Container.appendChild(parrafo);
    h1.style.textAlign = 'center';
    parrafo.style.textAlign = 'center';
    h1.style.font = '2em sans-serif';
    parrafo.style.font = '1em sans-serif';
    let button1 = document.getElementById("1");
    let button0 = document.getElementById("0");
    function Continuar(){
        if (step1Container.style.display === '') {
            step1Container.style.display = 'none';
            step2Container.style.display = '';
        } else if (step2Container.style.display === '' ) {
            step2Container.style.display = 'none';
            step3Container.style.display = '';
        } else if (step3Container.style.display === '') {
            step3Container.style.display = 'none';
            step4Container.style.display = '';
        }
    }
    function Atras(){
        if (step4Container.style.display === '') {
            step3Container.style.display = '';
            step4Container.style.display = 'none';
        } else if (step2Container.style.display === '' ) {
            step2Container.style.display = 'none';
            step1Container.style.display = '';
        } else if (step3Container.style.display === '') {
            step3Container.style.display = 'none';
            step2Container.style.display = '';
        }
    }
    button1.onclick = Continuar;
    button0.onclick = Atras;
    //con document.querySelector podemos acceder a etiquetas o clases >> document.querySelector('div')  document.querySelector('step-container') o id: document.querySelector('#step-1')

    const formulario = document.getElementById('formulario');

    formulario.addEventListener('submit', copiarDatos);

    function copiarDatos(event) {
    event.preventDefault();
    const nombre = document.querySelector('input[name=nombre]').value;
    const nacido = document.querySelector('input[name=nacido]').value;
    const inputsSexo = Array.from(document.querySelectorAll('input[name=hm]'));
    const sexo = inputsSexo.find(input => input.checked).value;
    
    document.getElementById('nombre').innerHTML='Nombre: ' + nombre;
    document.getElementById('nacido').innerHTML=' Año de nacimiento' + nacido;
    document.getElementById('sexo').innerHTML= 'Sexo: '+ (sexo == 'h') ? 'Hombre' : 'Mujer';
    }
});