const build = (obj,act) => {
	var arr = Object.values(obj)
	var opt = act.split(' ')

	if(opt[0] === 'create'){
		var sentence = `CREATE TABLE ${opt[1]}`
	}
	
	sentence = sentence + '(\n'

	arr.forEach(each => {
		sentence = sentence +'\t'+ each + ',\n'
	})

	sentence = sentence + ')'

	return sentence
	
}

module.exports = {
	build
}