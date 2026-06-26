// 1. Função que recebe vitórias e derrotas
function calcularRank(vitorias, derrotas) {
    // Operadores: cálculo do saldo
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

    // Estruturas de decisões para definir o nível com base nas VITÓRIAS
    if (vitorias <= 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }

    // Retorna o resultado estruturado (texto final formatado)
    return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

// 2. Criando uma lista de heróis para usar o laço de repetição
let heroisParaTestar = [
    { vitorias: 8, derrotas: 2 },    // Cai no Ferro
    { vitorias: 15, derrotas: 5 },   // Cai no Bronze
    { vitorias: 45, derrotas: 10 },  // Cai no Prata
    { vitorias: 75, derrotas: 15 },  // Cai no Ouro
    { vitorias: 85, derrotas: 5 },   // Cai no Diamante
    { vitorias: 95, derrotas: 10 },  // Cai no Lendário
    { vitorias: 120, derrotas: 20 }  // Cai no Imortal
];

// 3. Laço de Repetição (for) para calcular o rank de cada herói na lista
console.log("--- RESULTADO DOS CÁLCULOS ---");
for (let i = 0; i < heroisParaTestar.length; i++) {
    // Variável recebendo o retorno da função
    let mensagemFinal = calcularRank(heroisParaTestar[i].vitorias, heroisParaTestar[i].derrotas);
    
    // Exibição da mensagem final
    console.log(mensagemFinal);
}
