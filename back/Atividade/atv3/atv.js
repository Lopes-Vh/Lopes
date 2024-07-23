import Ent from "readline-sync";

let dia = Ent.questionFloat("Digite um dia de 1 a 7")
switch (dia) {

    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda");
        break;
    case 3:
        console.log("Terca");
        break;
    case 4:
        console.log("Quarta");
        break;
    case 5:
        console.log("Quinta");
        break;
    case 6:
        console.log("Sexta");
        break;
    case 7:
        console.log("Sabado");
        break;
    default:
        console.log("dia Inexistente");
        break;
}

/* Atividade 2 */
let mes = Ent.questionFloat("Digite mes de 1 a 12: ")
switch (mes) {

    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Marco");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("maio");
        break;
    case 6:
        console.log("Junho");
        break;
    case 7:
        console.log("Julho");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Setembro");
        break;
    case 10:
        console.log("Outubro");
        break;
    case 11:
        console.log("Novembro");
        break;
    case 12:
        console.log("Dezembro");
        break;
    default:
        console.log("Mes Inexistente");
        break;

}

/* Atividade 3 */




const x = Ent.questionFloat("Digite o primeiro numero: ");
const y = Ent.questionFloat("Digite o segundo numero: ");

console.log("Escolha a operacao:");
console.log("1. Adicao");
console.log("2. Subtracao");
console.log("3. Multiplicacao");
console.log("4. Divisao");

const opcao = Ent.questionInt("Digite o numero da operacao desejada: ");

switch (opcao) {
    case 1:
        console.log(`Resultado da adicao: ${x + y}`);
        break;
    case 2:
        console.log(`Resultado da subtracao: ${x - y}`);
        break;
    case 3:
        console.log(`Resultado da multiplicacao: ${x * y}`);
        break;
    case 4:
        if (y !== 0) {
            console.log(`Resultado da divisao: ${x / y}`);
        } else {
            console.log("Nao é possível dividir por zero.");
        }
        break;
    default:
        console.log("Opcao invalida. Escolha um numero de 1 a 4.");
}


/* Atividade 4 */

let bonifc = Ent.question("Digite a categoria: ")
let salario = Ent.question("Digite o Salario")
switch (bonifc) {
    case "a":
        console.log(`Seu Novo salario é ${((5 / 100) * salario) + salario}`);
        break;
    case "b":
        console.log(`Seu Novo salario é ${((10 / 100) * salario) + salario}`);
        break;
    case "c":
        console.log(`Seu Novo salario é ${((15 / 100) * salario) + salario}`);
        break;
    case "d":
        console.log(`Seu Novo salario é ${((20 / 100) * salario) + salario}`);
        break;

    default:
        console.log("Categoria Invalida!!");
        break;
}