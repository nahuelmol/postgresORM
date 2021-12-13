const insertregs = _ => {
    var ins = `INSERT ON users_table
                ("Silvio Molina", 23, true);`
    return true
}

const existsTrigger = _ => {
    var look = `trigger_name`
    return true
}

const existsFunc = _ => {
    var look = `func_name`
    return true
}

module.exports = {
    insertregs,
    existsTrigger,
    exustsFunc
}
