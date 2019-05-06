export class Series {
	constructor(s){
		this.digits = s.split('').map(Number)
		this.len = this.digits.length
	}
	slices(n) {
		if (n > this.len){
			throw new Error('Slice size is too big.')
		} 
		let res = []
		for (let i=0; i< this.len - n + 1; i++){
			res.push(this.digits.slice(i, i + n))
		}
		return res
	}
}