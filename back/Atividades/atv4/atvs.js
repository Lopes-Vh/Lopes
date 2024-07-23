import rl, { questionInt } from 'readline-sync';

/* Soma multiplicador}*/
let multiplicador = rl.questionFloat("Informe um Numero: ")
let conta = 1;
while(conta<=10){
    let resultado = multiplicador*conta
    console.log (`${multiplicador}x ${conta} = ${resultado}`)
    conta++


/* Soma notas*/




const numAlunos = 4; 

let somaTotal = 0;

for (let i = 1; i <= numAlunos; i++) {
    console.log(`Aluno ${i}:`);
    let nota1 = rl.questionFloat("Digite a nota do 1° bimestre: ");
    let nota2 = rl.questionFloat("Digite a nota do 2° bimestre: ");
    let nota3 = rl.questionFloat("Digite a nota do 3° bimestre: ");
    let nota4 = rl.questionFloat("Digite a nota do 4° bimestre: ");

    let mediaAluno = (nota1 + nota2 + nota3 + nota4) / 4;
    console.log(`A média do Aluno ${i} é ${mediaAluno.toFixed(2)}\n`);


    somaTotal += mediaAluno;
}


let mediaTurma = somaTotal / numAlunos;
console.log(`A média da turma é ${mediaTurma}`);

/*numero random*/


const numerorandom= Math.floor(Math.random() *100) +1;

let tentativa

do {
    tentativa = rl.question("Tente Adivinhar o Numero: ")

    if (tentativa === numerorandom){
        console.log("Parabens Meu Mano, Acertastes")
        break;
    } else if (tentativa  < numerorandom){
        console.log("Aumente a aposta")
    }else if (tentativa  > numerorandom){
        console.log("diminua a aposta")
    }
    

} while (tentativa !== numerorandom);

/* fibonacchi*/

let anterior = 0;
let atual = 1;

console.log (anterior);
console.log (atual);

for (let i = 3; i<=20; i++) {
    let proximo = anterior + atual;
    console.log(proximo)
    anterior = atual
    atual = proximo
}
/* IR */

for (let i = 1; i<2; i++){
    let nome = rl.question(`Informe o nome da ${i} pessoa: `);
    let salario = rl.questionFloat(`Informe o salario de ${nome}: `);
    let ir =0;
    if (salario <= 2100){
        ir =0;
    }else if (salario <= 2800){
        ir = salario*0.075;
    }else if (salario <= 3750) {
        ir = salario * 0.15;
    } else if (salario <= 4660) {
        ir = salario * 0.225;
    } else {
        ir = salario * 0.275;
   }

   console.log(`\nImposto de Renda a ser pago`);
   console.log(`Nome: ${nome} \nImposto de Renda: R$ ${ir.toFixed(2)}\n`);
}


/*Chaves e Vlrs */

const pessoa = {
    nome: "Lopes",
    idade: 30,
    cidade: "Sampa"
};

for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
}

//cores
const cores = ["Azul", "Branco", "Amarelo", "Verde", "Vermelho"];

for (let cor of cores) {
    console.log(cor);
}



// caracteres
const string = "JavaScript";
for (let caractere of string){
    console.log(caractere);
}}
