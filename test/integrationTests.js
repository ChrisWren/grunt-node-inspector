/*jshint expr: true*/

var spawn = require('child_process').spawn;
var logOutput = '';
require('should');

function runInspector(target, done) {

  var inspectorProcess = spawn('grunt', ['node-inspector:' + target]);

  inspectorProcess.stdout.setEncoding('utf8');
  inspectorProcess.stdout.on('data', function (data) {
    logOutput += data;
    if (data.match(/debugging/)) {
      inspectorProcess.kill();
      done();
    }
  });
}

describe('grunt-node-inspector', function () {

  describe('when run', function() {

    before(function (done) {
      runInspector('custom', done);
    });

    it('should log that the server started', function () {
      logOutput.should.include('Visit http://localhost:1337/debug?port=5857 to start debugging.');
    });

  });

});