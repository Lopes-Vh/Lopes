switch(menu){
    case 1:
        let b= questionFloat("Digite a base do retângulo: ");
        let h= questionFloat("Digite a altura do retângulo: ");
        console.log(`\nA área do rentâgulo é: ${b*h}`);
    case 2:
        let b2= questionFloat("Digite a base do triâgulo: ");
        let h2= questionFloat("Digite a altura do triângulo: ");
        console.log(`A área do triângulo é: ${(b2*h2)/2}`);

    case 3:
        let raio= questionFloat("Digite o raio do círculo: ");
        console.log(`A área do círculo é: ${3.14*(raio**2)}`);    
    
    case 4:
        break
}

// João Vitor Lopes e Júlia Pereira da Mata 

import rl, { question, questionFloat, questionInt } from 'readline-sync';

while (1=1){

    function areaRetangulo(b, h, pergunta){
    let b= questionFloat("Digite a base do retângulo: ");
    let h= questionFloat("Digite a altura do retângulo: ");
        console.log( `\nA área do rentâgulo é: ${b*h}`) ;
        let pergunta= ("Deseja continuar usando a aplicação? (S/N): ")
        if (pergunta )
        
    }

    function areaTriangulo(b2, h2){    
    let b2= questionFloat("Digite a base do triâgulo: ");
    let h2= questionFloat("Digite a altura do triângulo: ");
            console.log(`\nA área do triâgulo é: ${((b2*h2)/2).toFixed(2)})`);
    }; 

    function areaCirculo(raio){
        
        console.log(`\nA área do círculo é: ${3.1415*(raio**2).toFixed(2)})`);
    }


    let raio= questionFloat("Digite o raio do círculo: ");

let menu = questionInt("\n1. descobrir a área do retangulo \n2. descobrir a área do triângulo \n3. descobrir a area do circulo \n4. sair a aplicação \nDigite a opção desejada: ")

    if (menu=1){
        console.log(areaRetangulo``)
    } if (menu=2){
        console.log(areaTriangulo)
    } if (menu=3){
        console.log(areaCirculo)
    }if (menu =4){
        break
    }


}
    


//realizar os caulculos e imprimir na tela
// aceitar valores positivos maiores que zero
//perguntar se o usuario quer continuar usando a aplicação
