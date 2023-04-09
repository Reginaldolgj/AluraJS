const notas = [7, 7, 8, 9];

// os 3 pontos são o que faz ser clonado sem modificar o array clonado.
const novasNotas = [...notas,100]; //O 100 também é inserido no array novo. Outra forma de fazer o push.

novasNotas.push(10);

console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas originais são ${notas}`);