var rots = 2;
var dm=6;
var x,y,k,m;
var xpos = [];
var ypos = [];

function getRingMatrix(matrix){
    var retmat = [];
    //boundery indication for row and column (index)
	let maxRow = matrix.length - 1;
	let maxCol = matrix.length - 1;
	let row = 0;
	let col = 0;

	//keeps track of ring which we are working with
	while (row < maxRow && col < maxCol) {
        var submat = [];
        var subx = [];
        var suby = [];
		//loop through TOP ROW (row 0 ) moving 1 spot
		for (let i = col; i <= maxCol; i++) {
			submat.push(matrix[row][i]);
            subx.push(row);
            suby.push(i);
		}
		row++; //moves to row index 1

		//starting in row index 1 loop through RIGHT most COLUMN (col 2) moving 1 spot down
		for (let j = row; j <= maxRow; j++) {
			submat.push(matrix[j][maxCol]);
            subx.push(j);
            suby.push(maxCol);
		}
		maxCol--; //changes maxCol to index 1

		//loop through the BOTTOM ROW (row 2) moving 1 spot left
		for (let j = maxCol; j >= col; j--) {
			submat.push(matrix[maxRow][j]);
            subx.push(maxRow);
            suby.push(j);
		}
		maxRow--; //changes maxRow to index 1

		//loop through the LEFT COLUMN (col 0) moving 1 spot up

		for (let i = maxRow; i >= row; i--) {
			submat.push(matrix[i][col]);
            subx.push(i);
            suby.push(col);
		}
        col++;
        retmat.push(submat);
        xpos.push(subx);
        ypos.push(suby);
	}
    return retmat;
}

function rotateMatrix(matrix, shifts) {
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
var retmatrix = [];
var ringmat = [];

for (y=0; y<dm; y++){
    var subm = [];
    for (x=0; x<dm; x++){
        subm.push(y*dm + x + 1);
    }
    matrix.push(subm);
    retmatrix.push(subm);
}
console.log(matrix);
ringmat = getRingMatrix(matrix);

for (k=0; k<ringmat.length; k++){
    rotateMatrix(ringmat[k], rots);
}

for (k=0; k<ringmat.length; k++){
    for (l=0; l<ringmat[k].length; l++){
        retmatrix[xpos[k][l]][ypos[k][l]] = ringmat[k][l];
    }
}
console.log(retmatrix);