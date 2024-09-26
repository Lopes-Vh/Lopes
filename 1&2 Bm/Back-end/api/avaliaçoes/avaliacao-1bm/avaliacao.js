// João Vitor Lopes e Júlia Pereira da Mata 
import rl, { question, questionFloat, questionInt } from 'readline-sync';

while (true){

    let menu = questionInt("\n1. descobrir a área do retangulo \n2. descobrir a área do triângulo \n3. descobrir a area do circulo \n4. sair a aplicação \nDigite a opção desejada: ")
    
    switch(menu){
        case 1:
            let b= questionFloat("Digite a base do retângulo: ");
            let h= questionFloat("Digite a altura do retângulo: ");
            console.log(`\nA área do rentâgulo é: ${(b*h).toFixed(2)}`);
            let per =('deseja continuar usando a aplicação? (S/N) ')
            if (per="S"){
                continue;
            } else{
                break;
            }
        case 2:
            let b2= questionFloat("Digite a base do triâgulo: ");
            let h2= questionFloat("Digite a altura do triângulo: ");
            console.log(`A área do triângulo é: ${((b2*h2)/2).toFixed(2)}`);
            let perg = ('deseja continuar usando a aplicação? (S/N) ')
            if (perg="S"){
                continue;
            } else{
                break;
            }
        case 3:
            let raio= questionFloat("Digite o raio do círculo: ");
            console.log(`A área do círculo é: ${(3.1415*(raio**2)).toFixed(2)}`);    
            let pergu =('deseja continuar usando a aplicação? (S/N) ')
            if (pergu="S"){
                continue;
            } else{
                break;
            }       
        case 4:
            break
    }

    }


