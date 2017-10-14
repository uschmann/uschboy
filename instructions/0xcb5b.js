module.exports = {
  name: 'bit 3, e',
  opcode: 'cb5b',
  cycles: 8,
  execute(cpu) {
    (cpu.regs.e & (1 << 3)) == 0 ? cpu.setZero() : cpu.resetZero();
    cpu.resetSubtract();
    cpu.setHalfCarry();

    cpu.regs.pc = (cpu.regs.pc + 2) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'bit 3, e';
  }
};
