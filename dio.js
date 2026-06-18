// Variáveis e dados
let herois = [
    { nome: "Arthur", xp: 500 },
    { nome: "Merlin", xp: 1500 },
    { nome: "Galahad", xp: 6500 },
    { nome: "Lancelot", xp: 12000 }
];

// Laço de repetição para percorrer a lista
for (let i = 0; i < herois.length; i++) {
    let nome = herois[i].nome;
    let xp = herois[i].xp;
    let nivel = "";

    // Estrutura de decisão
    if (xp <= 1000) {
        nivel = "Ferro";
    } else if (xp <= 2000) {
        nivel = "Bronze";
    } else if (xp <= 5000) {
        nivel = "Prata";
    } else if (xp <= 7000) {
        nivel = "Ouro";
    } else if (xp <= 8000) {
        nivel = "Platina";
    } else if (xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    // Saída formatada
    console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
}
    