let char = ["@","#","$","&"];
let c = 0;
let palavra = "meu amigo é f#d@ poxa!";

for (let i = 0; i < palavra.length; i++) {
    if (char.includes(palavra[i])) {
        c++;
    }
    
}
console.log(`${c} caracteres especiais!`);