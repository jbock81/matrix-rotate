// var matrix = [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ], [ 9, 10, 11, 12 ], [13, 14, 15, 16] ];
var matrix = [];
var dm = 6;
for (var x=0; x<dm; x++){
    var mm = [];
    for (var y=0; y<dm; y++){
        mm.push(x*dm + y);
    }
    matrix.push(mm);
}
var calcs = 0;
function rotateMatrix(matrix) {
	//boundery indication for row and column (index)
	let maxRow = matrix.length - 1;
	let maxCol = matrix.length - 1;
	let row = 0;
	let col = 0;

	//keeps track of ring which we are working with
	while (row < maxRow && col < maxCol) {
		// initial temp starting with 4 being the numb. moving clockwise
		let previous = matrix[row + 1][col];

		//loop through TOP ROW (row 0 ) moving 1 spot
		for (let i = col; i <= maxCol; i++) {
			let current = matrix[row][i]; //current makes space for previous starting w/1
			matrix[row][i] = previous; // putting final num in new spot starting w/4 putting in slot 1
			previous = current; //leaving the loop with previous = 3
		}
		row++; //moves to row index 1

		//starting in row index 1 loop through RIGHT most COLUMN (col 2) moving 1 spot down
		for (let j = row; j <= maxRow; j++) {
			let current = matrix[j][maxCol]; //current makes space for previous starting w/6
			matrix[j][maxCol] = previous; //starting with 3 moving in slot 6
			previous = current; //leaving the loop with previous = 9
		}
		maxCol--; //changes maxCol to index 1

		//loop through the BOTTOM ROW (row 2) moving 1 spot left
		for (let j = maxCol; j >= col; j--) {
			//starting in col index 1 decrementing down to col 0
			let current = matrix[maxRow][j]; //current makes space for previous starting w/8
			matrix[maxRow][j] = previous; //starting with 9 moving in slot 8
			previous = current; //leaving the loop with previous = 7
		}
		maxRow--; //changes maxRow to index 1

		//loop through the LEFT COLUMN (col 0) moving 1 spot up

		for (let i = maxRow; i >= row; i--) {
			//starting in row index 1 decrementing down to row 0
			let current = matrix[i][col]; //current makes space for previous starting w/4
			matrix[i][col] = previous; //starting with 7 moving in slot 4
			previous = current; //leaving the loop with previous = 4
		}
        col++;
	}
}

///////

console.log(matrix.map(x=>x.join()));
for (var cl=0; cl<dm*dm; cl++){
    console.log(calcs);
    rotateMatrix(matrix);
    console.log(matrix.map(x=>x.join()));
}
