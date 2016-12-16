var mysql = require('mysql');

var TEST_DATABASE = 'nodetest';
var TEST_TABLE = 'userinfo';

//创建连接
var client = mysql.createConnection({
  user: 'root',
  password: 'root',
});

client.connect();
client.query("use " + TEST_DATABASE);

client.query(
  'SELECT * FROM '+TEST_TABLE,
  function selectCb(err, results, fields) {
    if (err) {
      throw err;
    }

      if(results)
      {
          for(var i = 0; i < results.length; i++)
          {
              console.log(results[i].id,results[i].name,results[i].age,results[i].sex);
          }
      }
    client.end();
  }
);
