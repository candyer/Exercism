export function compute(dna1, dna2) {
	let m = dna1.length
	let n = dna2.length

	if (m != n){
		if (m > 0 && n > 0){
			throw new Error('left and right strands must be of equal length')
		} else if (n === 0) {
			throw new Error('right strand must not be empty')
		} else if ( m === 0){
			throw new Error('left strand must not be empty')
		}
	}

	let hammingDistance = 0
	for (let i=0; i < dna1.length; i++){
		if (dna1[i] !== dna2[i]){
			hammingDistance += 1
		}
	}
	return hammingDistance
}