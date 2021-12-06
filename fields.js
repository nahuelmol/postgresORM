var charField = (name, length) => {
	var entire = `${name} VARCHAR(${length})`

	return entire
}

var integerField = (name) => {
	var entire  = `${name} int`
	return entire
}

var booleanField = (name) => {
	var entire = `${name} bool default ${false}`
	return entire
}

var idField = name => {
	var entire = `${name} int`
	return entire
}

var textField = name => {
	var entire = `${name} VARCHAR(255)`
	return entire
}

var floatField = name => {
	var entire = `${name} float`
	return entire
}

module.exports = {
	charField,
	idField,
	textField,
	floatField
}