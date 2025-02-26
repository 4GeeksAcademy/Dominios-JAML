function Generador() {
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let extension = ['.com', '.es', '.ve']
  let nombre = "";
  

  for (let i = 0; i < 8; i++) {
    nombre = pronoun[Math.floor(Math.random() * pronoun.length)] + adj[Math.floor(Math.random() * adj.length)] + noun[Math.floor(Math.random() * noun.length)] + extension[Math.floor(Math.random() * extension.length)]
    console.log(nombre)
  }
}

Generador()