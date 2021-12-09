const onResponse = (err,res) => {
	if(err){
		return err
	}

	console.log('res: ', res)
}

const Delete = (table, data, id) => {
	var sente = `DELETE FROM ${table} WHERE ${data.id} == ${id};`
	client.query(sente, onResponse)
	return
}

const Create = (table, data) => {
	if(typeof data == 'object'){
		var arr = Object.values(data)
		var columns = '('

		arr.forEach(each => {
			columns = `${columns} ${each}, `
		})

		columns = columns + ')'

		var sente = `INSERT INTO ${table} ${columns};`
	}
}

const Update = (table,data) => {
	var req_data = `SELECT * FROM ${table};`

	var data_arr = Object.values(data)
	var new_data = ''
	var old_cols = ''

	var i = 0

	var catcher = (err,res) => {
		if(err){
			console.log('data does not found')
			return
		}

		res.forEach(each => {
			old_cols.push(each)
		})

		data_arr.forEach(each => {
			new_data = new_data + old_cols[i] + each
			i++
		})

		var sente = `UPDATE ${table}
					SET column1 = ${data_arr[0]}, column2 = value2, ...
					WHERE condition; `
	}

	client.query(req_data, catcher)

}

module.exports = {
	Delete,
	Create,
	Update
}