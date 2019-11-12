class Lancamento {
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos_parametros) {
        lancamentos_parametros.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(6, 2018)
console.log(contas.mes, contas.ano, contas.lancamentos)
console.log("\n")
contas.addLancamentos(salario, contaDeLuz)
console.log(salario, contaDeLuz)
console.log("\n")
console.log(contas.mes, contas.ano, contas.lancamentos)
console.log("\n")
console.log(contas)
console.log("\n")
console.log(contas.sumario())