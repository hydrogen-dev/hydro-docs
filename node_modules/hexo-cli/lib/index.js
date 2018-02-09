'use strict';

var minimist = require('minimist');
var abbrev = require('abbrev');
var pathFn = require('path');
var tildify = require('tildify');
var chalk = require('chalk');
var util = require('hexo-util');
var findPkg = require('./find_pkg');
var pkg = require('../package.json');
var args = util.camelCaseKeys(minimist(process.argv.slice(2)));
var Logger = require('./logger');
var log = new Logger(args);
var goodbye = require('./goodbye');
var completion = require('./completion');
var commands = require('./console');
var alias = abbrev(Object.keys(commands));
var cwd = process.cwd();

// Change the title in console
process.title = 'hexo';

exports = module.exports = function() {
  return findPkg(cwd, args).then(function(path) {
    if (!path) return runCLICommand(args);
    return loadHexoModule(path, args);
  }).catch(handleError);
};

exports.console = commands;
exports.version = pkg.version;

function handleError(err) {
  log.fatal(err.stack || err.message || err);
  process.exit(2);
}

function runCLICommand(args) {
  var cmd = args._.shift();

  if (alias.hasOwnProperty(cmd)) {
    cmd = alias[cmd];
  } else if (args.v || args.version) {
    cmd = 'version';
  } else if (args.consoleList) {
    return console.log(Object.keys(commands).join('\n'));
  } else if (args.completion) {
    return completion(args);
  } else {
    cmd = 'help';
  }

  return commands[cmd].call({
    base_dir: process.cwd(),
    log: log
  }, args);
}

function loadHexoModule(path, args) {
  var modulePath = pathFn.join(path, 'node_modules', 'hexo');

  try {
    var Hexo = require(modulePath);
    var hexo = new Hexo(path, args);
    log = hexo.log;

    return runHexoCommand(hexo, args);
  } catch (_) {
    log.error('Local hexo not found in %s', chalk.magenta(tildify(path)));
    log.error('Try running: \'npm install hexo --save\'');
    process.exit(2);
  }
}

function runHexoCommand(hexo, args) {
  return hexo.init().then(function() {
    var cmd = args._.shift();

    if (cmd) {
      var c = hexo.extend.console.get(cmd);
      if (!c) cmd = 'help';
    } else if (args.v || args.version) {
      cmd = 'version';
    } else if (args.consoleList) {
      return console.log(Object.keys(hexo.extend.console.list()).join('\n'));
    } else if (args.completion) {
      return completion(args);
    } else {
      cmd = 'help';
    }

    watchSignal(hexo);

    return hexo.call(cmd, args).then(function() {
      return hexo.exit();
    }).catch(function(err) {
      return hexo.exit(err).then(function() {
        handleError(err);
      });
    });
  });
}

function watchSignal(hexo) {
  process.on('SIGINT', function() {
    log.info(goodbye());
    hexo.unwatch();

    hexo.exit().then(function() {
      process.exit();
    });
  });
}
