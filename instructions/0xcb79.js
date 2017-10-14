module.exports = {
  name: 'bit 7, c',
  opcode: 'cb79',
  cycles: 8,
  execute(cpu) {
    (cpu.regs.c & (1 << 7)) == 0 ? cpu.setZero() : cpu.resetZero();
    cpu.resetSubtract();
    cpu.setHalfCarry();

    cpu.regs.pc = (cpu.regs.pc + 2) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'bit 7, c';
  }
};
