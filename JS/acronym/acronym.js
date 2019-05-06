export function parse(phrase){
	let res = []
	let array = phrase.replace(/-|_/g, ' ').split(' ')
	array.forEach(word => {
		if (word){
			res.push(word[0].toUpperCase())
		}	
	})
	return res.join('')
}
