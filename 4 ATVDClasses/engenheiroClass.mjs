import Funcionario from "./funcionario.mjs";

class Engenheiro extends Funcionario{
    #salario
    #ferramenta
    constructor(nome,idade,cargo,salario,ferramenta){
        super(nome, idade, cargo);
        this.#salario = salario;
        this.#ferramenta = ferramenta;
       
    }

    trabalho(){
        return `${this.nome} está executando sua tarefas com sua ferramenta: ${this.#ferramenta}`;
    }

    dados(){
        return `Nome: ${this.nome} \nIdade: ${this.idade} \nCargo: ${this.cargoFuncionario} \nSalário: R$ ${this.#salario} \nFerramenta de Trabalho: ${this.#ferramenta}`
    }

    get engenheiroSalario(){
        return `R$ ${this.#salario}`
    }

    set newSalario(novoSalario){
        if(novoSalario > 0) return this.#salario = novoSalario;
        else return  console.error("O salário não pode ser menor ou igual a zero!");
    }

}

const en = new Engenheiro("Bebeto", 32, "Gerente",2000,"Martelo");

console.log(en.dados());
console.log(en.trabalho());
console.log(en.engenheiroSalario);
en.newSalario = -2341;
console.log(en.engenheiroSalario);

