// let idade = 5;
// console.log(idade);

let valorPassagem = 39;
valorPassagem = 30;
console.log(valorPassagem);

// const valorPassagem = 39;
// valorPassagem = 30;
// console.log(valorPassagem);
// // Isso gera um erro, pois o tipo de variavel é uma constante e não pode ser alterada como foi feito na linha 9

let nome = 'Thales'; //script literal
let idade = 22; //number literal
let aprovado = true; //boolean
let sobrenome = undefined; //undefined
let corSelecionada = null; //redefinir

//typeof nome; // diz o tipo da variavel 

//Objetos

let pessoa = {
nome : 'Thales',
idade : 22,
maiorIdade : true,
corPredileta : null
};
console.log(pessoa);

//Array

let familia = [true, 45, 'Thales', 17];
console.log(familia);
console.log(familia.length);
console.log(familia[2]);

let meuAmigo = ['Murilo', 19 , 'Itu'];
console.log(meuAmigo[0]);
console.log(meuAmigo[1]);
console.log(meuAmigo[2]);

//Functions 
// Verbo + Substantivo

//ex: resetaCor, alterarTamanho

let corSite = "Azul";

//sem parametro
function resetaCor(){
    corSite = "";
};

console.log(corSite);
resetaCor();
console.log(corSite);


//com parametro
function resetaCor1(cor){
    corSite = cor;
};

console.log(corSite);
resetaCor1("vermelho");
console.log(corSite);