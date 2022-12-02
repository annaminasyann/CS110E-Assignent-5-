function matrixProduct(mat1, mat2) {
    let result = [];
    for (let i = 0; i < mat1.length; i++) {
        result[i] = [];
        for (let j = 0; j < mat2[0].length; j++) {
            let res = 0
            for (let k = 0; k < mat1[0].length; k++) {
                res += mat1[i][k] * mat2[k][j];
            }
            result[i][j] = res;
        }
    }
    return(result);
}
console.log(matrixProduct);


function sumofMatrices(matrix1, matrix2){
    let result2 = [];
    for(let  i = 0; i < matrix1.length; i++) {
        result2[i] = [];
        for(let j = 0; j < matrix2[0].length; j++) {
            result2[i][j] = matrix1[i][j] + matrix2[i][j];
            }
            
        }
    return result2;
    } 
console.log(sumofMatrices);


function sumofEachRow(mat){
    let sumOfRows = [];
    for (let i = 0; i< mat.length; i++){
        sumOfRows[i] = [];
        let sum = 0
        for (let j = 0; j < mat[0].length; j++){
            sum = sum + mat[i][j];
        }
        sumOfRows[i] = sum;
    }
    return sumOfRows;
}
console.log(sumofEachRow)


function countWords(string){
    let count = 0;
    let word = false;
    for (let i=0; i<string.length; i++) {
        if (string[i]==" ") {
           if(word){
           count++; 
           word = false;
           } }
    else{
            word = true; }}
    if(word)
         count++; 
    return count;
}
console.log(countWords);


function trim(string){
    let space = " ";
    for (let i = 0; i < string.length; i++){
    if (string[i] === " "){
        space = string.substr(1, string.length - 1);
    }
 }
    return space;
    
}
console.log(trim);




module.exports = {
matrixProduct,
sumofMatrices,
sumofEachRow,
countWords,
trim
}
