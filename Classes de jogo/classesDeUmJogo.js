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
    constructor(nome, idade, classeHeroi, nivelHeroi){
        this.nome = nome
        this.idade = idade
        this.classeHeroi = classeHeroi
        //this.ataqueHeroi = ataqueHeroi
        this.nivelHeroi = nivelHeroi
    }

    personagemHeroi(){
        console.log(`
        Nome: ${this.nome}
        Idade: ${this.idade}
        Classe: ${this.classeHeroi}
        Nível: ${this.nivelHeroi}
        `)
    }
}
// Criando método e usando sintaxe tradicional
const atacar = {
    ataqueHeroi: "Magia"
}

// Verificação para identificar o tipo de ataque do herói
if (atacar.ataqueHeroi === "shuriken") {
    this.classeHeroi = "ninja"
} else if (atacar.ataqueHeroi === "magia") {
    this.classeHeroi = "mago"
} else if (atacar.ataqueHeroi === "espada") {
    this.classeHeroi = "guerreiro"
} else if (atacar.ataqueHeroi === "artes marciais") {
    this.classeHeroi = "monge"
}

let personagem = new heroi("Georgene", 29, "monge", 30000)
console.log(`O ${this.classeHeroi} atacou usando ${atacar.ataqueHeroi}`)
personagem.personagemHeroi()