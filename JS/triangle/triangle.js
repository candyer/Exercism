export class Triangle{
	constructor(a, b, c){
		if (a <= 0 || b <= 0 || c <= 0){
			this.res = 'illegal'
		} else if (a + b < c || a + c < b || b + c < a){
			this.res = 'illegal'
		} else if (a === b && b === c){
			this.res = 'equilateral'
		} else if (a === b || b === c || a === c){
			this.res = 'isosceles'
		} else {
			this.res = 'scalene'
		}
	}
	kind() {
		if (this.res === 'illegal'){
			throw new Error(this.res)
		}
		return this.res
	}
}