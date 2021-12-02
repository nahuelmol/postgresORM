class SQLerrors extends Error {
	constructor(name, description){
		this.name
		this.description
	}
}

class SQLoptionUnavailable extends SQLerrors {
	constructor(name,
		description='this statement is not available for SQL management'){
		super(name,description)
	}
}