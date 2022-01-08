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

 let j = 0;

 do{
     console.log('Digitando', j);
     j++;
 }while(j < 10)

 //for in

 const pessoaa = {
    nome: 'Thales',
    idade: 22
 };
for (let chave in pessoaa){
    console.log(chave,pessoaa['nome']);
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
const resultadoo = fizzBuzz(15);
console.log(resultadoo); 

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
//==============================================
//criar função somar que retorna a soma de todos os multiplos de 3 e 5

//Multiplos de 3
// 3, 6, 9
//Multiplos de 5
//5, 10 

//somando os multiplos 
//armazenar os multiplos de 3
//armazenar os multiplos de 5
//somar os dois


somar(10);
function somar(limite){
    let totalA;
    let totalB;
    
    for (i=0; i<=limite; i++) {
        if(i % 3 === 0)
        totalA += i;
        if(i % 5 === 0)
        totalB += i;
    }

    console.log(totalA = totalB);
}
//================================
//Nota escolar
//obter a media a partir de um array

// 0 - 59 : F
//60 - 69 : D
//70 - 79 : C
//80 - 89 : D
//90 - 100: A

const array = [90, 90, 80];

console.log(mediaDoAluno(array));

function mediaDoAluno(notas){

    const media = calcularMedia(notas);

    if (media < 59) return 'F';
    if (media < 69) return 'D';
    if (media < 79) return 'C';
    if (media < 89) return 'B';
    return 'A'
}

function calcularMedia(array){
    let soma = 0;
    for(let valor of array){
        soma += valor;
    }
    return soma/(array.length);
}

//==================================
//Criar uma função que exibe a quantidade de * que a linha possue

//exibirAsteriscos(10);

//function exibirAsteriscos(linhas){
 //   let padrao = '';
 //   for (let linha = 1; linha <= linhas; linha++) {
 //       padrao += '*'
  //      console.log(padrao)
 //   }
//}

//===================ou============
exibirAsteriscos(15);

function exibirAsteriscos(linhas){
    
    for (let linha = 1; linha <= linhas; linha++) {
        let padrao = '';
        for(let c = 1; c <=linhas; c++){
            padrao += '*'
            
        }
        console.log(padrao);
    }
    
}
//==========================================
exibirNummeroPrimos(15);

function exibirNummeroPrimos(limite){
    for (let numero = 2; numero <=limite; numero++){
        let ehPrimo = true;

        for(let divisor = 2; divisor < numero; divisor++){
            if(numero % divisor === 0){
                ehPrimo = false;
                break;
            }
        }

        if (ehPrimo) console.log(numero);
    }
}
//==================Ou========Tornando mais limpo===========
exibirNummeroPrimos(15);

function exibirNummeroPrimos(limite){
    for (let numero = 2; numero <=limite; numero++){
        if (NumeroPrimo(numero)) console.log(numero);
    }
}
function NumeroPrimo(numero){
    for(let divisor = 2; divisor < numero; divisor++){
        if(numero % divisor === 0){
            return false;   
        }
    }
    return true;
}

//Factory Functions
/////////////////////////////////////
function criarCelular(marcaCelular, tamanhoCelular, capacidadeBateria){
    return{
            marcaCelular : marcaCelular,
            tamanhoCelular : tamanhoCelular,
            capacidadeBateria : capacidadeBateria,
            ligar(){
            console.log('Fazendo ligação...');
        }
    }

}
const celular1 = criarCelular('Motorola', 5.5, 3000);
console.log(celular1);
//============================
//Pascal case UmDOisTresQuatro

function Celular(marcaCelular, tamanhoTela, capacidadeBateria) {
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function(){
        console.log("Fazendo ligação....");
    }
        
}
const celular = new Celular('Asus', 8 , 4000);
console.log(celular);

//Natureza dinamica de objetos

const mouse = {
    cor : 'red',
    marca : 'LOG'
}

mouse.velocidade1 = 2000;
mouse.trocarDPI = function(){
    console.log('mudando DPI');
}
delete mouse.velocidade;
delete mouse.trocarDPI;
console.log(mouse);

//==========================
//Clonando objetos
const celularr = {
    marcaCelular:'ASUS',
    tamanhoTela: {
        vertical: 155,
        horizontal: 75
    },
    ligar : function(){
        console.log('Fazendo Ligação....');
    }
}

const novoObjeto = Object.assign({bateria: 5000},celularr);
console.log(novoObjeto);

//Outra forma de clonar==============
const objeto2 = {...celular};
console.log(objeto2);

//Metodo Math

Math.random();
Math.max(3,6,8,10);
Math.min(5,9,2,15);

//String

//Tipo primitivo
const mensagemm = 'a vida é bela';

//Tipo objeto
const outraMensagem = new String ('bom dia');

outraMensagem.length;
outraMensagem[2];
mensagemm.includes('a');
mensagemm.includes('minnha');
mensagemm.startsWith('verde');
mensagemm.endsWith('bela');
mensagemm.indexOf('vida');
mensagemm.replace('a','O');
mensagemm.trim();
mensagemm.split(' ');

console.log(mensagemm);

//===================================
//template literal
const mensagem1 = 'Oi, isso é \n minha mensagem';

//object {}
//Boolean true, false
//String '' "";
//template ``

const outra = `Oi isso é minha 'primeira' mensagem`;

const nome1 = 'Thales';

const email = 
`Olá Sr.${nome1} ${2+3}

Obrigado por ver meu codigo

att,

Thales`;

console.log(email);
//====================================
//Date

const data1 = new Date();
const data2 = new Date('March 06 2022 09:10');
const data3 = new Date(2019,00,06,9,30);

data3.setFullYear(2030);
console.log(data3);

data2.toDateString(); //trasforma a data em string
data2.toTimeString(); //trasforma a tempo em string
data2.toISOString(); //trasforma em formato para banco de dados

//=====================================
//Criar objeto endereço que contem
//Rua
//Cidade
//Cep
//exibirEndereço(endereco)

let endereco = {
    rua: 'a',
    cidade: 'b',
    cep: 'c'
};

function exibirEndereco(endereco){
    for (let chave in endereco)
    console.log(chave,endereco[chave]);
}

exibirEndereco(endereco);

//==========================================
//Igualdade de Objetos

function enderecos(rua,cidade,cep){
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
}
const enderecos1 = new enderecos('a','b','c');
const enderecos2 = new enderecos('a','b','c');

function saoIguais(enderecos1, enderecos2){
    //comparar se as propriedades sao iguais

    return enderecos1.rua === enderecos2.rua && enderecos1.cidade === enderecos2.cidade && enderecos1.cep === enderecos2.cep
}
console.log(saoIguais(enderecos1, enderecos2));

function temEnderecoMemoriaIguais(enderecos1, enderecos2){
    //comparar se a referencia do objeto aponta para o mesmolocal da memoria

    return enderecos1 === enderecos2;
}

console.log(temEnderecoMemoriaIguais(enderecos1, enderecos2));

//=================================
//Crie um objeto de postagem do blog que vai conter as seguintes postagens 

//titulo
//mensagem
//autor
//visualizações
//cometarios
//      (autor, mensagem)
//estaAoVivo

let postagem  = {
    titulo :   'a',
    mensagem : 'b',
    autor :    'c',
    visualizações : 10,
    cometarios : [
        {autor : 'a',  mensagem : 'b'},
        {autor : 'a',  mensagem : 'b'}
    ],
    estaAoVivo : true
}

console.log(postagem);