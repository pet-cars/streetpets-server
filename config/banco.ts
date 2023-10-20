const mysql = require("mysql")

const bdConexao = mysql.createConnection({
    user: "root",
    host: "localhost",
    port: "3306",
    database: "streetpets",
    password: ""
});

export default bdConexao;


