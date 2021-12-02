const {
	SQLoptionUnavailable
} = require('./utils/errors')

var ACTIONS_ENABLES = ['create','delete']

const build = (obj,act,call) => {
	
	var arr = Object.values(obj)
	var opt = act.split(' ')

	try {
		if(ACTIONS_ENABLES.includes(opt[0])){
			switch(opt[0]){
				case 'create':
					var sentence = `CREATE TABLE ${opt[1]}`
					break;
				case 'delete':
					var sentence = `DELETE TABLE ${opt[1]}`
					break;
			}
		}else {
			throw new SQLoptionUnavailable('unavailable sql statement')
		}
	}catch(err){
		console.log(err.name)
	}
	
	sentence = sentence + '(\n'

	arr.forEach(each => {
		sentence = sentence +'\t'+ each + ',\n'
	})

	sentence = sentence + ')'

	call(sentence)
}

module.exports = {
	build
}