
/* 
const peso = 90;
const altura = 1.70;
const imc = peso / Math.pow(altura, 2);
console.log(imc.toFixed(1))

if (imc < 18.5) {
    console.log('Abaixo do peso')
} else if (imc >= 18.5 && imc <= 25) {
    console.log('Peso normal')
} else if (imc >= 25 && imc <= 30) {
    console.log('Acima do peso')
} else if (imc >= 30 && imc <= 40) {
    console.log('Obeso')
} else if (imc > 40) {
    console.log('Obesidade grave')
}
*/

function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso'
    } else if (imc >= 18.5 && imc <= 25) {
        return 'Peso normal'
    } else if (imc >= 25 && imc <= 30) {
        return 'Acima do peso'
    } else if (imc >= 30 && imc <= 40) {
        return 'Obeso'
    } else if (imc > 40) {
        return 'Obesidade grave'
    }
}

/*
function main() {
    const peso = 90;
    const altura = 1.70;
    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc))
}

main()
*/

//outra forma de fazer a função Main:

(function main() {
    const peso = 90;
    const altura = 1.70;
    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc))
})();
