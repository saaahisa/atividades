class contaBancaria{
    constructor (nome, idade, salario, sexo, agencia, conta, tipoConta){
        this.nome = nome;
        this.idade = idade;
        this.salario = salario;
        this.sexo = sexo;
        this.agencia = agencia;
        this.conta = conta;
        this.tipoConta = tipoConta;
    }
    
    contaPoupanca(tipoConta){
        return this.salario * 0.015;
    };

    contCorrente(tipoConta){
        return this.salario * 0.036;
    };

    contaEstudante(tipoConta){
        return this.salario * 0.012;
    };

    contaDesconto(){
        return this.salario - this.contaEstudante()
    }

}

let dadosUser = new contaBancaria ('Anne', '19', 1500, 'feminino', 13456-8, '78910', 'contaEstudante()');

console.log(dadosUser)
console.log(`O desconto que a aluna terá é de: ${dadosUser.contaEstudante()}`);
    