var csv = require('csv');
fs = require('fs');
fs.readFile('server/data/yahoo week 8 rb - Sheet1.csv', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
  csv.parse(data, function(err, result) {
    console.log(result);
  })
});

