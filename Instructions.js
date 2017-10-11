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
  },

  getExtended(opcode) {
    var key = opcode.toString(16);
    if(key.length % 2 != 0) {
      key = '0' + key;
    }
    if(!extendedInstructions[key]) {
      throw 'Unknown upcode: cb' + key;
    }
    return extendedInstructions[key];
  }
}

var instructions = {
  '00': require('./instructions/0x00'), // nop
  '01': require('./instructions/0x01'), // ld bc, nn
  '02': require('./instructions/0x02'), // ld [bc], a
  '03': require('./instructions/0x03'), // inc bc
  '04': require('./instructions/0x04'), // inc b
  '05': require('./instructions/0x05'), // dec b
  '06': require('./instructions/0x06'), // ld b, n
  '07': require('./instructions/0x07'), // rlca
  '08': require('./instructions/0x08'), // ld [nn], sp
  '09': require('./instructions/0x09'), // add hl, bc
  '0a': require('./instructions/0x0a'), // ld a, [bc]
  '0b': require('./instructions/0x0b'), // dec bc
  '0c': require('./instructions/0x0c'), // inc c
  '0d': require('./instructions/0x0d'), // dec c
  '0e': require('./instructions/0x0e'), // ld c, n
  '0f': require('./instructions/0x0f'), // rrca
  '10': require('./instructions/0x10'), // stop
  '11': require('./instructions/0x11'), // ld de, nn
  '12': require('./instructions/0x12'), // ld [de], a
  '13': require('./instructions/0x13'), // inc de
  '14': require('./instructions/0x14'), // inc d
  '15': require('./instructions/0x15'), // dec d
  '16': require('./instructions/0x16'), // ld d, n
  '17': require('./instructions/0x17'), // rla
  '19': require('./instructions/0x19'), // add hl, de
  '1e': require('./instructions/0x1e'), // ld e, n
  '1f': require('./instructions/0x1f'), // rra
  '1a': require('./instructions/0x1a'), // ld a, [de]
  '1b': require('./instructions/0x1b'), // dec de
  '1c': require('./instructions/0x1c'), // inc e
  '1d': require('./instructions/0x1d'), // dec e
  '21': require('./instructions/0x21'), // ld hl, nn
  '22': require('./instructions/0x22'), // ld [hl+], a
  '23': require('./instructions/0x23'), // inc hl
  '24': require('./instructions/0x24'), // inc h
  '25': require('./instructions/0x25'), // dec h
  '26': require('./instructions/0x26'), // ld h, n
  '27': require('./instructions/0x27'), // daa
  '29': require('./instructions/0x29'), // add hl, hl
  '2a': require('./instructions/0x2a'), // ld a, [hl+]
  '2b': require('./instructions/0x2b'), // dec hl
  '2c': require('./instructions/0x2c'), // inc l
  '2d': require('./instructions/0x2d'), // dec l
  '2e': require('./instructions/0x2e'), // ld l, n
  '2f': require('./instructions/0x2f'), // cpl
  '31': require('./instructions/0x31'), // ld hl, nn
  '32': require('./instructions/0x32'), // ld [hl-], a
  '33': require('./instructions/0x33'), // inc sp
  '34': require('./instructions/0x34'), // inc [hl]
  '35': require('./instructions/0x35'), // dec [hl]
  '36': require('./instructions/0x36'), // ld [hl], n
  '37': require('./instructions/0x37'), // scf
  '39': require('./instructions/0x39'), // add hl, sp
  '3e': require('./instructions/0x3e'), // ld a, n
  '3a': require('./instructions/0x3a'), // ld a, [hl-]
  '3b': require('./instructions/0x3b'), // dec sp
  '3c': require('./instructions/0x3c'), // inc a
  '3d': require('./instructions/0x3d'), // dec a
  '3f': require('./instructions/0x3f'), // ccf
  '40': require('./instructions/0x40'), // ld b, b
  '41': require('./instructions/0x41'), // ld b, c
  '42': require('./instructions/0x42'), // ld b, d
  '43': require('./instructions/0x43'), // ld b, e
  '44': require('./instructions/0x44'), // ld b, h
  '45': require('./instructions/0x45'), // ld b, l
  '46': require('./instructions/0x46'), // ld b, [hl]
  '47': require('./instructions/0x47'), // ld b, a
  '48': require('./instructions/0x48'), // ld c, b
  '49': require('./instructions/0x49'), // ld c, c
  '4a': require('./instructions/0x4a'), // ld c, d
  '4b': require('./instructions/0x4b'), // ld c, e
  '4c': require('./instructions/0x4c'), // ld c, h
  '4d': require('./instructions/0x4d'), // ld c, l
  '4e': require('./instructions/0x4e'), // ld c, [hl]
  '4f': require('./instructions/0x4f'), // ld c, a
  '50': require('./instructions/0x50'), // ld d, b
  '51': require('./instructions/0x51'), // ld d, c
  '52': require('./instructions/0x52'), // ld d, d
  '53': require('./instructions/0x53'), // ld d, e
  '54': require('./instructions/0x54'), // ld d, h
  '55': require('./instructions/0x55'), // ld d, l
  '56': require('./instructions/0x56'), // ld d, [hl]
  '57': require('./instructions/0x57'), // ld d, a
  '58': require('./instructions/0x58'), // ld e, b
  '59': require('./instructions/0x59'), // ld e, c
  '5a': require('./instructions/0x5a'), // ld e, d
  '5b': require('./instructions/0x5b'), // ld e, e
  '5c': require('./instructions/0x5c'), // ld e, h
  '5d': require('./instructions/0x5d'), // ld e, l
  '5e': require('./instructions/0x5e'), // ld e, [hl]
  '5f': require('./instructions/0x5f'), // ld e, a
  '60': require('./instructions/0x60'), // ld h, b
  '61': require('./instructions/0x61'), // ld h, c
  '62': require('./instructions/0x62'), // ld h, d
  '63': require('./instructions/0x63'), // ld h, e
  '64': require('./instructions/0x64'), // ld h, h
  '65': require('./instructions/0x65'), // ld h, l
  '66': require('./instructions/0x66'), // ld h, [hl]
  '67': require('./instructions/0x67'), // ld h, a
  '68': require('./instructions/0x68'), // ld l, b
  '69': require('./instructions/0x69'), // ld l, c
  '6a': require('./instructions/0x6a'), // ld l, d
  '6b': require('./instructions/0x6b'), // ld l, e
  '6c': require('./instructions/0x6c'), // ld l, h
  '6d': require('./instructions/0x6d'), // ld l, l
  '6e': require('./instructions/0x6e'), // ld l, [hl]
  '6f': require('./instructions/0x6f'), // ld l, a
  '70': require('./instructions/0x70'), // ld [hl], b
  '71': require('./instructions/0x71'), // ld [hl], c
  '72': require('./instructions/0x72'), // ld [hl], d
  '73': require('./instructions/0x73'), // ld [hl], e
  '74': require('./instructions/0x74'), // ld [hl], h
  '75': require('./instructions/0x75'), // ld [hl], l
  '76': require('./instructions/0x76'), // halt
  '77': require('./instructions/0x77'), // ld [hl], a
  '78': require('./instructions/0x78'), // ld a, b
  '79': require('./instructions/0x79'), // ld a, c
  '7a': require('./instructions/0x7a'), // ld a, d
  '7b': require('./instructions/0x7b'), // ld a, e
  '7c': require('./instructions/0x7c'), // ld a, h
  '7d': require('./instructions/0x7d'), // ld a, l
  '7e': require('./instructions/0x7e'), // ld a, [hl]
  '7f': require('./instructions/0x7f'), // ld a, a
  '80': require('./instructions/0x80'), // add a, b
  '81': require('./instructions/0x81'), // add a, c
  '82': require('./instructions/0x82'), // add a, d
  '83': require('./instructions/0x83'), // add a, e
  '84': require('./instructions/0x84'), // add a, h
  '85': require('./instructions/0x85'), // add a, l
  '86': require('./instructions/0x86'), // add a, [hl]
  '87': require('./instructions/0x87'), // add a, a
  '88': require('./instructions/0x88'), // adc a, b
  '89': require('./instructions/0x89'), // adc a, c
  '8a': require('./instructions/0x8a'), // adc a, d
  '8b': require('./instructions/0x8b'), // adc a, e
  '8c': require('./instructions/0x8c'), // adc a, h
  '8d': require('./instructions/0x8d'), // adc a, l
  '8e': require('./instructions/0x8e'), // adc a, [hl]
  '8f': require('./instructions/0x8f'), // adc a, a
  '90': require('./instructions/0x90'), // sub a, b
  '91': require('./instructions/0x91'), // sub a, c
  '92': require('./instructions/0x92'), // sub a, d
  '93': require('./instructions/0x93'), // sub a, e
  '94': require('./instructions/0x94'), // sub a, h
  '95': require('./instructions/0x95'), // sub a, l
  '96': require('./instructions/0x96'), // sub a, [hl]
  '97': require('./instructions/0x97'), // sub a, a
  '9f': require('./instructions/0x9f'), // sbc a, a
  '98': require('./instructions/0x98'), // sbc a, b
  '99': require('./instructions/0x99'), // sbc a, c
  '9a': require('./instructions/0x9a'), // sbc a, d
  '9b': require('./instructions/0x9b'), // sbc a, e
  '9c': require('./instructions/0x9c'), // sbc a, h
  '9d': require('./instructions/0x9d'), // sbc a, l
  '9e': require('./instructions/0x9e'), // sbc a, [hl]
  'a0': require('./instructions/0xa0'), // and b
  'a1': require('./instructions/0xa1'), // and c
  'a2': require('./instructions/0xa2'), // and d
  'a3': require('./instructions/0xa3'), // and e
  'a4': require('./instructions/0xa4'), // and h
  'a5': require('./instructions/0xa5'), // and l
  'a6': require('./instructions/0xa6'), // and [hl]
  'a7': require('./instructions/0xa7'), // and a
  'a8': require('./instructions/0xa8'), // xor b
  'a9': require('./instructions/0xa9'), // xor c
  'aa': require('./instructions/0xaa'), // xor d
  'ab': require('./instructions/0xab'), // xor e
  'ac': require('./instructions/0xac'), // xor h
  'ad': require('./instructions/0xad'), // xor l
  'ae': require('./instructions/0xae'), // xor [hl]
  'af': require('./instructions/0xaf'), // xor a
  'b0': require('./instructions/0xb0'), // or b
  'b1': require('./instructions/0xb1'), // or c
  'b2': require('./instructions/0xb2'), // or d
  'b3': require('./instructions/0xb3'), // or e
  'b4': require('./instructions/0xb4'), // or h
  'b5': require('./instructions/0xb5'), // or l
  'b6': require('./instructions/0xb6'), // or [hl]
  'b7': require('./instructions/0xb7'), // or a
  'b8': require('./instructions/0xb8'), // cp b
  'b9': require('./instructions/0xb9'), // cp c
  'ba': require('./instructions/0xba'), // cp d
  'bb': require('./instructions/0xbb'), // cp e
  'bc': require('./instructions/0xbc'), // cp h
  'bd': require('./instructions/0xbd'), // cp l
  'be': require('./instructions/0xbe'), // cp [hl]
  'bf': require('./instructions/0xbf'), // cp a
  'c1': require('./instructions/0xc1'), // pop bc
  'c3': require('./instructions/0xc3'), // jp
  'c5': require('./instructions/0xc5'), // push bc
  'c6': require('./instructions/0xc6'), // add a, n
  'ce': require('./instructions/0xce'), // adc a, n
  'd1': require('./instructions/0xd1'), // pop de
  'd5': require('./instructions/0xd5'), // push de
  'd6': require('./instructions/0xd6'), // sub a, #
  'de': require('./instructions/0xde'), // sbc a, #
  'e0': require('./instructions/0xe0'), // ld [$FF00 + n], a
  'e1': require('./instructions/0xe1'), // pop hl
  'e2': require('./instructions/0xe2'), // ld [$FF00 + c], a
  'e5': require('./instructions/0xe5'), // push hl
  'e6': require('./instructions/0xe6'), // and #
  'e8': require('./instructions/0xe8'), // add sp, n
  'ea': require('./instructions/0xea'), // ld [nn], a
  'ee': require('./instructions/0xee'), // xor #
  'f0': require('./instructions/0xf0'), // ld a, [$FF00+n]
  'f1': require('./instructions/0xf1'), // pop af
  'f2': require('./instructions/0xf2'), // ld a, [$FF00 + c]
  'f3': require('./instructions/0xf3'), // di
  'f5': require('./instructions/0xf5'), // push af
  'fa': require('./instructions/0xfa'), // ld a, [nn]
  'f6': require('./instructions/0xf6'), // or #
  'f8': require('./instructions/0xf8'), // ld hl, sp + n
  'f9': require('./instructions/0xf9'), // ld sp, hl
  'fb': require('./instructions/0xfb'), // ei
  'fe': require('./instructions/0xfe'), // cp #
};

