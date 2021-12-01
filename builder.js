const build = obj => {
	var sentence = ''

	obj.forEach(each => {
		sentence = sentence + each
	})
	return sentence
}

module.exports = {
	build
}