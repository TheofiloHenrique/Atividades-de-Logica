export default class Funcionario{
    #cargo
    constructor(nome,idade,cargo){
        this.nome = nome;
        this.idade = idade;
        this.#cargo = cargo;  
    }

    trabalho(){
        return `${this.nome} está executando sua tarefas...`;
    }

    dados(){
        return `Nome: ${this.nome} \nIdade: ${this.idade} \nCargo: ${this.#cargo}`
    }

    get cargoFuncionario(){
        return `${this.#cargo}`;  
    }

    set novoCargo(novoCargo){
        this.#cargo = novoCargo;
    }

}

const funcionario = new Funcionario("Jarbas",23,"Pedreiro");

// console.log(funcionario.trabalho());
// console.log(funcionario.dados());


// console.log(funcionario.cargoFuncionario);
// funcionario.novoCargo = "Pedreiro Patrão";
// console.log(funcionario.cargoFuncionario);






