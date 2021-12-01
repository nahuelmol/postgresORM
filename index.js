const {
	charField,
	idField
} = require('./fields')

const {
	build
} = require('./builder')

function fModel(){
	this.charField 	= charField('name', 20)
	this.idField	= idField(1)

	callback(build(this))
}

class UserTable {
	constructor(){
		this.charField 	= charField('name', 20)
		this.idField	= idField(1)

	}

	createTable(build){
		console.log(build(this, 'create user_table'))
	}
}

if(module.parent == null){
	var model = new UserTable()
	model.createTable(build)
}