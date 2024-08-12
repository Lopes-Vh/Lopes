
let nome = "João vitor Lopes"
const idd = "16"

console.log("Ola, meu nome é ", nome, "e tenho", idd, "Anos de idade");



let str ="Teste0"
let maius = str.toUpperCase();
let minus = str.toLowerCase();

console.log("Frase original ", str) 
console.log("Frase maiuscula ", maius) 
console.log("Frase Minuscula ", minus) 




let numero = Number(9);

if (typeof numero === 'number') {
    console.log("A variável numero é do tipo Number");
} else {

    console.log("A variável numero não é do tipo Number");
    
}


var peso = ("80")
var Altura = ("187")

console.log("Seu imc é", peso/(Altura*Altura))

////////////////////////////////////////OPERADORES/////////////////////////////////////////////
var num = 1;
var num2 = 2;
console.log(num+num2, num-num2, num*num2, num/num2)

var idade1 = 20;
var idade2 = 19;
if (idade1>idade2) console.log('A primeira pessoa é mais velha que a outra')
if (idade1<idade2) console.log('A primeira pessoa é mais nova que a outra')

var idade3 = 17
if (idade3>=18) console.log('A primeira pessoa é maior de idade')
if (idade3<18) console.log('A primeira pessoa é menor de idade')

var numero2 =3;
if (numero2%2 ==0) console.log('O numero é par')
if (numero2%2 !=0) console.log('O numero é impar')
