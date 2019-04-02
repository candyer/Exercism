
export function isPangram(s) {
	let d = {}
	for (let i = 0; i < s.length; i++){
		let c = s[i].toLowerCase()
		if (97 <= c.charCodeAt(0) && c.charCodeAt(0) <= 122){
			d[c] = (d[c] || 0) + 1
		}	
	}
	delete d[' ']
	return Object.keys(d).length == 26
}