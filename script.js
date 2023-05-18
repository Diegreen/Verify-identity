

let nome = prompt(`Qual seu nome?`)
let idade = prompt(`Qual sua idade?`)
let estaAcompanhado = prompt(`Está acompanhado? Coloque S(Sim) ou N(Não)`)

function verify(idade, nome, estaAcompanhado) {
    if (idade >= 18) {
        return alert(`Entrada não permitida para: ${nome}         
                Menor de idade: ${idade}`)
    } else if (estaAcompanhado == `S`) {
        true
        return alert(`Entrada Permitida para: ${nome}, Coceder Desconto`)
    } else if (estaAcompanhado == `N`) {
        false
        return `Entrada Negada para: ${nome}, Valor Integral`
    }
}

console.log(verify(idade, nome, estaAcompanhado))


