var spawn = require('child_process').spawn,
    grep  = spawn('grep', ['ssh']);

grep.on('close', function (code, signal) {
  console.log('child process terminated due to receipt of signal ' + signal);
});

console.log('pid: ', grep.pid);

// send SIGHUP to process
grep.kill('SIGHUP');