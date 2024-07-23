/* Produto embalado*/

let produtoEmbalado = {
    Nome: "Laptop HP",
    categoria: "Eletrônico",
    peso: 1.5,
    preco: 3500.00
    }
    console.log("O produto", produtoEmbalado.Nome,", da categoria", 
        produtoEmbalado.categoria, ", pesando", produtoEmbalado.peso, ", está a venda por", produtoEmbalado.preco)

/* imovel*/
class imovel{
    quarto;
    tipo;
    endereco;
    exibirInformaçoes(){
    return `Um ${this.tipo}, com ${this.quarto}, ${this.endereco}`
    }

}
const Casa = new imovel(
    Casa.quarto = 5,
    Casa.tipo = "casa",
    Casa.endereco = "Rua da Amizade, 789 - Bairro Alegre"
    )

const apartamento = new imovel(
        Casa.quarto = 2,
        Casa.tipo = "apartamento",
        Casa.endereco = "Endereço: Avenida da Paz, 123 - Centro"
        )
    
/* Carro*/
class Veiculo {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    exibirInformacoes() {
        return `Um ${this.marca}, modelo ${this.modelo}, ano ${this.ano}.`;
    }
}

const carro = new Veiculo("Dodge", "RAM", "2023");
const moto = new Veiculo("Kawasaki", "Ninja 1000", "2023");

console.log(carro.exibirInformacoes());
console.log(moto.exibirInformacoes());

/* apartamento*/
let apartament ={
    quartos: 2,
    tipo: 'apartamento',
    endereco: 'Avenida Principal, 456 - Centro',
    andar: 7
    
}
console.log(`${apartament.tipo} com ${apartament.quartos}, localizado no ${apartament.andar}, na ${apartament.endereco}`)