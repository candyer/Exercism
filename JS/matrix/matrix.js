export class Matrix {
	constructor(matrix) {
		this.rows = []
		this.columns = []

	let grid = matrix.split('\n')

	for (let i=0; i< grid.length; i++){
		let row = grid[i].split(' ').map((num) => {return parseInt(num)})
		this.rows.push(row)
	}

	for (let r=0 ; r < this.rows.length; r++){
		for (let c=0 ; c < this.rows[r].length; c++){
			if (this.columns[c] == undefined) {
				this.columns[c] = []
			}
			this.columns[c][r] = this.rows[r][c]
		}
	}
	
}
}