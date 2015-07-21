var should = require("chai").should();
var cp = require('child_process');


describe('CLI', function(){
  it('should output the string it recieves', function(done){
    cp.execFile('./cheer.js', ['gREG', 'sCoTt' ], function(err, stdout) {
      console.log('err', err);
      console.log('stdout', stdout);
      stdout.should.equal('\nGive me a  G!\nGive me an r!\nGive me an e!\nGive me a  g!\n\nGive me an S!\nGive me a  c!\nGive me an o!\nGive me a  t!\nGive me a  t!\n');
      done();
    });
  });

  it('should display the help message when no arguments are passed', function(done){
    cp.execFile('./cheer.js', function(err, stdout){
      stdout.should.equal('\nUsage:\n\n  cheer.js John Smith\n\n');
      done();
    })
  })

});
