var charField = (name, length) => {
	var entire = `(${name} VARCHAR(${length}))`

	return entire
}

var idField = id => {
	var entire = `(${id} int)`
	return entire
}

module.exports = {
	charField,
	idField
}