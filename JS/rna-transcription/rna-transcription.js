

export function toRna(nucleotides) {
	const dna = {'G': 'C', 'C': 'G', 'T': 'A', 'A': 'U', '': ''}
	let res = []
	for (let i = 0; i < nucleotides.length; i++){
		res.push(dna[nucleotides[i]])
	}
	return res.join('')
}