var extendedInstructions = {
  '00': require('./instructions/0xcb00'), // rlc b
  '01': require('./instructions/0xcb01'), // rlc c
  '02': require('./instructions/0xcb02'), // rlc d
  '03': require('./instructions/0xcb03'), // rlc e
  '04': require('./instructions/0xcb04'), // rlc h
  '05': require('./instructions/0xcb05'), // rlc l
  '06': require('./instructions/0xcb06'), // rlc [hl]
  '07': require('./instructions/0xcb07'), // rlc a

  '08': require('./instructions/0xcb08'), // rrc b
  '09': require('./instructions/0xcb09'), // rrc c
  '0a': require('./instructions/0xcb0a'), // rrc d
  '0b': require('./instructions/0xcb0b'), // rrc e
  '0c': require('./instructions/0xcb0c'), // rrc h
  '0d': require('./instructions/0xcb0d'), // rrc l
  '0e': require('./instructions/0xcb0e'), // rrc [hl]

  '0f': require('./instructions/0xcb0f'), // rrc a

  '10': require('./instructions/0xcb10'), // rl b
  '11': require('./instructions/0xcb11'), // rl c
  '12': require('./instructions/0xcb12'), // rl d
  '13': require('./instructions/0xcb13'), // rl e
  '14': require('./instructions/0xcb14'), // rl h
  '15': require('./instructions/0xcb15'), // rl l
  '16': require('./instructions/0xcb16'), // rl [hl]
  '17': require('./instructions/0xcb17'), // rl a
  '18': require('./instructions/0xcb18'), // rr b
  '19': require('./instructions/0xcb19'), // rr c
  '1a': require('./instructions/0xcb1a'), // rr d
  '1b': require('./instructions/0xcb1b'), // rr e
  '1c': require('./instructions/0xcb1c'), // rr h
  '1d': require('./instructions/0xcb1d'), // rr l
  '1e': require('./instructions/0xcb1e'), // rr [hl]
  '1f': require('./instructions/0xcb1f'), // rr a
  '30': require('./instructions/0xcb30'), // swap b
  '31': require('./instructions/0xcb31'), // swap c
  '32': require('./instructions/0xcb32'), // swap d
  '33': require('./instructions/0xcb33'), // swap e
  '34': require('./instructions/0xcb34'), // swap h
  '35': require('./instructions/0xcb35'), // swap l
  '36': require('./instructions/0xcb36'), // swap [hl]
  '37': require('./instructions/0xcb37'), // swap a
};
