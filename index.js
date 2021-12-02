const {
	charField,
	idField, 
	floatField,
	textField
} = require('./fields')

const {
	build
} = require('./builder')

const client = require('./dbconn')

class UserTable {
	constructor(){
		this.charField 	= charField('name', 20)
		this.idField	= idField('user_id')
		this.floatField = floatField('weight')
		this.textField  = textField('detail')

	}

	createTable(build){

		var callback = res => {
			client.query(res,(err, res) => {
  				if(err){
  					console.log('callback error: ',err)
  				}
  				client.end()
			})
		}

		console.log(build(this, 'create user_table',callback))
	}

	deleteTable(build){

		var callback = res => {
			client.query(res, (err, res) => {
				client.end()
			})
		}

		console.log(build(this, 'delete user_table',callback))
	}
}

(function(){
	client.connect()

	var call = (err,res) => {
		var fields = []
		if(err){
			console.log('err: ',err)

			var model = new UserTable()
			model.createTable(build)
		}else{
			res.fields.forEach(each => {
				fields.push(each.name)
			})

			console.log('user_table already exists: ', fields); 
			client.end() 
		}
	}

	client.query("SELECT * FROM user_table;", call)
})()
