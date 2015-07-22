#!/usr/bin/env node
var fs = require('fs');

if(process.argv.length > 2){
  for(var i = 2; i<process.argv.length; i++){
    console.log();
    process.argv[i].split('').forEach(function(letter, i){
      switch(letter.toUpperCase()){
        case 'A':
        case 'E':
        case 'F':
        case 'H':
        case 'I':
        case 'L':
        case 'M':
        case 'N':
        case 'O':
        case 'R':
        case 'S':
        case 'X':
          var article = 'an ';
          break;
        default:
          var article = 'a  ';
      }
      if(i===0){
        letter = letter.toUpperCase();
      }else{
        letter = letter.toLowerCase();
      }
      console.log('Give me ' + article + letter+'!');
    })
  }
}else{
  var message = fs.readFileSync('./lib/help.txt', {encoding: 'utf8'});
  console.log(message);
}

//comment

