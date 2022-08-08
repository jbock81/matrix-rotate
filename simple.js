const rotateMatrix = function(matrix, shifts) {

    // reverse helper function
    function reverse(arr, start, end) {
      while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
      }
    }
  
    shifts %= matrix.length;
  
    reverse(matrix, 0, (matrix.length - 1));
    reverse(matrix, 0, (shifts - 1));
    reverse(matrix, shifts, (matrix.length - 1));
  
    return matrix;
}

var matrix = [];
for (var i=0; i<100; i++){
    matrix.push(i+1);
}
console.log(rotateMatrix(matrix, 50));