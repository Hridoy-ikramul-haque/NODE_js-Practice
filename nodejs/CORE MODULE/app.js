var st = require('./student');
var path = require('path');

// var s1=st();

// console.log(s1.id);
// console.log(s1.name);
// console.log(s1.dept);
// console.log(s1.getName());

// var dir = 'E:\app.js';


// console.log(path.extname(dir));
// console.log(path.dirname(dir));
// console.log(path.normalize(dir));
// console.log(path.basename);

var fs = require('fs');

var data =  fs.readFileSync('hridoy.txt');
console.log(data.toString());
var write = fs.writeFileSync('hridoy.txt','akase batase urte cai');
console.log(write);




