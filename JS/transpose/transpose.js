export function transpose (matrix){
	let rows = matrix.length
	let cols = 0
	for (let i=0; i<rows; i++){
		cols = Math.max(cols, matrix[i].length)
	}

	let res = []
	for (let i=0; i<cols; i++){
		res.push(new Array(rows).fill(' '))
	}

	for (let i=0; i<rows; i++){

		for (let j=0; j<matrix[i].length; j++){
			console.log(matrix[i][j])
			res[j][i] = matrix[i][j]
		}
	}
	
	for (let i=0; i<cols; i++){
		res[i] = res[i].join('')
	}

    for(let i = cols - 1; i >= 0; i--) {
        if(!res[i].endsWith(" ")) {
            break
        }
        res[i] = res[i].trimEnd()
    }

	return res
}