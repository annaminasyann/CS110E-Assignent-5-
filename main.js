const utils = require('./utils');

let text = "  hello world";
let mat1 = [ [1, 4, 1],
             [2, 1, 1],
             [2, 5, 1]]

let mat2 = [[3, 2, 1],
            [1, 2 ,4],
            [2, 4, 3]]

let matrix1 = [[1, 4, 1],
               [2, 1, 1],
               [2, 5, 1,]]

let matrix2 = [[3, 2, 1],
               [1, 2 ,4],
               [2, 4, 3]]

let mat = [[2, 4, 6],
           [5, 2, 3],
           [4, 6, 1]]

console.log(utils.matrixProduct(mat1, mat2));
console.log(utils.sumofMatrices(matrix1, matrix2));
console.log(utils.sumofEachRow(mat));
console.log(utils.countWords(text));
