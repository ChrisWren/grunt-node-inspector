module.exports = function (grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.initConfig({
    'node-inspector': {
      default: {},
      custom: {
        options: {
          host: 'localhost',
          port: 7878
        }
      }
    },
    mdlint: ['README.md'],
    jshint: {
      options: {
        bitwise: true,
        indent: 2,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        nonew: true,
        quotmark: 'single',
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        trailing: true,
        eqnull: true,
        node: true,
        expr: true,
        evil: true,
        globals: {
          describe: true,
          it: true,
          before: true
        }
      },
      files: {
        src:  ['*.js', 'tasks/*.js']
      }
    }
  });

  grunt.registerTask('default', ['inspector']);
  grunt.registerTask('test', ['jshint', 'mdlint']);

  grunt.loadTasks('tasks');

};
