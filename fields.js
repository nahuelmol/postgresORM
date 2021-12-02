var charField = (name, length) => {
	var entire = `(${name} VARCHAR(${length}))`

	return entire
}

var idField = name => {
	var entire = `(${name} int)`
	return entire
}

var textField = name => {
	var entire = `(${name} text)`
	return entire
}

var floatField = name => {
	var entire = `(${name} float)`
	return entire
}

module.exports = {
	charField,
	idField,
	textField,
	floatField
}