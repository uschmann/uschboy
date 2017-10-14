module.exports = {
  name: 'bit 7, b',
  opcode: 'cb78',
  cycles: 8,
  execute(cpu) {
    (cpu.regs.b & (1 << 7)) == 0 ? cpu.setZero() : cpu.resetZero();
    cpu.resetSubtract();
    cpu.setHalfCarry();

    cpu.regs.pc = (cpu.regs.pc + 2) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'bit 7, b';
  }
};
