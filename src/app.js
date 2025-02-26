function GeneradorDeNombresDeDominios() {
  let inicio = ['el', 'la'];
  let medio = ['increible', 'gran'];
  let final = ['zorro', 'mapache', 'gato'];
  let extension = ['.com', '.es', '.ve']
  let nombreDeDominio = "";
  

  for (let i = 0; i < 8; i++) {
    nombreDeDominio = inicio[Math.floor(Math.random() * inicio.length)] + medio[Math.floor(Math.random() * medio.length)] + final[Math.floor(Math.random() * final.length)] + extension[Math.floor(Math.random() * extension.length)]
    console.log(nombreDeDominio)
  }
}

GeneradorDeNombresDeDominios()