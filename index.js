const {
	charField
} = require('./fields')

const {
	build
} = require('./builder')

function Model(){
	this.charField = charField('name', 20)

	return build(this)
}

if(module.parent = null){
	var model = Model()
}