'use strict';

const registers = require('./Registers');

class GbMemory {

  constructor(gpu, buttons) {
    this.gpu = gpu;
    this.buttons = buttons;
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
    if(addr == registers.LCD_BACKGROUND_PAL) {
      return this.gpu.readBackgroundPal();
    }

    // buttons
    if(addr == 0xFF00) {
      return this.buttons.readP1();
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

    if(addr >= 0x8000 && addr < 0xa000) {
      this.gpu.vram[addr & 0x1FFF] = value;
      if(addr < 0x9800) {
          this.gpu.updateTile(addr, value);
      }
    }

    if(addr == 0xFF00) {
      this.buttons.writeP1(value);
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
