# grunt-node-inspector
> Run [node-inspector](https://github.com/node-inspector/node-inspector) as a grunt task for easy configuration and integration with the rest of your workflow

[![NPM version](https://badge.fury.io/js/grunt-node-inspector.png)](http://badge.fury.io/js/grunt-node-inspector) [![Dependency Status](https://gemnasium.com/ChrisWren/grunt-node-inspector.png)](https://gemnasium.com/ChrisWren/grunt-node-inspector)

## Getting Started
If you haven't used grunt before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a gruntfile as well as install and use grunt plugins. Once you're familiar with that process, install this plugin with this command:

```bash
npm install grunt-node-inspector --save-dev
```

Then add this line to your project's `Gruntfile.js` gruntfile:

```javascript
grunt.loadNpmTasks('grunt-node-inspector');
```

## Documentation

### Usage

The minimal usage of node-inspector runs with no options:

```js
'node-inspector': {
  default: {}
}
```

When this is run, node-inspector will be available at `0.0.0.0:8080`.

Here is a config that uses all of the available options for node-inspector:

```js
'node-inspector': {
  custom: {
    options: {
      'web-port': 1337,
      'web-host': 'localhost',
      'debug-port': 5857,
      'save-live-edit': true,
      hidden: ['configuration.js']
    }
  }
}
```

### Options

#### web-port

Type: `Number` Default: 8080

Port to host the inspector.

### web-host

Type: `String` Default: '0.0.0.0'

Host to listen on.

### debug-port

Type: `Number` Default: 5858

Port to connect to the debugging app.

### save-live-edit

Type: `Boolean` Default: false

Save live edit changes to disk.

# Changelog

**0.1.0** - Added debug-port and save-live-editoptions. Renamed port to web-port and host to web-host to match node-inspector cli naming.

**Breaking changes:**

options.host is now options['web-host'] and options.port is now options['web-port'].

**0.0.1** - Initial release
