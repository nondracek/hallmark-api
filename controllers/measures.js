import moment from 'moment';
var mssql = require('mssql');

const config1 = {
  server: "Hpl-Dsql2\\HPLDsql2",
  user: "NOndracek",
  password: "Hallmark17",
  database: "Mobile_App",
};



export const sqlConnectData = (callback) => {

  var conn = new mssql.ConnectionPool(config1);
  var req = new mssql.Request(conn);

  conn.connect((err) => {
    if (err) {
      console.log(err);
      return;
    }

    req.query('SELECT * FROM measureData', (err, result) => {
      if (err) {
        console.log(err);
      }
      else {
        callback(result.recordset);
      }
      conn.close()
    })
  });
}

export const sqlConnectPins = (callback) => {

  var conn = new mssql.ConnectionPool(config1);
  var req = new mssql.Request(conn);

  conn.connect((err) => {
    if (err) {
      console.log(err);
      return;
    }

    req.query('SELECT * FROM Users', (err, result) => {
      if (err) {
        console.log(err);
      }
      else {
        callback(result.recordset);
      }
      conn.close()
    })
  });

}





  // con.Request().query('SELECT * FROM measureData', function (err, result) {
  //   if (err) throw err;
  //   console.log(result);
  //   callback(result)
  // });

export const pins = (req, res, next) => {
  sqlConnectPins((data) => {
    res.json({
      userData: data
    });
  });
}


export const getData = (req, res, next) => {

  sqlConnectData((data) => {
        res.json({
          measureTypes: data
        });
  });
}
