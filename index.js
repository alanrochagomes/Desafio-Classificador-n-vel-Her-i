// Variáveis para armazenar o nome e a experiência do herói
let nome = "Exemplo"; // Pode ser obtido do usuário
let xp = 7500; // Pode ser obtido do usuário

// Variável para armazenar o nível do herói
let nivel;

// Estrutura de decisão para determinar o nível do herói com base na experiência
if (xp < 1000) {
    nivel = "Ferro";
} else if (xp >= 1001 && xp <= 2000) {
    nivel = "Bronze";
} else if (xp >= 2001 && xp <= 5000) {
    nivel = "Prata";
} else if (xp >= 5001 && xp <= 6000) {
    nivel = "Ouro";
} else if (xp >= 6001 && xp <= 7000) {
    nivel = "Platina";
} else if (xp >= 7001 && xp <= 8000) {
    nivel = "Ascendente";
} else if (xp >= 8001 && xp <= 9000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

// Exibindo a mensagem com o nome e nível do herói
console.log(`O herói de nome ${nome} está no nível de ${nivel}.`);
