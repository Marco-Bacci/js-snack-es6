const bicycles = [
  {
    brand: `bianchi`,
    weightKg: `8`,
  },
  {
    brand: `colnago`,
    weightKg: `7.5`,
  },
  {
    brand: `canyon`,
    weightKg: `7.7`,
  },

  {
    brand: `pinarello`,
    weightKg: `8.5`,
  },
  {
    brand: `trek`,
    weightKg: `7.3`,
  },
];
// determino il primo indice dell'array per compararlo con gli altri
let lightest = bicycles[0];
// ciclo l'array per comparare tutti gli elementi
for (i = 0; i < bicycles.length; i++) {
  if (bicycles[i].weightKg < lightest.weightKg) {
    lightest = bicycles[i];
  }
}

console.log(lightest);

const team = [
  {
    nome: `juventus`,
    points: 0,
    faults: 0,
  },
  {
    nome: `napoli`,
    points: 0,
    faults: 0,
  },
  {
    nome: `atalanta`,
    points: 0,
    faults: 0,
  },
  {
    nome: `inter`,
    points: 0,
    faults: 0,
  },
  {
    nome: `roma`,
    points: 0,
    faults: 0,
  },
];

// imposto una funziona per trovare un numero randomico e la imposto ad una variabile
function getRandomNumber (){
  return Math.floor(Math.random()*100) +1
}
let random = getRandomNumber()
console.log(random)

