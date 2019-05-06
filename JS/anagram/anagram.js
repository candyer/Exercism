export class Anagram {
	constructor(word) {
		this.word = word.toLowerCase()
		word = word.toLowerCase().split('').sort().join('')
		this.lowerCaseSortedWord = word
	}

	matches(words){
		let res = []
		for (let i=0; i<words.length; i++) {
			if (this.lowerCaseSortedWord === words[i].toLowerCase().split('').sort().join('') && this.word !== words[i].toLowerCase()){
				res.push(words[i])
			}
		}
		return res
	}
}
