'use strict';

const registers = require('./Registers');

class GbMemory {

  constructor(gpu) {
    this.gpu = gpu;
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
    // GPU
    if(addr == registers.LCD_CONTROL) {
      return this.gpu.control & 0xFF;
    }
    if(addr == registers.LCD_LINE_Y) {
      return this.gpu.line & 0xFF;
    }
    if(addr == registers.LCD_SCROLL_X) {
      return this.gpu.scrollX & 0xFF;
    }
    if(addr == registers.LCD_SCROLL_Y) {
      return this.gpu.scrollY & 0xFF;
    }

    return this.data[addr];
  }

  readWord(addr) {
    return (this.readByte(addr) | (this.readByte(addr+1) << 8)) & 0xFFFF;
  }

  writeByte(addr, value) {
    addr &= 0xFFFF;
    // GPU
    if(addr == registers.LCD_CONTROL) {
      return this.gpu.setControl(value);
    }
    if(addr == registers.LCD_SCROLL_X) {
      return this.gpu.scrollX = value;
    }
    if(addr == registers.LCD_SCROLL_Y) {
      return this.gpu.scrollY = value;
    }
    if(addr == registers.LCD_BACKGROUND_PAL) {
      return this.gpu.setBackgroundPal(value);
    }

    this.data[addr] = value;
  }

  writeWord(addr, value) {
    addr &= 0xFFFF;
    this.writeByte(addr, value & 0xFF);
    this.writeByte(addr + 1, value >> 8);
  }

}

module.exports = GbMemory;
