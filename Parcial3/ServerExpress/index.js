const serverexpress = require('express');
//const cors = require('cors');
const app = serverexpress();
//const mysql2 = require('mysql2')
//app.use(cors());

// create the connection to database
//es para la conexion con la base de datos
//const connection = mysql.createConnection({
  //  host: 'localhost',
    //user: 'root',
    //database: 'test'
  //});

  //app.get('/usuarios',(req,res)=>{
    // simple query
   // connection.query(
    //'SELECT * FROM cusuario',
    //function(err, results, fields) {
      //console.log(results); // results contains rows returned by server
      //console.log(fields); // fields contains extra meta data about results, if available
   // }

   
    //);
    //console.log(results)
    //res.json(resquest)
   // })

app.get('/', (req, res)=>{

    console.log(res.query)
    res.json({mensaje:"Server Express respondiendo a get"});
});

app.post('/', (req,res)=>{

    res.json({mensaje:"Server Express respondiendo a post"});
});

app.delete('/', (req,res)=>{

    res.json({mensaje:"Server Express respondiendo a delete"});
});

app.listen(8082, (req,res)=>{

    console.log("Servidor Express en puerto 8082");
});