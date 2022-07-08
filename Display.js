class Display {
    constructor(displayValorAnterior, displayValorActual){
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculadora = new Calculadora();
        this.ValorActual = '';
        this.ValorAnterior = '';
    }
    agregarNumero(numero){
        this.ValorActual = numero;
        this.imprimirValores();
    }
    imprimirValores() {
        this.displayValorActual.textContent = this.ValorActual;
        this.displayValorAnterior.textContent = this.ValorAnterior;
    }

}