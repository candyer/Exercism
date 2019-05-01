export function transform(d){
	let dict = {}
	Object.keys(d).forEach((key) => {
		d[key].forEach((val) =>{
			dict[val.toLowerCase()] = parseInt(key)
		})
	})
	return dict
}