const csv = require('csvtojson');
const csv2 = require('csvjson');
const csvFile = './controllers/measuresData.csv';
var fs = require('fs');



export const test = (req, res, next) => {

  let data = { CIS: {}, AIM: {}, HPL: {}, HSU: {}, ESP: {}, MPL: {}, HFL: {}, Casualty: {}, }

  csv()
    .fromFile(csvFile)
    .on('csv',(csvRow)=>{

      switch (csvRow[0]) {
        case 'CIS':
          data.CIS[csvRow[1]] = [csvRow[2], csvRow[3]];
          break;
        case 'Aviation':
          data.AIM[csvRow[1]] = [csvRow[2], csvRow[3]];
          break;
        case 'Casualty':
          data.Casualty[csvRow[1]] = [csvRow[2], csvRow[3]];
          break;
        case 'E&S Property':
          data.ESP[csvRow[1]] = [csvRow[2], csvRow[3]];
          break;
        case 'Financial Lines':
          data.HFL[csvRow[1]] = [csvRow[2], csvRow[3]];
          break;
        case 'Medical Professional Liability':
          data.MPL[csvRow[1]] = [csvRow[2], csvRow[3]];
          break;
        case 'Specialty Personal Lines':
          data.HSU[csvRow[1]] = [csvRow[2], csvRow[3]];
          break;
      }
    })
    .on('done',(error)=>{
        console.log(data)
    })



  res.sendStatus(200);

}
