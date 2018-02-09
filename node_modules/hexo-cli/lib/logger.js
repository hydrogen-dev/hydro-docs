'use strict';

var chalk = require('chalk');
var format = require('util').format;

var loggerLevels = {
  debug: 'gray',
  info: 'green',
  warn: 'yellow',
  error: 'red',
  fatal: 'magenta'
};

var keys = Object.keys(loggerLevels);
var maxLength = 0;

function Logger(args) {
  this.args = args;
}

Logger.prototype.log = function(level, args) {
  if (this.args.silent) return;

  var str = '';
  var padding = maxLength - level.length + 1;

  if (this.args.debug) {
    str += chalk.gray(formatTime()) + ' ';
  } else if (level === 'debug') {
    return;
  }

  str += chalk[loggerLevels[level]](level.toUpperCase());

  while (padding--) {
    str += ' ';
  }

  str += format.apply(null, args);
  console.log(str);
};

function formatTime() {
  var date = new Date();

  return prefixZero(date.getHours(), 2) + ':' +
    prefixZero(date.getMinutes(), 2) + ':' +
    prefixZero(date.getSeconds(), 2) + '.' +
    prefixZero(date.getMilliseconds(), 3);
}

function prefixZero(num, size) {
  var str = '';

  for (var i = 0; i < size; i++) {
    str += '0';
  }

  str += num;

  return str.substring(str.length - size);
}

keys.forEach(function(key) {
  if (key.length > maxLength) {
    maxLength = key.length;
  }

  Logger.prototype[key] = function() {
    var len = arguments.length;
    var args = new Array(len);

    for (var i = 0; i < len; i++) {
      args[i] = arguments[i];
    }

    this.log(key, args);
  };
});

module.exports = Logger;
