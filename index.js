console.log("Olá Heroi!");

let timeHerois = [
    "Ela7",
    "Ele7",
    "Afo"
];

let xpHerois = 7.024;

const niveis = [
    { limite: 1.000, nivel: "Ferro" },
    { limite: 2.000, nivel: "Bronze" },
    { limite: 5.000, nivel: "Prata" },
    { limite: 7.000, nivel: "Ouro" },
    { limite: 8.000, nivel: "Platina" },
    { limite: 9.000, nivel: "Ascendente" },
    { limite: 10.000, nivel: "Imortal" },
    { limite: Infinity, nivel: "Radiante" }
];

for (let i = 0; i < niveis.length; i++) {
    if (xpHerois <= niveis[i].limite) {
        xpHerois = niveis[i].nivel;
        break;
    }
}

console.log("O Herói " + timeHerois[2] + " está no nível " + xpHerois);