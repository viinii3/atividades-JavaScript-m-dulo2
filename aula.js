
// funçao que escreva meu nome:

const nome = 'vini';

function escrevaMeuNome (nome) {
    console.log('meu nome é ' + nome)
}
escrevaMeuNome(nome);


//Função que ve se eu sou menos de idade:

const idade = 17;

function minhaIdade (idade) {
    if (idade >= 18) {
        return 'maior de idade';
    } else {
        return 'menor de idade';
    }
}
console.log(minhaIdade(idade))


// replicar o exercício do juros:

const produto = 100;
const formaDePagamento = 2; // 1 Debito, 2 PIX ou dinheiro, 3 em duas vezes, 4 acima de duas vezes

function calcularJuros() {
    if (formaDePagamento === 1) {
        return produto - (produto * 0.1);
    } else if (formaDePagamento === 2) {
        return produto - (produto * 0.15);
    } else if (formaDePagamento === 3) {
        return produto / 2;
    } else {
        return produto / 3 + (produto * 0.1);
    }
}

console.log(calcularJuros())