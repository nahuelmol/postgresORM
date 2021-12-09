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

module.exports = {
	Delete,
	Create,
	Update
}