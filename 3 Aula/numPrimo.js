function numeroPrimo(num) {
    // Números menores ou iguais a 1 não são primos
    if (num <= 1) return false;
    
    // 2 é o único número primo par
    if (num === 2) return true;
    
    // Números pares maiores que 2 não são primos
    if (num % 2 === 0) return false;
    
    // Verifica divisibilidade de 3 até a raiz quadrada do número
    for (let i = 3; i * i <= num; i += 2) {
        if (num % i === 0) return false;
    }
    
    return true;
}

let num = 7; 

if (numeroPrimo(num)) {
console.log(`${num} é um número primo`);
}else{
console.log(`${num} não é um número primo mula!`);
}
