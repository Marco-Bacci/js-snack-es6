const bicycles = [
  {
    brand : `bianchi`,
    weightKg : `8`
  },
  {
    brand : `colnago`,
    weightKg : `7.5`
  },
  {
    brand : `canyon`,
    weightKg : `7.7`
  },
  
  {
    brand : `pinarello`,
    weightKg : `8.5`
  },
  {
    brand : `trek`,
    weightKg : `7.3`
  }
]
// determino il primo indice dell'array per compararlo con gli altri
let lightest = bicycles[0]
// ciclo l'array per comparare tutti gli elementi
for(i=0; i<bicycles.length; i++){
  if(lightest.weightKg > bicycles[i].weightKg){
    lightest =  bicycles[i]

  }
}

console.log(lightest)
