let salario = 5000;

if(salario < 1000){
console.log("Sem bônus para pobres!")
}else if(salario >=1000 && salario <= 5000){
console.log("Você ganhou um bonûs de 5%! \nSalário após bonûs: "+ (salario+(salario*0.05)));

}else{
console.log("Você ganhou um bonûs de 10%! \nSalário após bonûs: "+ (salario+(salario*0.10)));

}

