const {
	charField,
	idField, 
	floatField,
	textField
} = require('./fields')

const {
	build
} = require('./builder')

require('./dbconn')

class UserTable {
	constructor(){
		this.charField 	= charField('name', 20)
		this.idField	= idField('user_id')
		this.floatField = floatField('weight')
		this.textField  = textField('detail')

	}

	createTable(build){
		conn()

		var callback = res => {
			client.query(res, ['Hello world!'], (err, res) => {
  				console.log(err ? err.stack : res.rows[0].message)
  				client.end()
			})
		}

		console.log(build(this, 'create user_table', callback))
	}

	deleteTable(build){
		conn()

		console.log(build(this, 'delete user_table'))
	}
}

if(module.parent == null){
	var model = new UserTable()
	model.createTable(build)
}