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

let idadee = 18;

console.log(idadee++); //retorna 18 pois ele está depois da operação 
console.log(idadee);// retorna 19
console.log(++idadee); //retorna 19 pois ele acrescentou antes da operação

//O mesmo aconte comm o --

console.log(idadee++); //retorna 18 pois ele está depois da operação 
console.log(idadee);// retorna 19
console.log(++idadee); //retorna 19 pois ele acrescentou antes da operação


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

//let maiorIdade = true;
//let possueCarteira = true;

//let podeAplicar = maiorIdade && possueCarteira;

//console.log(podeAplicar);//True

//Operador Logico ou (||)
//Retorna true se um dos operadores forem true

let maiorIdade = true;
let possueCarteira = false;

let podeAplicar = maiorIdade ||possueCarteira;

console.log('pode aplicar: ' ,podeAplicar);//True

//Operador NOT (!)

let candidatoRecusado = !podeAplicar;

console.log('candidato recusado', candidatoRecusado); 

//Fanlsy
//underfind
//null
//0
//false
//''
//NaN - not a nummber

//Truthy

let corPersonalizada = 'Vermelho';
let corPadrao = 'Azul';
let corPerfil = corPersonalizada || corPadrao;

console.log(corPerfil); //Vai retornar o primeiro valor truthy

//=========================================
//Mini projeto

let a = 'Vermelho';
let b = 'Azul';

let c = a;
a = b;
b = c;

console.log(a);
console.log(b);

//============================================
//IF e Else

let hora = 10;
if (hora > 6 && hora <12){
    console.log('Bom dia!');
}else if(hora > 12 && hora < 18 ){
    console.log('Boa tarde');
}else{
    console.log('Boa noite!')
}

//============================================
//switch case

let permissão = 'comum';

switch(permissão){
    case 'comum':
    console.log('usuário comum');
    break;

    case 'gerente':
    console.log('usuário gerente');
    break;

    case 'diretor':
    console.log('usuário diretor');
    break;

    default:
    console.log('Usuário não conhecido!');
}

//============================================
//For / while / Do  while / For In / For of

// For 

 for (let i = 1; i <= 5; i++) { //Tbm pode usar (--) 
     if(i % 2 !== 0){
        console.log (i);  
     }

 }

 // While
 
 let i = 5;

 while(i >= 1){
    if(i % 2 !== 0){
        console.log (i);  
    }
    i--;
 }

 //Do  while

 let i = 0;

 do{
     console.log('Digitando', i);
     i++;
 }while(i < 10)

 //for in

 const pessoa = {
    nome: 'Thales',
    idade: 22
 };
for (let chave in pessoa){
    console.log(chave,pessoa['nome']);
}

const cores = ['Vermelho', 'Azul', 'Verde'];

for (let indice in cores){
    console.log(indice,cores[indice]);
}


//For of

for(let cor of cores){
    console.log(cor);
}


//===================================================================
const resultado = fizzBuzz(15);
console.log(resultado); 

function fizzBuzz(entrada){
    if(typeof entrada !== 'number')
        return 'Não é um numero';
    if((entrada % 3 === 0) && (entrada % 5 === 0 ))
        return 'FizzBuzz';
    if(entrada % 3 === 0)
        return 'Fizz';
    if(entrada % 5 === 0)
        return 'Buzz';
    return entrada; 
}

//=============================================
//Velocidade maxima de 70 km/h
//a cada 5km acima do limite você ganha 1 ponto
//Math.Floor()
//Caso os pontos sejam maior que 12 a carteira é suspensa 

verificarVelocidade(80)

function verificarVelocidade(velocidade){
    const velMaxima = 70;
    const limite = 5;
    if(velocidade <= velMaxima)
        console.log('Sua velocidade está ok');

    else{
        const pontos = Math.floor(((velocidade - velMaxima)/limite));
        if (pontos >=12)
            console.log('Carteira suspensa');
        else
            console.log('Pontos', pontos);  
    }
}

//================================================
exibirTipo(10);

function exibirTipo(vl){
    if (vl % 2 ===0)
    console.log('Seu número é PAR')
    else
    console.log('Seu número é IMPAR');
}    