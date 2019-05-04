
export class Words {
	count(s){
		let array = s.toLowerCase().match(/\S+/g); //\S - not whitespace
		let d = {}
		array.forEach((word) =>{
			if (d.hasOwnProperty(word)) {
				d[word] += 1
			} else {
				d[word] = 1
			}
		})
		return d
	}
}