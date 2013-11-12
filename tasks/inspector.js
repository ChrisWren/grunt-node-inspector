/*
 * grunt-inspector
 * https://github.com/ChrisWren/grunt-inspector
 *
 * Copyright (c) 2013 Chris Wren
 * Licensed under the MIT license.
 */
module.exports = function (grunt) {
  'use strict';

  grunt.registerMultiTask('node-inspector', 'Runs node-inspector to debug your node.js JavaScripts', function () {
    var options = this.options();
    var done = this.async();
    var ni = 'node-inspector';
    ni = require.resolve().split(ni) + ni + '/bin/inspector';
    var args = [ni];

    if (options['web-port']) {
      args.push('--web-port=' + options['web-port']);
    }

    if (options['web-host']) {
      args.push('--web-host=' + options['web-host']);
    }

    if (options['debug-port']) {
      args.push('--debug-port=' + options['debug-port']);
    }

    if (options['save-live-edit']) {
      args.push('--save-live-edit=' + options['save-live-edit']);
    }

    grunt.util.spawn({
      cmd: 'node',
      args: args,
      opts: {
        stdio: 'inherit'
      }
    },
    function (error) {
      if (error) {
        grunt.fail.fatal(error);
      }
      done();
    });
  });
};
