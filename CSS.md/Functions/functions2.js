// criar um aplicativo de frases motivacionais

// declaration - declaração da funcão
// function statement
function createPhrases() {
    console.log('Estudar é muito bom')
    console.log('Paciência e persistência')
    console.log('Revisão é a mãe do aprendizado')
    console.log('Deus nos permite coisa maravilhosas')
}
// executar a função
// rodar, chamar, invocar
// execute, run, call, invoke
createPhrases()
createPhrases()
createPhrases()
createPhrases()
createPhrases()

// function expression
// function anonymous

// parâmetros (parameters)
const sum = function(number1, number2){
    total = number1 + number2
    return total
}

sum(2, 3) // arguments - argumentos
sum(4, 9)
sum(15, 15)
sum(15, -5)

let number1 = 34
let number2 = 25

console.log(` o número 1 é ${number1}`)
console.log(` o número 2 é o ${number2}`)
console.log(` a soma é ${sum(number1, number2)}`)

// função é tipo um liquidificador

function fazerSuco(fruta1, fruta2){
    return 'suco de: ' + fruta1 + fruta2
}

const copo = fazerSuco('acerola,', ' goiaba')

console.log(copo)
/*let subject 

function createThink(subject){
    return subject
}
console.log(createThink (subject))
indefined*/

let subject  = 'create video'

function createThink(subject){
    subject = 'study'
    return subject
}

