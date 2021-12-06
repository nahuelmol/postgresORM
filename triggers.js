const newAdminNotice = (tablename) => {
	var trigger_name = tablename + '_trigger'
	var sente = `CREATE OR REPLACE TRIGGER ${trigger_name}
	BEFORE DELETE OR INSERT OR UPDATE ON ${tablename}
	WHEN (is_admin == 1)
	BEGIN 
		dbms_output.put_line('This is an admin')
	END;`
}

const indexes = (tablename) => {

}

const CheckExistence = (name,call) => {
	var sentence = `IF (EXISTS (SELECT * 
                 		FROM ${name}))
						BEGIN
    						--Do Stuff
						END;`

	var onRes = (err,res) => {
		if(err){
			call(false)
		}else{
			call(true)
		}
	}

	client.query(sentence, onRes)
}

const addColumns = cols => {
	cols.forEach(eachcol => {
		var onRes = (err,res) => {
			if(err){
				return console.log(err)
			}
			console.log(res)
		}

		client.query(eachcol, onRes)
	})
}

const CheckChanges = table => {

	var order = `SELECT * FROM ${table.name}`
	var arr = Object.values(this)
	var new_colums = []

	var i = 0
	arr.forEach(each => {
		only_name = each.split(' ')[]

		if(!order.includes(only_name)){
			console.log(`${only_name} column does not exists in old table, is new`)
			new_colums(each)

			addColumns()
		}

		return `without changes in ${table.name}`
	})

}

const Scanner = (tables) => {
	var table_states = []

	tables.forEach(tbl => {
		var name = tbl.name

		let callback = res => {
			var state = {
				table:tbl.name,
				namestate:''
			}

			if(res){
				state.namestate = 'exists'
				CheckChanges(tbl)
			}else{
				state.namestate = 'null'
			}

			table_states.push(state)
		}

		CheckExistence(name,callback)
		
	})
}

module.exports = {
	newAdminNoticeTrigger,
	Scanner
}