//Declarando matriz vazia
let minha_matriz = [[],[]]

let minha_matriz2= []

//Declarando e inicializando a matriz
let minha_matriz3=[[1,2],[3,4],[5,6]] //3x2 -- numeros inteiros;

console.log(minha_matriz3)

//Matriz mista
let obj = {"nome": "Diego", "idade": 30}
let matriz_mista = ["Sabrina","20",[1,10.5],[true,false],[null,obj]]

console.log(matriz_mista) // Em Javascript conseguimos fazer matrizes e vetores mistos, 
                         //em Java é impossivel, pois precisamos determinar o seu tipo.

//Acessando valores
console.log(minha_matriz3[2][1]) //1- [] é a linha 2- [] é a coluna

//Acessando mai d euma matriz dentro do console.log
console.log(minha_matriz3[2][1]+""+minha_matriz3[2][0])

//Matriz com quantidade de colunas diferentes
minha_matriz_tam_diff = [[1],[2,3,4,5,6],[7,8,9,10,11],[12,13],[14]]
console.log(minha_matriz_tam_diff)

//Verificar o tamanho da matriz
let qtd_linhas = minha_matriz_tam_diff.length
console.log(qtd_linhas)

let qtd_colunas = minha_matriz_tam_diff[1].length
console.log(qtd_colunas)

//Adicionando elementos na matriz, após a sua criação
let minha_matriz4 = [[1,2],[3,4]] //2x2

minha_matriz4.splice(2,0, [5]) //adicionando uma linha no meio da matriz
minha_matriz4.splice(3,0, [6,7,8]) //adicionando uma linha no fim da matriz
console.log(minha_matriz4)

minha_matriz4.push([9,10]) //Fim da matriz
console.log(minha_matriz4)

//Adicionando elementos para uma linha especifica
minha_matriz4[0].push(0) //[linha](elemento)
minha_matriz4[4].push(11)

//Removendo uma determinada linha da matriz 
minha_matriz_tam_diff.splice(0,0)

//Removendo a última linha da matriz
minha_matriz_tam_diff.pop()

//Removendo o último elemento da linha da matriz
minha_matriz4[0].pop()
console.log(minha_matriz4)

//Removendo o elemento de uma determinada linha da matriz
minha_matriz4[1].splice(1,1) //[linha](linha,elemento)
console.log(minha_matriz4)

//Interando uma matriz
//l=linha
for (let l=0; l < minha_matriz4.length; l++){
    for(let c=o; c < minha_matriz4.length; c++){
        console.log(minha_matriz4[1][c]+"")
    }
}
