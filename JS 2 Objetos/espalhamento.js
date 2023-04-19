const cliente = {
    nome:"Reginaldo",
    idade:26,
    profissão:"Dev",
    telefone:["11900000000","1100000000"],
};
cliente.enderecos = [{
    rua: "Rua Seila Ali",
    numero: 123456,
    apartamento: true,
    complemento: "cond. Seila"
}];

// código omitido

function ligaParaCliente(telefoneComercial, telefoneResidencial) {
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
  }
  
  // spread operator ...
ligaParaCliente(...cliente.telefone)

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0],
};
console.log(encomenda);