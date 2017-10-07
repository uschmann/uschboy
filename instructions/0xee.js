module.exports = {
  name: 'xor #',
  opcode: 'ee',
  cycles: 8,
  execute(cpu) {
    cpu.regs.a = cpu.regs.a ^ cpu.memory.readByte(cpu.regs.pc + 1);

    cpu.regs.a == 0 ? cpu.setZero() : cpu.resetZero();
    cpu.resetSubtract();
    cpu.resetHalfCarry();
    cpu.resetCarry();

    cpu.regs.pc = (cpu.regs.pc + 2) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return `xor ${cpu.memory.readByte(cpu.regs.pc + 1).toString(16)}`;
  }
};
