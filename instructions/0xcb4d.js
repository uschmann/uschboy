module.exports = {
  name: 'bit 1, l',
  opcode: 'cb4d',
  cycles: 8,
  execute(cpu) {
    (cpu.regs.l & (1 << 1)) == 0 ? cpu.setZero() : cpu.resetZero();
    cpu.resetSubtract();
    cpu.setHalfCarry();

    cpu.regs.pc = (cpu.regs.pc + 2) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'bit 1, l';
  }
};
