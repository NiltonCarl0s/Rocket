// 1º Questão 
/*
Crie um algoritimo que transforme as notas do sistema númerico para sistema de notas
em caracteres tipo A B C.

* de 90 para cima -   A
* entre 80 - 89   -   B
* entre 70 - 79   -   C
* entre 60 - 69   -   D
* menor que 60    -   F
*/

/*
let nota = 5.9

if(nota >= 9 ) {
   console.log("A, vc é top!")
} else if(nota <= 8.9 && nota >= 8) {
   console.log("B, vc é bomzim!")
} else if(nota <= 7.9 && nota >= 7) {
   console.log("C, vamos estudar mais né!")
} else if(nota <= 6.9 && nota >= 6) {
   console.log("D, vc tá lascado!")
} else {
   console.log("F, oxe lascou se!")
}

function getNota(nota) {
   if(nota >= 9 ) {
      console.log("A, vc é top!")
   } else if(nota <= 8.9 && nota >= 8) {
      console.log("B, vc é bomzim!")
   } else if(nota <= 7.9 && nota >= 7) {
      console.log("C, vamos estudar mais né!")
   } else if(nota <= 6.9 && nota >= 6) {
      console.log("D, vc tá lascado!")
   } else {
      console.log("F, oxe lascou se!")
   }
   return nota 
}
console.log(getNota(1))
console.log(getNota(9.9))
console.log(getNota(7))
console.log(getNota(5))
console.log(getNota(6.5))
console.log(getNota(8.1))
console.log(getNota(10))
*/
// 2º questão não soube fazer!
/*Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo.*/
/*
let family = {
   receitas: [1212, 1350, 500.00, 1600],
   despesas: [48.50, 49.60, 50, 116, 50.45, 45, 100, 1000, 100, 95, 35]
}

function sum(array) {
   let total = 0;

   for(let value of array) {
      total += value
   }

   return total
}

function calculateBalance() {
   const calculateReceitas = sum(family.receitas)
   const calculateDespesas = sum(family.despesas)

   const total = calculateReceitas - calculateDespesas

   const itsOK = total >= 0

   let balanceText = "negativo"

   if (itsOK) {
       balanceText = "positivo"
   }
   console.log(`Seu saldo é ${balanceText}: ${total.toFixed(2)}R$`)
}

calculateBalance()*/

/* 

F = C * 9/5 + 32

*/
 /*// transformDegree("50f")
function transformDegree(degree) {
   const celsiusExists = degree.toUpperCase().includes("C")
   const fahrenheitExists = degree.toUpperCase().includes("F")

   // fluxo de erro
   if(!celsiusExists && !fahrenheitExists) {
      throw new Error("Grau não identificado")
   }

   // fluxo ideal, F -> C
   let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
   let formula = fahrenheit => (fahrenheit - 32) * 5/9
   let degreeSing = "C"

   // fluxo alternativo C ->
   if(celsiusExists) {
      updatedDegree = Number(degree.toUpperCase().replace("C", ""));
      formula = celsius => celsius * 9/5 + 32
      degreeSing = "F"
   }

   return formula(updatedDegree) + degreeSing
}

try {
    console.log(transformDegree("32c"))
    console.log(transformDegree("89.6f"))
    // transformDegree("50z")
} catch (error) {
      console.log(error)  
}*/



/*function countAuthors() {
    let authors = [];

    for(let category of booksByCategory) {
       for(let books of category.books) {
          if(authors.indexOf(book.author) == -1) {
             authors.push(book.author)
          }
       }
    }

    console.log("Total de autoroes: ", authors.length)
 }

 countAuthors();

 function booksOfAuthor(author) {
    let books = []; 

    for(let category of booksByCategory){
       for(let book of category.books) {
          if(book.author === author) {
             books.push(book.title)
          }
       }
    }

    console.log(`Livros do autor ${author}: ${books.join(", ")}`)
 }
 booksOfAuthor("Augusto Cury")*/


/* 
    Buscando e contando dados em Arrays 
 
    Baseado no Array de livros por categoria abaixo, faça os seguintes desafios 
 
        • Contar o número de categorias e o número de livros em cada categoria 
        • Contar o número de autores 
        • Mostrar livros do autor Auguto Cury 
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor. 
*/ 
 
const booksByCategory = [ 
    { 
        category: "Riqueza", 
        books: [ 
            { 
                title: "Os segredos da mente milionária", 
                author: "T. Harv Eker", 
            }, 
            { 
                title: "O homem mais rico da Babilônia", 
                author: "George S. Clason", 
            }, 
            { 
                title: "Pai rico, pai pobre", 
                author: "Robert T. Kiyosaki e Sharon L. Lechter", 
            }, 
        ], 
    }, 
    { 
        category: "Inteligência Emocional", 
        books: [ 
            { 
                title: "Você é Insubstituível", 
                author: "Augusto Cury", 
            }, 
            { 
                title: "Ansiedade – Como enfrentar o mal do século", 
                author: "Augusto Cury", 
            }, 
            { 
                title: "Os 7 hábitos das pessoas altamente eficazes", 
                author: "Stephen R. Covey", 
            }, 
        ], 
    }, 
 ]; 
  
 const totalCategories = booksByCategory.length // erro tava aqui, tava leght e não lenght 
  
 console.log(totalCategories); 
 for(let category of booksByCategory) { 
    console.log('Total de livros da categoria: ', category.books.length) // erro tava aqui tbm, o mesmo erro do de cima e o senhor tava entrando no objeto errado, era para estar no books 
    console.log(category.books.length) // mesmo erro de escrever errado 
 }