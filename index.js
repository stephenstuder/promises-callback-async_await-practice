let fs = require("fs");

fs.readFile("data.csv", "utf8", (err, data) => err ? console.log(err) : console.log(data));