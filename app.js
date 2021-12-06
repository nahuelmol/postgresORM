const { ModelTable } = require('./index')

class Users extends ModelTable {
	constructor(){
		super()

		this.nameTable = 'users_table'
		this.charField 	= charField('name', 20)
		this.idField	= idField('user_id')
		this.floatField = floatField('weight')
		this.textField  = textField('detail')
		this.booleanField = booleanField('is_admin')
		this.age = integerField('age')
	}

}

class Dogs extends ModelTable {
	constructor(){
		super()

		this.nameTable = 'dogs_table'
		this.charField = charField('names',20)
		this.age = integerField('age')
	}
}

Scanner([new Dogs, new Users])

