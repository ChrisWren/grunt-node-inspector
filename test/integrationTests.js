/*jshint node: true, expr: true*/
/*global describe, before, it*/
var spawn = process.platform === 'win32' ? require('win-spawn') : require('child_process').spawn;
var logOutput = '';
require('should');

function runInspector(target, done) {
  'use strict';
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
  'use strict';

  describe('when run', function () {

    before(function (done) {
      runInspector('custom', done);
    });

    it('should log that the server started', function () {
      logOutput.should.containEql(
        'Visit http://localhost:1337/debug?port=5857 to start debugging.'
      );
    });

  });

});
