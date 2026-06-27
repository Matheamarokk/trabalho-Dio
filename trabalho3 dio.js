// Definição da Classe
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        // Convertendo para minúsculas para evitar erros de digitação (ex: Mago vs mago)
        this.tipo = tipo.toLowerCase(); 
    }

    // Método da classe
    atacar() {
        let ataque = "";

        // Estrutura de decisão para verificar o tipo do herói
        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "um ataque desconhecido";
        }

        // Saída esperada
        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

// Criando os Objetos
const heroi1 = new Heroi("Arthur", 30, "Guerreiro");
const heroi2 = new Heroi("Merlin", 150, "Mago");
const heroi3 = new Heroi("Aang", 12, "Monge");
const heroi4 = new Heroi("Naruto", 17, "Ninja");

// Criando um array com os objetos
const listaHerois = [heroi1, heroi2, heroi3, heroi4];

// Laço de repetição iterando sobre os objetos e chamando a função
for (let i = 0; i < listaHerois.length; i++) {
    listaHerois[i].atacar();
}