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
  '40': require('./instructions/0x40'), // ld b, b
  '41': require('./instructions/0x41'), // ld b, c
  '42': require('./instructions/0x42'), // ld b, d
  '43': require('./instructions/0x43'), // ld b, e
  '44': require('./instructions/0x44'), // ld b, h
  '45': require('./instructions/0x45'), // ld b, l
  '46': require('./instructions/0x46'), // ld b, [hl]
  '48': require('./instructions/0x48'), // ld c, b
  '49': require('./instructions/0x49'), // ld c, c
  '4a': require('./instructions/0x4a'), // ld c, d
  '4b': require('./instructions/0x4b'), // ld c, e
  '4c': require('./instructions/0x4c'), // ld c, h
  '4d': require('./instructions/0x4d'), // ld c, l
  '4e': require('./instructions/0x4e'), // ld c, [hl]

  '50': require('./instructions/0x50'), // ld d, b
  '51': require('./instructions/0x51'), // ld d, c
  '52': require('./instructions/0x52'), // ld d, d
  '53': require('./instructions/0x53'), // ld d, e
  '54': require('./instructions/0x54'), // ld d, h
  '55': require('./instructions/0x55'), // ld d, l
  '56': require('./instructions/0x56'), // ld d, [hl]

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
