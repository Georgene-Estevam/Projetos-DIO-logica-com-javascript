// Função para classificar o nível do herói
function classificadorNivelHeroi() {
let nomeDoHeroi = "Georgene"
let quantidadeXP = 25000
let categoriaDeHeroi = ""

if (quantidadeXP <= 1000) {
  categoriaDeHeroi = "Ferro"

} else if (quantidadeXP >= 1000 && quantidadeXP <= 2000) {
  categoriaDeHeroi = "Bronze"

} else if (quantidadeXP >= 2001 && quantidadeXP <= 5000) {
    categoriaDeHeroi = "Prata"

} else if (quantidadeXP >= 6001 && quantidadeXP <= 7000) {
    categoriaDeHeroi = "Ouro"

} else if (quantidadeXP >= 7001 && quantidadeXP <= 8000) {
    categoriaDeHeroi = "Platina"
    
} else if (quantidadeXP >= 8001 && quantidadeXP <= 9000) {
    categoriaDeHeroi = "Ascendente"
    
} else if (quantidadeXP >= 9001 && quantidadeXP <= 10000) {
    categoriaDeHeroi = "Imortal"
    
} else if (quantidadeXP >= 10001) {
    categoriaDeHeroi = "Radiante"
  
}
console.log(`O herói ${nomeDoHeroi} possui o nível de XP de ${quantidadeXP}. Este herói é da categoria ${categoriaDeHeroi}`)
console.log("\n")
}
classificadorNivelHeroi()

//Função de listagem dos atributos do personagem
function mostrarHabilidades() {
  let personagem = {
    nome: "Georgene",
    altura: 1.80,
    classe: "Guerreiro",
    agilidade: 40,
    forca: 60,
    estamina: 65,
    estrategia: 80,
    visao: 90,
    vida: 100
  };

  // Percorrendo com for in para mostrar a listagem dos atributos do personagem
  for (let atributo in personagem) {
    console.log(`${atributo}: ${personagem[atributo]}`)
  }
}
mostrarHabilidades()