console.log(subject)
console.log(createThink (subject)
// function hoisting

sayMyName()

function sayMyName() {
    console.log('Nilton')
}

// arrow fuction () => {}
// é uma função tipo expresso

const sayMyName = (name) => {
    console.log(name)
}

sayMyName('Nilton')

// callback function

function sayMyName(name) {
    console.log('antes de executar a função callback')

    name()
    console.log('depois de executar a callback')
}

sayMyName(
    () => {
        console.log('estou em uma callback')
    }
)

/*  
   function() constructor

   * expressão 'new'
   * criar um novo objeto
   * this keyword
// atenção em function constructor usar sempre 
letra maiúscula ex:new Person, new String etc
*/

/*
function Person(name) {
    this.name = name
    this.walk = function(){
        return this.name + "está andando"
    }
}

const nilton = new Person('Nilton')
const carlos = new Person('Carlos')
console.log(nilton.walk())
console.log(carlos.walk())*/

let date = new Date('1945-05-01')
console.log(date)

/* 

  Prototype

  *  prototype-based language. JS é uma linguagem baseada em protótipos.
  *  prototype chain
  *  __proto__

  */

  /* 

  Type conversion (typecasting) vs Type coersion

  * Alteração de um tipo de dado para outro tipo de dado

  */

  console.log('4' + 5) // aqui ele está concatenando a string com o número
  console.log(Number('4') + 5) // aqui ele está alterando a string em número e somando
 
  // Manipulando Strings e número

// Transformar Strings em Números e Números em Strings

//let string = "45"
//console.log(Number(string))
//let number = 11
//console.log(String(number))
let number = 12
console.log(String(number))
let string = "1976"
console.log(Number(string))

// Manipulando Strings e Números

// Contar quantos caracteres tem uma palavra e quantos dígitos tem um número
/*let word = "Paralelepipedo"
console.log(word.length)
let number = 91256489649656465456
console.log(String(number).length)*/

// Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula

/*let number = 11.121976
console.log(number.toFixed(2).replace(".", ","))*/

// Transforme letras menúsculas em maiúsculas. Faça o contrário disso também.
/*
let word = "Programar é muito bacana!"
console.log(word.toUpperCase())
console.log(word.toLowerCase())
console.log(word.toUpperCase())
console.log(word.toLowerCase())

// Manipulando Strings e Arrays


/* Separe um texto que contem espaços, em um novo array onde. cada texto é uma posição do array.
Depois disso, transforme o array em um texto e onde eram espaços, coloque _
*/
/*
let phrase = "Que Jesus mim dê sua graça!"
let myArray = phrase.split("")
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore.toUpperCase())
let phrase = "Jesus mim dê a sua graça"
let myArray = phrase.split(" ")
let phraseWithUnderscore = myArray.join('_')
console.log(myArray)
console.log(phraseWithUnderscore.toLowerCase())
*/
// Manipulando Strings

// ".includes" Verifica se o texto contém a palavra determinada, JESUS.

/*
let phrase = "Eu quero viver o amor de JESUS!"

console.log(phrase.includes("JESUS"))
console.log(phrase.includes("amor"))
console.log(phrase.includes("?"))
console.log(phrase.includes("viver"))
*/
//  Manipulando Arrays

// Criar Array com costructor
/*
let myArray = ['a', 'b', 'c']
console.log(myArray)*/

/*
let myArray = new Array('a', 'b', 'c')
console.log(myArray)*/

//  Contar elementos de um array
// para acessar um elemento da função, usa-se os colchetes e dentro o número do elemento

/*
console.log(["a", {type: "array"}, function() { return "alo"}].length)
console.log(["a", {type: "array"}, function() { return 'alo'}][2]())*/

// Transformar uma cadeia de caracteres em elementos de um array

/*
let word = "manipulação"
console.log(Array.from(word))*/


let techs = ["html", "css", "js"]

// adicionar um item no fim do Array, mas só é visto no console.log(techs)
techs.push("nodejs")

// adicionar no começo do Array, mas só é visto no console.log(techs)
techs.unshift("sql")

// remover do fim
//techs.pop()

// remover do inicio
//techs.shift()

// pegar somente alguns elementos do array
//console.log(techs.slice(1, 3))

// remover 1 ou mais itens em qualquer posição do array
//techs.splice(1, 2)

// encontrar a posição de um elemento no array
let index = techs.indexOf('css')
techs.splice(index, 1)
console.log(techs)

/*
   Expressões e Operadores
    
    - Expressions 
    - Operators
       Binary
       Unary
       Ternary

*/
//exemplo Expressions
//let number; 
//let number = 1;

//exemplo Operators

/*Binary
let number = 1
console.log(number + 2)*/

//Unary
/*let number = 1;
//console.log(++number)
//console.log(--number)
console.log(typeof number)*/

/*Ternary
let number = 1
console.log(false ? 'alo' : 'nada')*/
/* 

   new

    * left-hand-side expression
    * criar um novo objeto
    
*/

//let nome = new String("Nilton")
//ome.surNome = "Carlos"
//let age = new Number(45)
//console.log(nome.surNome, age)
//let date = new Date("2022-03-23")
//console.log(date)

/*
   Operadores unários
    typeof
    delete
*/
/*const person = {
    nome: "Nilton",
    age: 45,
}
//exemplo de typeof
//console.log(typeof "Nilton")

//exemplo de delete
delete person.age
console.log(person)*/

// Operadores aritiméticos

// multiplicação
//console.log(5 * 5) R:25

//divisão
//console.log(25 / 5) R:5

//subtração
//console.log(25 - 5) R:20

//soma
//console.log(5 + 5) R:10

//resto da divisão
//let remainder
//remainder = 11 % 5
//console.log(remainder)

// incremento ++
/*let increment = 0
increment++
increment++
increment++
console.log(increment++)
console.log(++increment)
console.log(increment)*/

// decremento
/*let decrement = 0
decrement--
console.log(decrement--)*/

//exponencial **
//console.log(4 ** 4) R:256

// Grouping operator ()
//let total = 2 + 3 * 5 //R:17
//let total = (2 + 3) * 5 //R:25
let total = "Alo alo" + "voce"
 console.log(total)

 // Operadores de comparação

// Irá comparar valores e retornar um boolean como resposta a comparação
// == igual a

let one = 1
let two = 2
let five = 5
/*
console.log(two == 1)
console.log(one == 5)
console.log(five == 3)*/

// !=  diferente de 
/*
console.log(one != two)
console.log(one != 1)
console.log(one != "1")*/

// ===  estritamente igual a
//console.log(one === "1")
//console.log(one === 1)

// !== estritamente diferente de 
//console.log(two !== "2")
//console.log(two !== 2)

//  > Maior que 
console.log(one > two)

// >= Maior ou igual a
console.log(one >= 1)
console.log(two >= 1)

// < Menor que
console.log(one < two)

// <= Menor igual a
console.log(one <= two)
console.log(one <= 1)
console.log(one <= 0)

// Operadores de atribuição (Assignment)
let x 

// assignment
x = 1

// addition assignment
// x = x + 2
x += 2

// subtraction assignment
// x = x - 1
 x -= 1

// multiplication assignment
// x = x * 2
x *= 2

// division assignment
// x = x / 2
x /= 2

// remainder, exponetiation
x %= 2
// x **= 2

console.log(x)

// Operadores lógicos (logical operators)

// - 2 valores booleanos, quando verificados,
// resultará em verdadeiro ou falso

let pao = true
let queijo = false


// AND &&     as 2 variáveis tem de ser verdadeiras, pra ele ser true!
//console.log(pao && queijo)

// OR ||      uma das variáveis tem de ser verdadeira, pra ele ser true!
//console.log(pao || queijo)

// NOT !   é de negação, se a variável for verdadeiro, dará falso, e vice verça
console.log(!queijo)

//Operador condicional (Ternário)

// Dependendo da condição, nós recebemos valores diferentes

// Condição então valor 1 se não valor 2
// condition ? value1 : value2

// Exemplos
// Café da manhã top
/*
let pao =false
let queijo = true

const niceBreakfast = pao || queijo ? 'café top' : 'café ruim'

console.log(niceBreakfast)*/

// Maior de 18anos
let age = 18
const canDrive = age >= 18 ? "can drive" : "can't drive"
console.log(canDrive)
  
// Operador de String (String operator)

// comparison (comparação)
//console.log("a" == "a")

// concatenation (concatenação)
// retorna a união de duas Strings
let nil = "nil"
nil += "ton"
console.log(nil)

/* 
  FALSY
  Quando um valor é considerado false em contextos onde um booleano é obrigatório 
  ( condicionais e loops )

  false
  0
  -0
  ""
  null
  undefined
  NaN

 */
//console.log( true ? "verdadeiro" : "falso")

/*  
  TRUTHY
   Quando um valor é considerado true em contextos onde um booleano é 
   obrigatório ( condicionais e loops )
    
   true
   {}
   []
   1
   3.23
   "0"
   "false"
   -1
   Infinity
   -Infinity
*/   
console.log( -Infinity ? "verdadeiro" : "false")

/*  
Operator precedence
   Precedência de operadores


   * grouping                  ( )
   * negação e incremento      ! ++ --
   * multiplicação e divisão   * /
   * adição e subtração        + -
   * relacional                < <= > =>
   * igualdade                 == != === !==
   * AND                       &&
   * OR                        ||
   * condicional               ?:
   * assidnment (atribuição)   = += -= *=

*/   

// if ...else

let temperature = 36.9

if(temperature >= 38) {
   console.log("está com febre")
} else if(temperature < 37.9 && temperature >= 37 ) {
   console.log("está pré febril")
} else {
   console.log("está sem febre")
}

//  swith

let expression = "a"

switch (expression){
   case "a":
      //codigo
      console.log("a")
      break
   case "b":
      //codigo para expression b
      console.log("b")
      break
   default:
      console.log("default")
      break
}

function calculate(number1, operator, number2) {
   let result = 0;

   switch (operator) {
      case "+":
         result = number1 + number2
         break
      case "-":
         result = number1 - number2
         break
      case "*":
         result = number1 * number2
         break
      case "/":
         result = number1 / number2
         break
      default:
         console.log("não implementado")
         break
   }

   return result

}
 //console.log(calculate(5, "-", 5))

 // throw

function sayMyName(name = "") {
    if (name === "") {
       throw " Nome é obrigatório"
    }
    console.log("depois do erro")
 }
 
 
 // try...catch
 try {
    sayMyName()
 } catch(e) {
    console.log(e)
 }
 console.log("após a função de erro")

 //  Estrutura de repetição
// for
// break - para a execução do loop
// continue - pula a execução do momento

for(let i = 0; i < 10; i++) {
    console.log(i)
 }
 
 /*for(let i = 100; i > 0; i--) {
    if(i === 50) {
        break;
    }
 
    console.log(i)
 }*/
 
 
 /*for(let i = 10; i > 0; i--) {
    if(i === 5) {
       continue;
    }
 
    console.log(i)
 }*/

 // Estrutura de repetição
// while

/*
let i = 0;

while(i > 10) {
   console.log(i)
   i ++;
}*/

// for...of

/*
let name = "Cilton"
let names = ["Nilton", "Carlos", "de", "Lucena"]
for(let char of names) {
   console.log(char)
}*/

//for...in

let person = {
    name: "Nilton",
    age: 45,
    weight: 88.6
 }
 for(let property in person) {
    console.log(property)
    console.log(person[property])
 }