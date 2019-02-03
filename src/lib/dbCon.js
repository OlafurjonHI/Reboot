const config = {
    user: 'oj',
    password: 'MyPassword123'
    server: 'serverreboot.mysql.database.azure.com', // You can use 'localhost\\instance' to connect to named instance
    database: 'mysql',
 
    options: {
        encrypt: true // Use this if you're on Windows Azure
    }
}

const sql = require('mssql')
 
(async function () {
    try {
        let pool = await sql.connect(config)
        let result1 = await pool.request()
            .input('input_parameter', sql.Int, value)
            .query('select * from mytable where id = @input_parameter')
            
        console.dir(result1)
    
        // Stored procedure
        
        let result2 = await pool.request()
            .input('input_parameter', sql.Int, value)
            .output('output_parameter', sql.VarChar(50))
            .execute('procedure_name')
        
        console.dir(result2)
    } catch (err) {
        // ... error checks
    }
})()
 
sql.on('error', err => {
    // ... error handler
})