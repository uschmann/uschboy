module.exports = {
  name: 'bit 6, c',
  opcode: 'cb71',
  cycles: 8,
  execute(cpu) {
    (cpu.regs.c & (1 << 6)) == 0 ? cpu.setZero() : cpu.resetZero();
    cpu.resetSubtract();
    cpu.setHalfCarry();

    cpu.regs.pc = (cpu.regs.pc + 2) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'bit 6, c';
  }
};
