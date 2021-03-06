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
  '18': require('./instructions/0x18'), // jpr n
  '19': require('./instructions/0x19'), // add hl, de
  '1e': require('./instructions/0x1e'), // ld e, n
  '1f': require('./instructions/0x1f'), // rra
  '1a': require('./instructions/0x1a'), // ld a, [de]
  '1b': require('./instructions/0x1b'), // dec de
  '1c': require('./instructions/0x1c'), // inc e
  '1d': require('./instructions/0x1d'), // dec e
  '20': require('./instructions/0x20'), // jr nz, n
  '21': require('./instructions/0x21'), // ld hl, nn
  '22': require('./instructions/0x22'), // ld [hl+], a
  '23': require('./instructions/0x23'), // inc hl
  '24': require('./instructions/0x24'), // inc h
  '25': require('./instructions/0x25'), // dec h
  '26': require('./instructions/0x26'), // ld h, n
  '27': require('./instructions/0x27'), // daa
  '28': require('./instructions/0x28'), // jr z, n
  '29': require('./instructions/0x29'), // add hl, hl
  '2a': require('./instructions/0x2a'), // ld a, [hl+]
  '2b': require('./instructions/0x2b'), // dec hl
  '2c': require('./instructions/0x2c'), // inc l
  '2d': require('./instructions/0x2d'), // dec l
  '2e': require('./instructions/0x2e'), // ld l, n
  '2f': require('./instructions/0x2f'), // cpl
  '30': require('./instructions/0x30'), // jr nc, n
  '31': require('./instructions/0x31'), // ld hl, nn
  '32': require('./instructions/0x32'), // ld [hl-], a
  '33': require('./instructions/0x33'), // inc sp
  '34': require('./instructions/0x34'), // inc [hl]
  '35': require('./instructions/0x35'), // dec [hl]
  '36': require('./instructions/0x36'), // ld [hl], n
  '37': require('./instructions/0x37'), // scf
  '38': require('./instructions/0x38'), // jr c, n
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
  'c0': require('./instructions/0xc0'), // ret nz
  'c1': require('./instructions/0xc1'), // pop bc
  'c2': require('./instructions/0xc2'), // jp nz, nn
  'c3': require('./instructions/0xc3'), // jp
  'c4': require('./instructions/0xc4'), // call nz, nn
  'c5': require('./instructions/0xc5'), // push bc
  'c6': require('./instructions/0xc6'), // add a, n
  'c7': require('./instructions/0xc7'), // rst 00
  'c8': require('./instructions/0xc8'), // ret z
  'c9': require('./instructions/0xc9'), // ret
  'ca': require('./instructions/0xca'), // jp z, nn
  'cc': require('./instructions/0xcc'), // call z, nn
  'cd': require('./instructions/0xcd'), // call nn
  'ce': require('./instructions/0xce'), // adc a, n
  'cf': require('./instructions/0xcf'), // rst 08
  'd0': require('./instructions/0xd0'), // ret nc
  'd1': require('./instructions/0xd1'), // pop de
  'd2': require('./instructions/0xd2'), // jp nc, nn
  'd4': require('./instructions/0xd4'), // call nc, nn
  'd5': require('./instructions/0xd5'), // push de
  'd6': require('./instructions/0xd6'), // sub a, #
  'd7': require('./instructions/0xd7'), // rst 10
  'd8': require('./instructions/0xd8'), // ret c
  'd9': require('./instructions/0xd9'), // reti
  'da': require('./instructions/0xda'), // jp c, nn
  'dc': require('./instructions/0xdc'), // call c, nn
  'de': require('./instructions/0xde'), // sbc a, #
  'df': require('./instructions/0xdf'), // rst 18
  'e0': require('./instructions/0xe0'), // ld [$FF00 + n], a
  'e1': require('./instructions/0xe1'), // pop hl
  'e2': require('./instructions/0xe2'), // ld [$FF00 + c], a
  'e5': require('./instructions/0xe5'), // push hl
  'e6': require('./instructions/0xe6'), // and #
  'e7': require('./instructions/0xe7'), // rst 20
  'e8': require('./instructions/0xe8'), // add sp, n
  'e9': require('./instructions/0xe9'), // jp [hl]
  'ea': require('./instructions/0xea'), // ld [nn], a
  'ee': require('./instructions/0xee'), // xor #
  'ef': require('./instructions/0xef'), // rst 28
  'f0': require('./instructions/0xf0'), // ld a, [$FF00+n]
  'f1': require('./instructions/0xf1'), // pop af
  'f2': require('./instructions/0xf2'), // ld a, [$FF00 + c]
  'f3': require('./instructions/0xf3'), // di
  'f5': require('./instructions/0xf5'), // push af
  'fa': require('./instructions/0xfa'), // ld a, [nn]
  'f6': require('./instructions/0xf6'), // or #
  'f7': require('./instructions/0xf7'), // rst 30
  'f8': require('./instructions/0xf8'), // ld hl, sp + n
  'f9': require('./instructions/0xf9'), // ld sp, hl
  'fb': require('./instructions/0xfb'), // ei
  'fe': require('./instructions/0xfe'), // cp #
  'ff': require('./instructions/0xff'), // rst 38
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
  '20': require('./instructions/0xcb20'), // sla b
  '21': require('./instructions/0xcb21'), // sla c
  '22': require('./instructions/0xcb22'), // sla d
  '23': require('./instructions/0xcb23'), // sla e
  '24': require('./instructions/0xcb24'), // sla h
  '25': require('./instructions/0xcb25'), // sla l
  '26': require('./instructions/0xcb26'), // sla [hl]
  '27': require('./instructions/0xcb27'), // sla a
  '28': require('./instructions/0xcb28'), // sra b
  '29': require('./instructions/0xcb29'), // sra c
  '2a': require('./instructions/0xcb2a'), // sra d
  '2b': require('./instructions/0xcb2b'), // sra e
  '2c': require('./instructions/0xcb2c'), // sra h
  '2d': require('./instructions/0xcb2d'), // sra l
  '2e': require('./instructions/0xcb2e'), // sra [hl]
  '2f': require('./instructions/0xcb2f'), // sra a
  '30': require('./instructions/0xcb30'), // swap b
  '31': require('./instructions/0xcb31'), // swap c
  '32': require('./instructions/0xcb32'), // swap d
  '33': require('./instructions/0xcb33'), // swap e
  '34': require('./instructions/0xcb34'), // swap h
  '35': require('./instructions/0xcb35'), // swap l
  '36': require('./instructions/0xcb36'), // swap [hl]
  '37': require('./instructions/0xcb37'), // swap a
  '38': require('./instructions/0xcb38'), // srl b
  '39': require('./instructions/0xcb39'), // srl c
  '3a': require('./instructions/0xcb3a'), // srl d
  '3b': require('./instructions/0xcb3b'), // srl e
  '3c': require('./instructions/0xcb3c'), // srl h
  '3d': require('./instructions/0xcb3d'), // srl l
  '3e': require('./instructions/0xcb3e'), // srl [hl]
  '3f': require('./instructions/0xcb3f'), // srl a
  '40': require('./instructions/0xcb40'), // bit 0, b
  '41': require('./instructions/0xcb41'), // bit 0, c
  '42': require('./instructions/0xcb42'), // bit 0, d
  '43': require('./instructions/0xcb43'), // bit 0, e
  '44': require('./instructions/0xcb44'), // bit 0, h
  '45': require('./instructions/0xcb45'), // bit 0, l
  '46': require('./instructions/0xcb46'), // bit 0, [hl]
  '47': require('./instructions/0xcb47'), // bit 0, a
  '48': require('./instructions/0xcb48'), // bit 1, b
  '49': require('./instructions/0xcb49'), // bit 1, c
  '4a': require('./instructions/0xcb4a'), // bit 1, d
  '4b': require('./instructions/0xcb4b'), // bit 1, e
  '4c': require('./instructions/0xcb4c'), // bit 1, h
  '4d': require('./instructions/0xcb4d'), // bit 1, l
  '4e': require('./instructions/0xcb4e'), // bit 1, [hl]
  '4f': require('./instructions/0xcb4f'), // bit 1, a
  '50': require('./instructions/0xcb50'), // bit 2, b
  '51': require('./instructions/0xcb51'), // bit 2, c
  '52': require('./instructions/0xcb52'), // bit 2, d
  '53': require('./instructions/0xcb53'), // bit 2, e
  '54': require('./instructions/0xcb54'), // bit 2, h
  '55': require('./instructions/0xcb55'), // bit 2, l
  '56': require('./instructions/0xcb56'), // bit 2, [hl]
  '57': require('./instructions/0xcb57'), // bit 2, a
  '58': require('./instructions/0xcb58'), // bit 3, b
  '59': require('./instructions/0xcb59'), // bit 3, c
  '5a': require('./instructions/0xcb5a'), // bit 3, d
  '5b': require('./instructions/0xcb5b'), // bit 3, e
  '5c': require('./instructions/0xcb5c'), // bit 3, h
  '5d': require('./instructions/0xcb5d'), // bit 3, l
  '5e': require('./instructions/0xcb5e'), // bit 3, [hl]
  '5f': require('./instructions/0xcb5f'), // bit 3, a
  '60': require('./instructions/0xcb60'), // bit 4, b
  '61': require('./instructions/0xcb61'), // bit 4, c
  '62': require('./instructions/0xcb62'), // bit 4, d
  '63': require('./instructions/0xcb63'), // bit 4, e
  '64': require('./instructions/0xcb64'), // bit 4, h
  '65': require('./instructions/0xcb65'), // bit 4, l
  '66': require('./instructions/0xcb66'), // bit 4, [hl]
  '67': require('./instructions/0xcb67'), // bit 4, a
  '68': require('./instructions/0xcb68'), // bit 5, b
  '69': require('./instructions/0xcb69'), // bit 5, c
  '6a': require('./instructions/0xcb6a'), // bit 5, d
  '6b': require('./instructions/0xcb6b'), // bit 5, e
  '6c': require('./instructions/0xcb6c'), // bit 5, h
  '6d': require('./instructions/0xcb6d'), // bit 5, l
  '6e': require('./instructions/0xcb6e'), // bit 5, [hl]
  '6f': require('./instructions/0xcb6f'), // bit 5, a
  '70': require('./instructions/0xcb70'), // bit 6, b
  '71': require('./instructions/0xcb71'), // bit 6, c
  '72': require('./instructions/0xcb72'), // bit 6, d
  '73': require('./instructions/0xcb73'), // bit 6, e
  '74': require('./instructions/0xcb74'), // bit 6, h
  '75': require('./instructions/0xcb75'), // bit 6, l
  '76': require('./instructions/0xcb76'), // bit 6, [hl]
  '77': require('./instructions/0xcb77'), // bit 6, a
  '78': require('./instructions/0xcb78'), // bit 7, b
  '79': require('./instructions/0xcb79'), // bit 7, c
  '7a': require('./instructions/0xcb7a'), // bit 7, d
  '7b': require('./instructions/0xcb7b'), // bit 7, e
  '7c': require('./instructions/0xcb7c'), // bit 7, h
  '7d': require('./instructions/0xcb7d'), // bit 7, l
  '7e': require('./instructions/0xcb7e'), // bit 7, [hl]
  '7f': require('./instructions/0xcb7f'), // bit 7, a
  '80': require('./instructions/0xcb80'), // res 0, b
  '81': require('./instructions/0xcb81'), // res 0, c
  '82': require('./instructions/0xcb82'), // res 0, d
  '83': require('./instructions/0xcb83'), // res 0, e
  '84': require('./instructions/0xcb84'), // res 0, h
  '85': require('./instructions/0xcb85'), // res 0, l
  '86': require('./instructions/0xcb86'), // res 0, [hl]
  '87': require('./instructions/0xcb87'), // res 0, a
  '88': require('./instructions/0xcb88'), // res 1, b
  '89': require('./instructions/0xcb89'), // res 1, c
  '8a': require('./instructions/0xcb8a'), // res 1, d
  '8b': require('./instructions/0xcb8b'), // res 1, e
  '8c': require('./instructions/0xcb8c'), // res 1, h
  '8d': require('./instructions/0xcb8d'), // res 1, l
  '8e': require('./instructions/0xcb8e'), // res 1, [hl]
  '8f': require('./instructions/0xcb8f'), // res 1, a
  '90': require('./instructions/0xcb90'), // res 2, b
  '91': require('./instructions/0xcb91'), // res 2, c
  '92': require('./instructions/0xcb92'), // res 2, d
  '93': require('./instructions/0xcb93'), // res 2, e
  '94': require('./instructions/0xcb94'), // res 2, h
  '95': require('./instructions/0xcb95'), // res 2, l
  '96': require('./instructions/0xcb96'), // res 2, [hl]
  '97': require('./instructions/0xcb97'), // res 2, a
  '98': require('./instructions/0xcb98'), // res 3, b
  '99': require('./instructions/0xcb99'), // res 3, c
  '9a': require('./instructions/0xcb9a'), // res 3, d
  '9b': require('./instructions/0xcb9b'), // res 3, e
  '9c': require('./instructions/0xcb9c'), // res 3, h
  '9d': require('./instructions/0xcb9d'), // res 3, l
  '9e': require('./instructions/0xcb9e'), // res 3, [hl]
  '9f': require('./instructions/0xcb9f'), // res 3, a
  'a0': require('./instructions/0xcba0'), // res 4, b
  'a1': require('./instructions/0xcba1'), // res 4, c
  'a2': require('./instructions/0xcba2'), // res 4, d
  'a3': require('./instructions/0xcba3'), // res 4, e
  'a4': require('./instructions/0xcba4'), // res 4, h
  'a5': require('./instructions/0xcba5'), // res 4, l
  'a6': require('./instructions/0xcba6'), // res 4, [hl]
  'a7': require('./instructions/0xcba7'), // res 4, a
  'a8': require('./instructions/0xcba8'), // res 5, b
  'a9': require('./instructions/0xcba9'), // res 5, c
  'aa': require('./instructions/0xcbaa'), // res 5, d
  'ab': require('./instructions/0xcbab'), // res 5, e
  'ac': require('./instructions/0xcbac'), // res 5, h
  'ad': require('./instructions/0xcbad'), // res 5, l
  'ae': require('./instructions/0xcbae'), // res 5, [hl]
  'af': require('./instructions/0xcbaf'), // res 5, a
  'b0': require('./instructions/0xcbb0'), // res 6, b
  'b1': require('./instructions/0xcbb1'), // res 6, c
  'b2': require('./instructions/0xcbb2'), // res 6, d
  'b3': require('./instructions/0xcbb3'), // res 6, e
  'b4': require('./instructions/0xcbb4'), // res 6, h
  'b5': require('./instructions/0xcbb5'), // res 6, l
  'b6': require('./instructions/0xcbb6'), // res 6, [hl]
  'b7': require('./instructions/0xcbb7'), // res 6, a
  'b8': require('./instructions/0xcbb8'), // res 7, b
  'b9': require('./instructions/0xcbb9'), // res 7, c
  'ba': require('./instructions/0xcbba'), // res 7, d
  'bb': require('./instructions/0xcbbb'), // res 7, e
  'bc': require('./instructions/0xcbbc'), // res 7, h
  'bd': require('./instructions/0xcbbd'), // res 7, l
  'be': require('./instructions/0xcbbe'), // res 7, [hl]
  'bf': require('./instructions/0xcbbf'), // res 7, a
  'c0': require('./instructions/0xcbc0'), // set 0, b
  'c1': require('./instructions/0xcbc1'), // set 0, c
  'c2': require('./instructions/0xcbc2'), // set 0, d
  'c3': require('./instructions/0xcbc3'), // set 0, e
  'c4': require('./instructions/0xcbc4'), // set 0, h
  'c5': require('./instructions/0xcbc5'), // set 0, l
  'c6': require('./instructions/0xcbc6'), // set 0, [hl]
  'c7': require('./instructions/0xcbc7'), // set 0, a
  'c8': require('./instructions/0xcbc8'), // set 1, b
  'c9': require('./instructions/0xcbc9'), // set 1, c
  'ca': require('./instructions/0xcbca'), // set 1, d
  'cb': require('./instructions/0xcbcb'), // set 1, e
  'cc': require('./instructions/0xcbcc'), // set 1, h
  'cd': require('./instructions/0xcbcd'), // set 1, l
  'ce': require('./instructions/0xcbce'), // set 1, [hl]
  'cf': require('./instructions/0xcbcf'), // set 1, a
  'd0': require('./instructions/0xcbd0'), // set 2, b
  'd1': require('./instructions/0xcbd1'), // set 2, c
  'd2': require('./instructions/0xcbd2'), // set 2, d
  'd3': require('./instructions/0xcbd3'), // set 2, e
  'd4': require('./instructions/0xcbd4'), // set 2, h
  'd5': require('./instructions/0xcbd5'), // set 2, l
  'd6': require('./instructions/0xcbd6'), // set 2, [hl]
  'd7': require('./instructions/0xcbd7'), // set 2, a
  'd8': require('./instructions/0xcbd8'), // set 3, b
  'd9': require('./instructions/0xcbd9'), // set 3, c
  'da': require('./instructions/0xcbda'), // set 3, d
  'db': require('./instructions/0xcbdb'), // set 3, e
  'dc': require('./instructions/0xcbdc'), // set 3, h
  'dd': require('./instructions/0xcbdd'), // set 3, l
  'de': require('./instructions/0xcbde'), // set 3, [hl]
  'df': require('./instructions/0xcbdf'), // set 3, a
  'e0': require('./instructions/0xcbe0'), // set 4, b
  'e1': require('./instructions/0xcbe1'), // set 4, c
  'e2': require('./instructions/0xcbe2'), // set 4, d
  'e3': require('./instructions/0xcbe3'), // set 4, e
  'e4': require('./instructions/0xcbe4'), // set 4, h
  'e5': require('./instructions/0xcbe5'), // set 4, l
  'e6': require('./instructions/0xcbe6'), // set 4, [hl]
  'e7': require('./instructions/0xcbe7'), // set 4, a
  'e8': require('./instructions/0xcbe8'), // set 5, b
  'e9': require('./instructions/0xcbe9'), // set 5, c
  'ea': require('./instructions/0xcbea'), // set 5, d
  'eb': require('./instructions/0xcbeb'), // set 5, e
  'ec': require('./instructions/0xcbec'), // set 5, h
  'ed': require('./instructions/0xcbed'), // set 5, l
  'ee': require('./instructions/0xcbee'), // set 5, [hl]
  'ef': require('./instructions/0xcbef'), // set 5, a
  'f0': require('./instructions/0xcbf0'), // set 6, b
  'f1': require('./instructions/0xcbf1'), // set 6, c
  'f2': require('./instructions/0xcbf2'), // set 6, d
  'f3': require('./instructions/0xcbf3'), // set 6, e
  'f4': require('./instructions/0xcbf4'), // set 6, h
  'f5': require('./instructions/0xcbf5'), // set 6, l
  'f6': require('./instructions/0xcbf6'), // set 6, [hl]
  'f7': require('./instructions/0xcbf7'), // set 6, a
  'f8': require('./instructions/0xcbf8'), // set 7, b
  'f9': require('./instructions/0xcbf9'), // set 7, c
  'fa': require('./instructions/0xcbfa'), // set 7, d
  'fb': require('./instructions/0xcbfb'), // set 7, e
  'fc': require('./instructions/0xcbfc'), // set 7, h
  'fd': require('./instructions/0xcbfd'), // set 7, l
  'fe': require('./instructions/0xcbfe'), // set 7, [hl]
  'ff': require('./instructions/0xcbff'), // set 7, a
};
