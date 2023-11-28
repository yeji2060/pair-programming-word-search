const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))

    for (l of horizontalJoin) {
        if (l.includes(word)) return true;
    }

    const verticalJoin = transpose(letters).map(ls => ls.join(''));

    for (l of verticalJoin) {
        if (l.includes(word)) return true;
    }
    return false;
}


const transpose = function (matrix) {
  
    let row_num =  matrix.length;
    let col_num = matrix[0].length;
    let newMatrix = [];
  
    for (let col = 0; col < col_num; col ++) {
      const transpArr = [];
      for (let row = 0; row < row_num; row ++) {
        transpArr.push(matrix[row][col]); 
      }
      newMatrix.push(transpArr);
    }
    
    matrix = newMatrix;
    return matrix;
  };


module.exports = wordSearch