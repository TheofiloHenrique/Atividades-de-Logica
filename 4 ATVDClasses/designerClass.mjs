import Funcionario from "./funcionario.mjs";

class Designer extends Funcionario{
    #software
    constructor(nome,idade,cargo,software){
        super(nome,idade,cargo)
        this.#software = software;
    }

    trabalho(){
        return `${this.nome} está executando sua tarefas no ${this.#software}`;
    }

    dados(){
        return `Nome: ${this.nome} \nIdade: ${this.idade} \nCargo: ${this.cargoFuncionario} \nSoftware de Trabalho: ${this.#software}`
    }

    get softwareDeTrabalho(){
        return `${this.#software}`;
    }

    set novoSoftware(novoSoft){
        this.#software = novoSoft;
    }

}

const designer = new Designer("Jorgin",24,"Designer Chefe","Photoshop");

console.log(designer.trabalho());
console.log(designer.dados());

console.log(designer.softwareDeTrabalho);
designer.novoSoftware = "CorelDraw";
console.log(designer.softwareDeTrabalho);

