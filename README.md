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
      port: 1337,
      host: 'localhost'
    }
  }s
}
```

### Options

#### port

Type: `Number` Default: 8080

Port to serve the node-inspector in your browser.

### host

Type: `String` Default: '0.0.0.0'

Host for node-inspector to listen on.

# Changelog

**0.0.0** - Initial release
