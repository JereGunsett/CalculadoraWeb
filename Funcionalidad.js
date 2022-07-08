const displayValorAnterior = document.getElementById('v_anterior');
const displayValorActual = document.getElementById('v_actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('operador');

const display = new Display(displayValorActual, displayValorAnterior);

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => {
        display.agregarNumero(boton.innerHTML)
    })
})