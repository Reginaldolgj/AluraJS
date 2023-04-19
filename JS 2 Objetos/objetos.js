// const cliente = {
//     nome: "Andre",
//     idade: 32,
//     cpf: "1122233345",
//     email: "andre@dominio.com",
//   };
  
//   console.log(
//     `O nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente.idade} anos.`
//   );
  
// // objetos podem ser acessador por "." ou "[]". Este é utulizado para iterações, pois, não se sabe a quantidade e nomes.
//   const chaves = ["nome", "idade", "cpf", "email"];
  
//   chaves.forEach((chave) => {
//     console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
//   });
const cliente = {
  nome: "Joao",
  idade: 24,
  email: "joao@firma.com",
  telefone: ["1155555550", "1144444440"],
};

cliente.enderecos = [
  {
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
  },
];

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes("enderecos")) {
  console.error("Erro. É necessário ter um endereço cadastrado.");
}