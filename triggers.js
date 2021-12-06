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

const CheckChanges = table => {

	var order = `SELECT * FROM ${table.name}`
	var arr = Object.keys(this)

	var i = 0
	arr.forEach(each => {
		if(!order.includes(each)){
			return `${each} column does not exists in old table, is new`
		}

		return `without changes in ${table.name}`
	})

}

const Scanner = (tables) => {
	tables.forEach(tbl => {
		var name = tbl.name

		let callback = res => {
			if(res){
				console.log('exists')
				CheckChanges(tbl)
			}
		}

		CheckExistence(name,callback)
		
	})
}

module.exports = {
	newAdminNoticeTrigger,
	Scanner
}