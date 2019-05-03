export function convert(n) {
	let res = []
	if ( n % 3 === 0){
		res.push('Pling')
	}
	if ( n % 5 === 0){
		res.push('Plang')
	}
	if ( n % 7 === 0){
		res.push('Plong')
	}
	if (res.length === 0) {
		return n.toString()
	} else {
		return res.join('')
	}
}