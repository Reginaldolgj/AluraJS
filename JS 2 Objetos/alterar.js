const pessoa = {
    nome:"Reginaldo",
    profissão:"Dev",
}

console.log(`Meu nome é ${pessoa["nome"]} minha profissão é ${pessoa.profissão}`)

pessoa.telefone = "(11) 9.8784-00:)"

console.log(pessoa.telefone)

delete pessoa.telefone

console.log(pessoa)

pessoa.telefone = "(00) 0.0000-0000"

console.log(pessoa.telefone)