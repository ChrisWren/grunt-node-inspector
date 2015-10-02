/*
 * grunt-inspector
 * https://github.com/ChrisWren/grunt-inspector
 *
 * Copyright (c) 2013 Chris Wren
 * Licensed under the MIT license.
 */
/*jshint node: true*/

module.exports = function (grunt) {
  'use strict';
  var util = require('util');

  grunt.registerMultiTask('node-inspector', 'Runs node-inspector to debug your node.js JavaScripts', function () {
    var options = this.options();
    var done = this.async();
    var args = [require.resolve('node-inspector/bin/inspector')];
    var pushArg = function(option, val) {
      args.push('--' + option);
      args.push(val);
    };
    [
      'debug-port',
      'web-host',
      'web-port',
      'save-live-edit',
      'preload',
      'hidden',
      'stack-trace-limit',
      'ssl-key',
      'ssl-cert'
    ].forEach(function (option) {
      if(option in options) {
        if(util.isArray(options[option])) {
          options[option].forEach(function(val) {
            pushArg(option, val);
          });
        } else {
          pushArg(option, options[option]);
        }
      }
    });

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
