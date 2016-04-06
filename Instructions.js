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
  '36': require('./instructions/0x36'), // ld [hl], n
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
  '58': require('./instructions/0x58'), // ld e, b
  '59': require('./instructions/0x59'), // ld e, c
  '5a': require('./instructions/0x5a'), // ld e, d
  '5b': require('./instructions/0x5b'), // ld e, e
  '5c': require('./instructions/0x5c'), // ld e, h
  '5d': require('./instructions/0x5d'), // ld e, l
  '5e': require('./instructions/0x5e'), // ld e, [hl]
  '60': require('./instructions/0x60'), // ld h, b
  '61': require('./instructions/0x61'), // ld h, c
  '62': require('./instructions/0x62'), // ld h, d
  '63': require('./instructions/0x63'), // ld h, e
  '64': require('./instructions/0x64'), // ld h, h
  '65': require('./instructions/0x65'), // ld h, l
  '66': require('./instructions/0x66'), // ld h, [hl]
  '68': require('./instructions/0x68'), // ld l, b
  '69': require('./instructions/0x69'), // ld l, c
  '6a': require('./instructions/0x6a'), // ld l, d
  '6b': require('./instructions/0x6b'), // ld l, e
  '6c': require('./instructions/0x6c'), // ld l, h
  '6d': require('./instructions/0x6d'), // ld l, l
  '6e': require('./instructions/0x6e'), // ld l, [hl]

  '70': require('./instructions/0x70'), // ld [hl], b
  '71': require('./instructions/0x71'), // ld [hl], c
  '72': require('./instructions/0x72'), // ld [hl], d
  '73': require('./instructions/0x73'), // ld [hl], e
  '74': require('./instructions/0x74'), // ld [hl], h
  '75': require('./instructions/0x75'), // ld [hl], l

  '78': require('./instructions/0x78'), // ld a, b
  '79': require('./instructions/0x79'), // ld a, c
  '7a': require('./instructions/0x7a'), // ld a, d
  '7b': require('./instructions/0x7b'), // ld a, e
  '7c': require('./instructions/0x7c'), // ld a, h
  '7d': require('./instructions/0x7d'), // ld a, l
  '7e': require('./instructions/0x7e'), // ld a, [hl]
  '7f': require('./instructions/0x7f'), // ld a, a

  'c3': require('./instructions/0xc3'), // jp
};
