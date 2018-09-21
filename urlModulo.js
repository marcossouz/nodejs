var url = require('url');

var adr = 'html://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, true);

console.log(q.host); //returs 'localhost:8080'
console.log(q.pathname); // returns '/default.htm'
console.log(q.search); //'?year=2017&month=february'

var qdata = q.query; //returns an object: {year: 2017, month: 'february' }
console.log(qdata.month) //returns 'february'
