'use strict';

const Instructions = require('./Instructions');

const BIT_CARRY = 4;
const BIT_HALF_CARRY = 5;
const BIT_SUBTRACT = 6;
const BIT_ZERO = 7;

class GbCpu {

  constructor(memory) {
    this.memory = memory;
    this.reset();
  }

  reset() {
    this.regs = {
      a: 0x01,
      f: 0xb0,
      b: 0x00,
      c: 0x13,
      d: 0x00,
      e: 0xD8,
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
    this.regs.f |= (1<<BIT_CARRY);
  }

  resetCarry() {
    this.regs.f &= (~(1<<BIT_CARRY) & 0xFF);
  }

  setHalfCarry() {
    this.regs.f |= (1<<BIT_HALF_CARRY);
  }

  resetHalfCarry() {
    this.regs.f &= (~(1<<BIT_HALF_CARRY) & 0xFF);
  }

  setSubtract() {
    this.regs.f |= (1<<BIT_SUBTRACT);
  }

  resetSubtract() {
    this.regs.f &= (~(1<<BIT_SUBTRACT) & 0xFF);
  }

  setZero() {
    this.regs.f |= (1<<BIT_ZERO);
  }

  resetZero() {
    this.regs.f &= (~(1<<BIT_ZERO) & 0xFF);
  }

  loadRom(rom) {
    this.memory.loadRom(rom);
  }
}

module.exports = GbCpu;
