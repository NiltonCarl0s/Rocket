// Aqui eu tenho um comentário em linha

/* 
 Aqui eu tenho comentário multi linha ou em bloco

 o código abaixo escreve alguma mensagem no devtools

 */

console.log('Bem vindos ao Starter')
console.log('não iria ignorar')
console.log('Meu Deus, Permita-me com sua graça aprender a programar')
console.log('quero muito aprender a programar')
console.log('treinanndo muito e com a graça de Deus, chegarei lá')
console.log('vou mim empenhar muito nesse objetivo')
console.log('Jesus mim proteja nessa caminhada')
console.log('tenho que estudar muito, e mim empenhar o bastante')
console.log('Quanto tempo terei ainda de vida para mim dedicar')

/*
String

* Cadeia de caracteres 'ABC'

"" // aspas duplas
'' // aspas simples
`` // template literals ou template strings

*/
console.log(`Nilton ${10+1}`)/*Templates strings, e é uma interpolação
console.log(6-2)/*Template literals

/*
Number

* números

  inteiros ex: 10, -5, 20, -15
  reais - float ex: 5.5, 10.5, 8.5
  NaN - não número ex:
  Infinity - infinito
  */
  console.log(10, -5, 20, -15) /* numeros inteiros*/
  console.log(5.5, 10.5, 8.5) /* numeros reais ou float*/
  console.log(5.5 / "asdf")/* dividir um número por uma string, vai dar NaN

  /* 
  Boolean

  * somente 2 valores
        
     true // verdadeiro
     false // falso

     */

     /*
 
* undefined
   *indefinido é algo que reamente não vai existir

 * null
   * nulo é algo que existe e não tem algo dentro dele
   * objeto que não possui nada dentro
   * diferente de indefinido  
   * 
/*

  * Object
     * objeto cria uma estrutura, é um dado estrutural
     * propriedades / Atributos ex: cor, tamanho, peso de um cel, tudo isso é propriedades
     * Funcionalidades / Métodos
     
*/
console.log({
  name: "Nilton",
  idade: 45,
  andar: function() {
    console.log('andar')
  }
})

/* 
 
 * Array (Vetores)
     * Uma Lista
     * Agrupamento de dado
     
["Nilton, 45"]

*/
/*console.log([
  "leite",
  "ovos",
  2,
  3,
])

# Tipos de Dados

Conforme o ECMAScript standard temos 9 tipos de dados:

* Data types 
   * Primitives / Primitives value
   * Structural
   * structural Primitive

## Primitivos


* String
* Number
* Boolean
* undefined
* Symbol
* BigInt

## Estruturais

* Object
   
  * Array
  * Map
  * Set
  * Date
  * ...
* Function 

## Primitivo Estrutural / structural Root Primitive

* null
*/

/*# Variáveis

* Nomes simbólicos para receber algum valor 
* Atalhos de código
* Identificadores
* 3 palavras reservadas para criar uma variável 
  * var 
  * let
  * const */

/* var
var clima = "frio"
clima = "Frio"

console.log(clima)
*/

/* let
let clima = "Quente"
clima = "Frio"

console.log(clima)*/

const clima = "Quente"
clima = 

 console.log(clima)

 // var é global e, também local

//var x = 0

console.log('> existe x antes do bloco? ', x)

{
    var x = 0
}

// console.log('> existe x depois do bloco? ', x)

// Variáveis e tipos de dados.
// declaração or declaration
var nome 

// assignment or atribuição de valores
nome = "Nilton"

/* usamos typeof para saber-mos que tipo de dado foi colocado na variável
console.log(typeof name)*/

//agrupamentos de declarações
let age, isHuman

nome = "Fiboi"
age = 75
isHuman = true  

//multiplos argumentos na função
//console.log(name, age, isHuman) 

/*escrita de texto + variáveis
concatenando os valores*/

//console.log(' o ' + nome + ' tem ' + age + ' anos. ')
console.log('A ' + nome + ' tem ' + age +  ' anos.')
console.log('A ' + nome + ' tem ' + age +  ' anos.')
console.log('O ' + nome + ' tem ' + age +  ' anos.')

// interpolando valores com template literals or template strings
//console.log(` o ${nome} tem ${age} anos.`)
console.log(` A ${nome} tem ${age} anos.`)
console.log(` A ${nome} tem ${age} anos.`)
console.log(` O ${nome} tem ${age} anos.`)

//object

const person = {
  nome: 'Nilton',
  age: 45,
  weight: 88.6,
  isAdmin: true
}
// para chamar só 1 object ou mais. usa-se person.+ o object a ser chamado!
console.log(`${person.nome} tem ${person.age} e ${person.weight}`)

//Array

const animals = [
  'Lion',
  'Monkey',
  'Cat'
]

// Como acessar valores dentro do Array
console.log(animals [0])


exercicios

// 1º questão: 
//let weight

// 2º questão: 
//console.log(typeof weight)
//undefined

/* 3º questão:
let nome = 'Nilton'
let age = 45
let stars = 5.5
let isSubscribed = true
console.log(` O ${nome} tem ${age} e ${stars} e ${isSubscribed}`)*/

/* 4º A questão:
let student = {};
console.log(typeof student)
object*/

/* 4º B questão:
let student = {
     nome: 'Nilton',
     age: 45,
     stars: 5.5,
     isSubscribed: true,
};
//console.log(student)*/

/* 4º C questão:
let students = {
    nome: 'Nilton',
    age: 45,
    weight: 86,
};
console.log(` O ${student.nome} tem ${student.age} anos e peso ${student.weight}kg.`)*/

// 5º questão:
//let students = []

/* 6º questão:
//students = [
    student
]
//console.log(students)*/

// 6º questão
//console.log(students[0])

/* 7º questão
const carlos = {
    nome: 'carlos',
    age: 25,
    weight: 86.8,
    isSubscribed: true,
}

//8º questão
students = [
    student,
    carlos
]
console.log(students)*/

/* 9º questão
console.log(a)
var a = 1*/


/* 1º questão:
let students*/

/* 2º questão: undefined
console.log(typeof students)*/

/* 3º questão:
let nome = 'Carlos'
let age = 45
let weight = 87.3
let isSubscribed = true*/

/* 4º A questão: object

let student = {}
console.log(typeof student)*/

// 4º B questão:
let student = {
  nome: 'Nilton',
  age: 45,
  weight: 87.3,
  isSubscribed: true,
};
/*console.log(` Eu sou ${student.nome}, tenho ${student.age} anos,
peso ${student.weight}kg, e sou ${student.isSubscribed}`)*/

/* 5º questão:
let students[]
let students[]
let students[]
let students[]
let students[]
let students[]
let students = []*/

/* 6º questão:
let students = [
  student
]
console.log(students)*/

/* 7º questão:
console.log(students [0])*/

/* 8º questão:
const carlos = {
  nome: 'Carlos',
  age: 40,
  weight: 70.5,
  isSubscribed: true 
}
students = [
  student,
  carlos
]

console.log(students)*/

// 9º questão:
console.log(a)
var a = 1


  