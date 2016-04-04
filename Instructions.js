'use strict';

module.exports = {
  get(opcode) {
    var key = opcode.toString(16);
    if(key.length % 2 != 0) {
      key = '0' + key;
    }
    if(!instructions[key]) {
      throw 'Unknown upcode: ' + key;
    }
    return instructions[key];
  }
}

var instructions = {
  '00': require('./instructions/0x00'),
  '06': require('./instructions/0x06'),
  '0e': require('./instructions/0x0e'),
  '16': require('./instructions/0x16'),
  '1e': require('./instructions/0x1e'),
  '26': require('./instructions/0x26'),
  '2e': require('./instructions/0x2e'),
  'c3': require('./instructions/0xc3'),
  '78': require('./instructions/0x78'),
  '79': require('./instructions/0x79'),
  '7a': require('./instructions/0x7a'),
  '7b': require('./instructions/0x7b'),
  '7c': require('./instructions/0x7c'),
  '7d': require('./instructions/0x7d'),
  '7e': require('./instructions/0x7e'),
  '7f': require('./instructions/0x7f'),
};
