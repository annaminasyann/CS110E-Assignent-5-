function matrixProduct(mat1, mat2) {
    let result = [];
    for (let i = 0; i < mat1.length; i++) {
        result[i] = [];
        for (let j = 0; j < mat2[0].length; j++) {
            let res = 0
            for (let k = 0; k < mat1[i].length; k++) {
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
        for(let j = 0; j < matrix1.length; j++) {
            for (let k = 0; k < matrix1[i].length; k++){
                    result2[i][j] = matrix1[j][k] + matrix2[j][k];
            }
        }
    return result2;
    } 
}
console.log(sumofMatrices);


function sumofEachRow(mat){
    let sumOfRows = [];
    for (let i = 0; i< mat.length; i++){
        sumOfRows[i] = [];
        let sum = 0;
        for (let j = 0; j < mat[i].length; j++){
            sum = sum + mat[i][j];
        }
        sumOfRows[i] = sum;
    }
    return sumOfRows;
}
console.log(sumofEachRow)


function countWords(text){
    let count = 0;
    let word = false;
    for (let i=0; i<text.length; i++) {
        if (text[i]===" ") {
           if(word){
           count++; 
           word = false;
           }
    }
    else{
            word = true; 
        }
    }
    if  (word)
        count++; 
    return count;
}
console.log(countWords);





module.exports = {
matrixProduct,
sumofMatrices,
sumofEachRow,
countWords,
}
