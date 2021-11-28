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
//=======================================================================================================================
//Objetos

let pessoa = {
nome : 'Thales',
idade : 22,
maiorIdade : true,
corPredileta : null
};
console.log(pessoa);
//=======================================================================================================================
//Array

let familia = [true, 45, 'Thales', 17];
console.log(familia);
console.log(familia.length);
console.log(familia[2]);

let meuAmigo = ['Murilo', 19 , 'Itu'];
console.log(meuAmigo[0]);
console.log(meuAmigo[1]);
console.log(meuAmigo[2]);
//=======================================================================================================================
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
//=======================================================================================================================
//tipos de função
//realiza uma tarefa, mas não devolve nada
function dizerNome(){
    console.log('Thales')
};
dizerNome();

//realiza uma tarefa e retorna um valor 
function multiplicarPorDois(valor){
    return valor * 2;
};
let resultado = multiplicarPorDois(5);

console.log(resultado);

//=======================================================================================================================
//Operadores Aritiméticos(matemáticos)
//Operadores de Atribuição 
//Operadores de Comparação 
//Operadores Lógicos 
//Operadores Bitwise
//=======================================================================================================================
//Operadores Aritiméticos(matemáticos)
 
let salario = 100;

// + , - , * , / , ** 

console.log(salario + salario);
console.log(salario - salario);
console.log(salario * salario);
console.log(salario / salario);
console.log(salario ** salario);

//++ -- 

let idade = 18;

console.log(idade++); //retorna 18 pois ele está depois da operação 
console.log(idade);// retorna 19
console.log(++idade); //retorna 19 pois ele acrescentou antes da operação

//O mesmo aconte comm o --

console.log(idade++); //retorna 18 pois ele está depois da operação 
console.log(idade);// retorna 19
console.log(++idade); //retorna 19 pois ele acrescentou antes da operação


//=======================================================================================================================
let valorTeclado = 100;
//valorTeclado = valorTeclado + valorTeclado;
valorTeclado += valorTeclado;
console.log(valorTeclado);

// Comm o ( - ) funciona da mesma maneira

//=======================================================================================================================
//Operadores de Igualdade 

console.log(1 === 1); //true
console.log('1' === 1); //false

//igualdade solta
console.log(1 == 1); //true
console.log('1' == 1); //true

//=======================================================================================================================
//Operador Ternário
//Tem um cliente, 100 Premium, comum

let pontos = 101;
let tipo = pontos > 100 ? 'Premium' : 'Comum';
console.log(tipo);
//=======================================================================================================================
//Operadores Lógicos e (&&)
//retorna True se os dois operados forem true

console.log(true && true); //retorna true

let maiorIdade = true;
let possueCarteira = true;

let podeAplicar = maiorIdade && possueCarteira;

console.log(podeAplicar);//True

//Operador Logico ou (||)
//Retorna true se um dos operadores forem true

let maiorIdade = true;
let possueCarteira = false;

let podeAplicar = maiorIdade ||possueCarteira;

console.log('pode aplicar: ' ,podeAplicar);//True

//Operador NOT (!)

let candidatoRecusado = !podeAplicar;

console.log('candidato recusado', candidatoRecusado); 

//