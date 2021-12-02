const { Client } = require('pg')

const config = {
	port:5432,
	user:'postgres',
}

const client = new Client(config)

module.exports = client 
