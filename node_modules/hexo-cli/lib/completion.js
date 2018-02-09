'use strict';

var fs = require('hexo-fs');
var pathFn = require('path');

var COMPLETION_DIR = pathFn.join(__dirname, '../completion');

module.exports = function(args) {
  return fs.readFile(pathFn.join(COMPLETION_DIR, args.completion)).then(function(content) {
    console.log(content);
    process.exit(0);
  }).catch(function() {
    console.error('echo "Specified hexo shell auto-completion rules not found."');
    process.exit(5);
  });
};
