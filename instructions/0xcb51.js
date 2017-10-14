module.exports = {
  name: 'bit 2, c',
  opcode: 'cb51',
  cycles: 8,
  execute(cpu) {
    (cpu.regs.c & (1 << 2)) == 0 ? cpu.setZero() : cpu.resetZero();
    cpu.resetSubtract();
    cpu.setHalfCarry();

    cpu.regs.pc = (cpu.regs.pc + 2) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'bit 2, c';
  }
};
