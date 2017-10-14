module.exports = {
  name: 'bit 4, d',
  opcode: 'cb62',
  cycles: 8,
  execute(cpu) {
    (cpu.regs.d & (1 << 4)) == 0 ? cpu.setZero() : cpu.resetZero();
    cpu.resetSubtract();
    cpu.setHalfCarry();

    cpu.regs.pc = (cpu.regs.pc + 2) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'bit 4, d';
  }
};
