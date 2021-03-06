'use strict';

class GbMemory {

  constructor() {
    this.rom = [];
    this.data = [];
    for(var i=0; i<0xFFFF; i++) {
      this.data.push(0);
    }
  }

  loadRom(rom) {
    this.rom = rom;
    for(var i=0; i<0x8000; i++) { // map bank 0 and bank 1 to memory
      if(rom[i] !== undefined) {
          this.data[i] = rom[i];
      }
    }
  }

  readByte(addr) {
    if(addr == 0xff44) {
      return 0x94;
    }

    return this.data[addr];
  }

  readWord(addr) {
    return (this.data[addr] | (this.data[addr+1] << 8)) & 0xFFFF;
  }

  writeByte(addr, value) {
    addr &= 0xFFFF;
    this.data[addr] = value;
  }

  writeWord(addr, value) {
    addr &= 0xFFFF;
    this.writeByte(addr, value & 0xFF);
    this.writeByte(addr + 1, value >> 8);
  }

}

module.exports = GbMemory;
