function calcularRanking(vitoria, derrotas) {
    let calculoDoRanking = vitoria - derrotas;
    let nivelHeroi = "";

    if (calculoDoRanking < 11) {
        nivelHeroi = "Ferro";
    } else if (calculoDoRanking <= 20) {
        nivelHeroi = "Bronze";
    } else if (calculoDoRanking <= 50) {
        nivelHeroi = "Prata";
    } else if (calculoDoRanking <= 80) {
        nivelHeroi = "Ouro";
    } else if (calculoDoRanking <= 90) {
        nivelHeroi = "Diamante";
    } else if (calculoDoRanking <= 100) {
        nivelHeroi = "Lendário";
    } else {
        nivelHeroi = "Imortal";
    }

    console.log(`O herói tem saldo de ${Number(calculoDoRanking)} e está no nível ${nivelHeroi}`);
}

let resultadoRanking = calcularRanking(175, 50);