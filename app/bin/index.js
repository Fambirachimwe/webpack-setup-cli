#!/usr/bin/env node


const ncp = require('ncp').ncp;
const path = require('path');

 
// // ncp.limit = 16;

const source = path.resolve(__dirname, '../temp');
const destination = process.cwd();

ncp(source, destination, function (err) {
 if (err) {
   return console.error(err);
 }
 console.log('done!');
});

console.log(path.resolve(__dirname, '../temp'));