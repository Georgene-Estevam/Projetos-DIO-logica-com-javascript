class heroi {
    constructor(nome, idade, classeHeroi, ataqueHeroi, nivelHeroi){
        this.nome = nome
        this.idade = idade
        this.classeHeroi = classeHeroi
        this.ataqueHeroi = ataqueHeroi
        this.nivelHeroi = nivelHeroi
    }

    personagemHeroi(){
        console.log(`
        Nome: ${this.nome}
        Idade: ${this.idade}
        Classe: ${this.classeHeroi}
        Tipo de ataque: ${this.ataqueHeroi}
        Nível: ${this.nivelHeroi}
        `)
    }
}
// Criando método e usando sintaxe tradicional
const atacar = {
    ataqueHeroi: "shuriken"
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

let personagem = new heroi("Georgene", 29, this.classeHeroi, atacar.ataqueHeroi, 250000)
console.log(`O ${this.classeHeroi} atacou usando ${atacar.ataqueHeroi}`)
personagem.personagemHeroi()