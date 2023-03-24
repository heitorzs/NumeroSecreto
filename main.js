const maiorValor = 100
const menorValor = 1
const numeroSorteado = geraNumero();

const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor

function geraNumero(){
    return parseInt(Math.random() * maiorValor + 1);
    
}

console.log('Numero secreto:', numeroSorteado);

