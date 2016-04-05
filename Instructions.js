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
  '00': require('./instructions/0x00'), // nop
  '06': require('./instructions/0x06'), // ld b, n
  '0e': require('./instructions/0x0e'), // ld c, n
  '16': require('./instructions/0x16'), // ld d, n
  '1e': require('./instructions/0x1e'), // ld e, n
  '26': require('./instructions/0x26'), // ld h, n
  '2e': require('./instructions/0x2e'), // ld l, n
  'c3': require('./instructions/0xc3'), // jp
  '78': require('./instructions/0x78'), // ld a, b
  '79': require('./instructions/0x79'), // ld a, c
  '7a': require('./instructions/0x7a'), // ld a, d
  '7b': require('./instructions/0x7b'), // ld a, e
  '7c': require('./instructions/0x7c'), // ld a, h
  '7d': require('./instructions/0x7d'), // ld a, l
  '7e': require('./instructions/0x7e'), // ld a, [hl]
  '7f': require('./instructions/0x7f'), // ld a, a
};
