'use strict';

const Instructions = require('./Instructions');

class GbCpu {

  constructor(memory) {
    this.memory = memory;
    this.reset();
  }

  reset() {
    this.regs = {
      a: 0x01,
      f: 0xB0,
      b: 0x00,
      c: 0x13,
      d: 0x00,
      e: 0xDB,
      h: 0x01,
      l: 0x4D,
      sp: 0xFFFE,
      pc: 0x0100
    };
    this._cycles = 0;
  }

  step() {
    const instruction = this.fetchInstruction();
    this._cycles += instruction.execute(this);
    return instruction;
    // TODO: process timer
    // TODO: process interupts
  }

  fetchInstruction() {
    var opcode = this.memory.readByte(this.regs.pc);
    return Instructions.get(opcode);
  }

  setCarry() {
    console.log('setCarry');
  }

  loadRom(rom) {
    this.memory.loadRom(rom);
  }
}

module.exports = GbCpu;
