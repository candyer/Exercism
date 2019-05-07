export class HighScores {
	constructor(scores){
		this.scores = scores
		let array = scores.slice(0)
		this.latest = array.slice(-1)[0]
		array.sort(function(a, b){return a - b})
		this.personalBest = array.slice(-1)[0]
		this.personalTopThree = array.slice(-3).reverse()
	}

}