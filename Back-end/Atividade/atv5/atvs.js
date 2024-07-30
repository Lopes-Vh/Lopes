//import Ent from "readline-sync";

//atv1
function toUpperCase(str) {
    return str.toUpperCase();
  }
  
  const str = "se quiser sim meu mano";
  const strUpperCase = toUpperCase(str);
  
  console.log(strUpperCase); 

// atv2

function verificarParImpar(numero) {
    if (numero % 2 === 0) {
      return "par";
    } else {
      return "ímpar";
    }
  }
  
  console.log(verificarParImpar(10)); 
  console.log(verificarParImpar(15)); 

  //atv3

function somar(num1, num2){
    return somar = num1+num2

}
    console.log(somar(1,2))


import rl from 'readline-sync';
let dia = rl.questionInt('Digite um dia da semana: ');

switch(dia){
    case 1:
        console.log('Domingo');
        break;
    
    case 2:
        console.log('Segunda-feira');
        break;

    case 3:
        console.log('Terca-feira');
        break;

    case 4:
        console.log('Quarta-feira');
        break;

    case 5:
        console.log('Quinta-feira');
        break;

    case 6:
        console.log('Sexta-feira')
        break;

    case 7:
        console.log('Sabado');
        break;
    
    default:
    console.log('Dia da semana inválido');
    break;

}