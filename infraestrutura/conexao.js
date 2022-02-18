const mysql = require ('mysql')
const conexao = mysql.createConnection({
    host: 'localhost', 
    port: 3306, 
    user: 'admin', 
    password: 'Admin!23',
    database: 'agenda-petshop'
})

module.exports = conexao