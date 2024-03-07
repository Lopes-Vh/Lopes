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
    