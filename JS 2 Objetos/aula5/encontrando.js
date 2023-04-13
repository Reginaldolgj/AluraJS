const clientes = require("./clientes.json");

// console.log(clientes);

function encontrar(lista, chave, valor) {
    return lista.find((item) =>  item[chave] === valor);

}

const encontrado = encontrar(clientes, "nome", "Cecelia");

console.log(encontrado)