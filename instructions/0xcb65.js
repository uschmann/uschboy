module.exports = {
  name: 'bit 4, l',
  opcode: 'cb65',
  cycles: 8,
  execute(cpu) {
    (cpu.regs.l & (1 << 4)) == 0 ? cpu.setZero() : cpu.resetZero();
    cpu.resetSubtract();
    cpu.setHalfCarry();

    cpu.regs.pc = (cpu.regs.pc + 2) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'bit 4, l';
  }
};
