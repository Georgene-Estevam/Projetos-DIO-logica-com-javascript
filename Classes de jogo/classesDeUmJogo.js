/*
class maquinaTenis {
    constructor(estiloTenis, tamanhoTenis, amortecimento, precoTenis) {
        this.estiloTenis = estiloTenis
        this.tamanhoTenis = tamanhoTenis
        this.amortecimento = amortecimento
        this.precoTenis = precoTenis
    }

    listarProduto(){console.log(`
    Tênis indicado para: ${this.estiloTenis}
    Tamanho do tênis: ${this.tamanhoTenis}
    Tipo de amortecimento: ${this.amortecimento}
    Preço: R$ ${this.precoTenis}`)
    }
}
let tenisCorrida = new maquinaTenis("Tênis para corrida", "Tamanho 42", "Amortecimento Ultra dos deuses", 2999.99)
tenisCorrida.listarProduto()
*/

//Criando a classe do herói
class heroi {
    constructor(nome, idade, classeHeroi, ataqueHeroi, nivelHeroi){
        this.nome = nome
        this.idade = idade
        this.classeHeroi = classeHeroi
        this.ataqueHeroi = ataqueHeroi
        this.nivelHeroi = nivelHeroi
    }

    personagemHeroi(){
        console.log(`O ${this.classeHeroi} atacou usando ${this.ataqueHeroi}`)
        console.log(`
        Nome: ${this.nome}
        Idade: ${this.idade}
        Classe: ${this.classeHeroi}
        Arma: ${this.ataqueHeroi}
        Nível: ${this.nivelHeroi}
        `)
    }
}

let personagem = new heroi("Georgene", 29, "ninja", "shuriken", 30000)
personagem.personagemHeroi()