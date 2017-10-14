module.exports = {
  name: 'bit 5, c',
  opcode: 'cb69',
  cycles: 8,
  execute(cpu) {
    (cpu.regs.c & (1 << 5)) == 0 ? cpu.setZero() : cpu.resetZero();
    cpu.resetSubtract();
    cpu.setHalfCarry();

    cpu.regs.pc = (cpu.regs.pc + 2) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'bit 5, c';
  }
};
